/**
 * Workshop-Landingpage JavaScript
 * Laedt Objekte, rendert Karten, Filter und View-Toggle
 *
 * Sicherheit: Verwendet textContent statt innerHTML fuer Benutzerdaten
 * Performance: DocumentFragment fuer DOM-Manipulation, Debouncing fuer Suche
 */

// === Konfiguration ===
const DATA_URL = '../data/workshop_objects.json';
const SEARCH_DEBOUNCE_MS = 300;

// === Globale Variablen ===
let allObjects = [];
let currentView = 'grid';
let searchTimeout = null;

// === Objekte laden ===
async function loadObjects() {
  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error('JSON ist kein Array');
    }
    return data;
  } catch (error) {
    console.error('Fehler beim Laden der Daten:', error);
    return [];
  }
}

// === Inventarnummer formatieren ===
function formatInventoryNumber(id) {
  if (!id) return 'Unknown';
  return `Inv. Nr. ${id}`;
}

// === Hilfsfunktion: Element mit Text erstellen ===
function createTextElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  el.textContent = text;
  return el;
}

// === Objekt-Karte erstellen (XSS-sicher) ===
function createObjectCard(obj) {
  const card = document.createElement('div');
  card.className = 'object-card';

  const inventoryNumber = formatInventoryNumber(obj.id);

  // Card Header
  const header = document.createElement('div');
  header.className = 'card-header';
  header.appendChild(createTextElement('div', 'inventory-number', inventoryNumber));

  // Type mit Origin: "Pottery - Rome"
  const typeOrigin = obj.origin ? `${obj.type} - ${obj.origin}` : obj.type || 'Unknown';
  header.appendChild(createTextElement('div', 'object-type', typeOrigin));
  card.appendChild(header);

  // Data Fields
  const dataFields = document.createElement('div');
  dataFields.className = 'data-fields';

  // Datierung
  const dateRow = document.createElement('div');
  dateRow.className = 'data-row';
  dateRow.appendChild(createTextElement('span', 'data-label', 'Datierung'));
  dateRow.appendChild(createTextElement('span', 'data-value', obj.date || '?'));
  dataFields.appendChild(dateRow);

  // Material
  const materialRow = document.createElement('div');
  materialRow.className = 'data-row';
  materialRow.appendChild(createTextElement('span', 'data-label', 'Material'));
  materialRow.appendChild(createTextElement('span', 'data-value', obj.material || '?'));
  dataFields.appendChild(materialRow);

  // Herkunft
  const locationRow = document.createElement('div');
  locationRow.className = 'data-row';
  locationRow.appendChild(createTextElement('span', 'data-label', 'Herkunft'));
  locationRow.appendChild(createTextElement('span', 'data-value', obj.origin || '?'));
  dataFields.appendChild(locationRow);

  card.appendChild(dataFields);

  // Uncertainty Badge (wenn certainty === 'uncertain')
  if (obj.certainty === 'uncertain') {
    const badge = document.createElement('div');
    badge.className = 'uncertainty-badge';

    // SVG Icon
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '12');
    circle.setAttribute('cy', '12');
    circle.setAttribute('r', '10');
    svg.appendChild(circle);

    const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line1.setAttribute('x1', '12');
    line1.setAttribute('y1', '8');
    line1.setAttribute('x2', '12');
    line1.setAttribute('y2', '12');
    svg.appendChild(line1);

    const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line2.setAttribute('x1', '12');
    line2.setAttribute('y1', '16');
    line2.setAttribute('x2', '12.01');
    line2.setAttribute('y2', '16');
    svg.appendChild(line2);

    badge.appendChild(svg);
    badge.appendChild(document.createTextNode(' Uncertain attribution'));
    card.appendChild(badge);
  }

  // Beschreibung
  if (obj.description) {
    card.appendChild(createTextElement('div', 'description', obj.description));
  }

  return card;
}

// === Objekte rendern (optimiert mit DocumentFragment) ===
function renderObjects(objects) {
  const grid = document.getElementById('objects-grid');
  const countEl = document.getElementById('object-count');

  if (!grid) return;

  // View-Klasse setzen
  grid.className = currentView === 'list' ? 'objects-grid list-view' : 'objects-grid';

  if (objects.length === 0) {
    grid.innerHTML = '';
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.appendChild(createTextElement('p', null, 'No objects found.'));
    grid.appendChild(noResults);
    if (countEl) countEl.textContent = '0 Objects';
    return;
  }

  // DocumentFragment fuer bessere Performance (nur ein Reflow)
  const fragment = document.createDocumentFragment();
  objects.forEach(obj => {
    fragment.appendChild(createObjectCard(obj));
  });

  grid.innerHTML = '';
  grid.appendChild(fragment);

  // Anzahl aktualisieren
  if (countEl) {
    countEl.textContent = `${objects.length} Object${objects.length !== 1 ? 's' : ''}`;
  }
}

// === Suche ===
function filterObjects(searchTerm) {
  if (!searchTerm.trim()) {
    return allObjects;
  }

  const term = searchTerm.toLowerCase();

  return allObjects.filter(obj => {
    const searchableText = [
      obj.id || '',
      obj.type || '',
      obj.typeDe || '',
      obj.origin || '',
      obj.material || '',
      obj.description || '',
      obj.date || ''
    ].join(' ').toLowerCase();

    return searchableText.includes(term);
  });
}

// === Such-Handler (mit Debouncing) ===
function onSearch(event) {
  clearTimeout(searchTimeout);

  searchTimeout = setTimeout(() => {
    const searchTerm = event.target.value;
    const filtered = filterObjects(searchTerm);
    renderObjects(filtered);
  }, SEARCH_DEBOUNCE_MS);
}

// === View-Toggle Handler ===
function handleViewToggle(event) {
  const btn = event.currentTarget;
  const view = btn.dataset.view;

  // Aktiven Button wechseln
  document.querySelectorAll('.view-btn').forEach(b => {
    b.classList.toggle('active', b === btn);
    b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
  });

  // View setzen
  currentView = view;

  // Aktuelle Suche beruecksichtigen
  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput ? searchInput.value : '';
  const filtered = filterObjects(searchTerm);
  renderObjects(filtered);
}

// === View-Toggle einrichten ===
function setupViewToggle() {
  const buttons = document.querySelectorAll('.view-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', handleViewToggle);
  });
}

// === Initialisierung ===
async function init() {
  // Objekte laden
  allObjects = await loadObjects();

  if (allObjects.length === 0) {
    const grid = document.getElementById('objects-grid');
    if (grid) {
      grid.innerHTML = '';
      const errorDiv = document.createElement('div');
      errorDiv.className = 'no-results';

      const strong = document.createElement('strong');
      strong.textContent = 'Error loading data';
      const p1 = document.createElement('p');
      p1.appendChild(strong);

      errorDiv.appendChild(p1);
      errorDiv.appendChild(createTextElement('p', null, 'Please ensure:'));
      errorDiv.appendChild(createTextElement('p', null, '1. The file workshop_objects.json exists'));
      errorDiv.appendChild(createTextElement('p', null, '2. You are using a local server (not opening the file directly)'));

      grid.appendChild(errorDiv);
    }
    return;
  }

  // Objekte rendern
  renderObjects(allObjects);

  // Such-Event registrieren
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', onSearch);
  }

  // View-Toggle einrichten
  setupViewToggle();
}

// === Start ===
document.addEventListener('DOMContentLoaded', init);
