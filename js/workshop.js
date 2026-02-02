/**
 * Workshop-Landingpage JavaScript
 * Laedt Objekte, rendert Karten, Filter und View-Toggle
 */

// === Konfiguration ===
const DATA_URL = '../data/kriminalmuseum/workshop_objekte.json';

// === Globale Variablen ===
let allObjects = [];
let currentView = 'grid';

// === Objekte laden ===
async function loadObjects() {
  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.json();
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

// === Objekt-Karte erstellen ===
function createObjectCard(obj) {
  const card = document.createElement('div');
  card.className = 'object-card';

  const inventoryNumber = extractInventoryNumber(obj.id);
  const description = extractDescription(obj.description);

  // Pruefen ob Jahr geschaetzt ist (88% der Daten)
  const isEstimated = obj.dateSource === 'estimated';

  card.innerHTML = `
    <div class="card-header">
      <div class="inventory-number">${inventoryNumber}</div>
      <div class="object-type">${obj.type || 'Unbekannt'}</div>
    </div>
    <div class="data-fields">
      <div class="data-row">
        <span class="data-label">Datierung</span>
        <span class="data-value">${obj.year || '?'}</span>
      </div>
      <div class="data-row">
        <span class="data-label">Material</span>
        <span class="data-value">${obj.material || '?'}</span>
      </div>
    </div>
    ${description ? `<div class="description">${description}</div>` : ''}
    ${isEstimated ? `
      <div class="uncertainty-badge">
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        Datierung geschaetzt
      </div>
    ` : ''}
  `;

  return card;
}

// === Objekte rendern ===
function renderObjects(objects) {
  const grid = document.getElementById('objects-grid');
  const countEl = document.getElementById('object-count');

  if (!grid) return;

  // Grid leeren
  grid.innerHTML = '';

  // View-Klasse setzen
  grid.className = currentView === 'list' ? 'objects-grid list-view' : 'objects-grid';

  if (objects.length === 0) {
    grid.innerHTML = '<div class="no-results"><p>Keine Objekte gefunden.</p></div>';
    if (countEl) countEl.textContent = '0 Objekte';
    return;
  }

  // Karten erstellen
  objects.forEach(obj => {
    grid.appendChild(createObjectCard(obj));
  });

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
    const title = (obj.title || '').toLowerCase();
    const type = (obj.type || '').toLowerCase();
    const material = (obj.material || '').toLowerCase();
    const description = (obj.description || '').toLowerCase();
    const year = String(obj.year || '');

    return title.includes(term) ||
           type.includes(term) ||
           material.includes(term) ||
           description.includes(term) ||
           year.includes(term);
  });
}

// === Such-Handler ===
function onSearch(event) {
  const searchTerm = event.target.value;
  const filtered = filterObjects(searchTerm);
  renderObjects(filtered);
}

// === View-Toggle ===
function setupViewToggle() {
  const buttons = document.querySelectorAll('.view-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;

      // Aktiven Button wechseln
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // View setzen und neu rendern
      currentView = view;

      // Aktuelle Suche beruecksichtigen
      const searchInput = document.getElementById('search-input');
      const searchTerm = searchInput ? searchInput.value : '';
      const filtered = filterObjects(searchTerm);
      renderObjects(filtered);
    });
  });
}

// === Initialisierung ===
async function init() {
  // Objekte laden
  allObjects = await loadObjects();

  if (allObjects.length === 0) {
    const grid = document.getElementById('objects-grid');
    if (grid) {
      grid.innerHTML = `
        <div class="no-results">
          <p><strong>Fehler beim Laden der Daten</strong></p>
          <p>Stelle sicher, dass:</p>
          <p>1. Die Datei workshop_objekte.json existiert</p>
          <p>2. Du Live Server verwendest (nicht die Datei direkt oeffnest)</p>
        </div>
      `;
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
