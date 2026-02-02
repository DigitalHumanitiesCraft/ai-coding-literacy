/**
 * Workshop-Landingpage JavaScript
 * Laedt Objekte, rendert Karten, Filter und View-Toggle
 *
 * Sicherheit: Verwendet textContent statt innerHTML fuer Benutzerdaten
 * Performance: DocumentFragment fuer DOM-Manipulation, Debouncing fuer Suche
 */

// === Konfiguration ===
const DATA_URL = '../data/kriminalmuseum/workshop_objekte.json';
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

// === Inventarnummer extrahieren ===
function extractInventoryNumber(id) {
  // Format: "o:km.8009" -> "Inv. Nr. KM.8009"
  if (!id) return 'Unbekannt';
  const match = id.match(/o:km\.(\d+)/i);
  if (match) {
    return `Inv. Nr. KM.${match[1]}`;
  }
  return id;
}

// === Beschreibung kuerzen ===
function extractDescription(description) {
  if (!description) return '';

  // Versuche den Description-Teil zu extrahieren
  if (description.includes('Description:')) {
    const start = description.indexOf('Description:') + 12;
    const end = description.indexOf('|', start);
    const extracted = end > 0
      ? description.substring(start, end).trim()
      : description.substring(start).trim();

    // Entferne Jahr am Ende falls vorhanden
    return extracted.replace(/,?\s*Jahr\s+\d{4}$/i, '').trim();
  }

  return description;
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

  const inventoryNumber = extractInventoryNumber(obj.id);
  const description = extractDescription(obj.description);

  // Pruefen ob Jahr unsicher/geschaetzt ist
  const yearStr = String(obj.year || '');
  const isEstimated = !obj.year || obj.year === '?' || yearStr.includes('ca.') || yearStr.includes('?');

  // Card Header
  const header = document.createElement('div');
  header.className = 'card-header';
  header.appendChild(createTextElement('div', 'inventory-number', inventoryNumber));
  header.appendChild(createTextElement('div', 'object-type', obj.type || 'Unbekannt'));
  card.appendChild(header);

  // Data Fields
  const dataFields = document.createElement('div');
  dataFields.className = 'data-fields';

  // Datierung
  const dateRow = document.createElement('div');
  dateRow.className = 'data-row';
  dateRow.appendChild(createTextElement('span', 'data-label', 'Datierung'));
  dateRow.appendChild(createTextElement('span', 'data-value', obj.year || '?'));
  dataFields.appendChild(dateRow);

  // Material
  const materialRow = document.createElement('div');
  materialRow.className = 'data-row';
  materialRow.appendChild(createTextElement('span', 'data-label', 'Material'));
  materialRow.appendChild(createTextElement('span', 'data-value', obj.material || '?'));
  dataFields.appendChild(materialRow);

  card.appendChild(dataFields);

  // Beschreibung (wenn vorhanden)
  if (description) {
    card.appendChild(createTextElement('div', 'description', description));
  }

  // Uncertainty Badge (wenn Datierung unsicher)
  if (isEstimated) {
    const badge = document.createElement('div');
    badge.className = 'uncertainty-badge';

    // SVG Icon (statisch, kein Sicherheitsrisiko)
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
    badge.appendChild(document.createTextNode(' Datierung geschaetzt'));
    card.appendChild(badge);
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
    noResults.appendChild(createTextElement('p', null, 'Keine Objekte gefunden.'));
    grid.appendChild(noResults);
    if (countEl) countEl.textContent = '0 Objekte';
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
    countEl.textContent = `${objects.length} Objekt${objects.length !== 1 ? 'e' : ''}`;
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
      obj.title || '',
      obj.type || '',
      obj.material || '',
      obj.description || '',
      String(obj.year || '')
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

      const p1 = createTextElement('p', null, 'Fehler beim Laden der Daten');
      p1.querySelector ? null : (p1.style.fontWeight = 'bold');
      const strong = document.createElement('strong');
      strong.textContent = 'Fehler beim Laden der Daten';
      const p1New = document.createElement('p');
      p1New.appendChild(strong);

      errorDiv.appendChild(p1New);
      errorDiv.appendChild(createTextElement('p', null, 'Stelle sicher, dass:'));
      errorDiv.appendChild(createTextElement('p', null, '1. Die Datei workshop_objekte.json existiert'));
      errorDiv.appendChild(createTextElement('p', null, '2. Du Live Server verwendest (nicht die Datei direkt oeffnest)'));

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
