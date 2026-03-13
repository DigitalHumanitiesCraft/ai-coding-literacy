/**
 * Museumsobjekte Webseite - JavaScript
 * Tutorial 1, Teil 5-6: Daten laden und anzeigen
 */

// =============================================================================
// KONFIGURATION
// =============================================================================

// Pfad zur JSON-Datei
// Falls die Datei im selben Ordner liegt: 'workshop_objekte.json'
// Falls im data-Ordner: '../../../data/kriminalmuseum/workshop_objekte.json'
const DATEN_URL = 'workshop_objekte.json';

// =============================================================================
// GLOBALE VARIABLEN
// =============================================================================

let alleObjekte = [];

// =============================================================================
// FUNKTIONEN
// =============================================================================

/**
 * Erstellt eine Karte fuer ein Objekt
 * @param {Object} objekt - Das Objekt aus der JSON-Datei
 * @returns {HTMLElement} - Das erstellte Karten-Element
 */
function erstelleKarte(objekt) {
  const card = document.createElement('div');
  card.className = 'card';

  // HTML fuer die Karte
  card.innerHTML = `
    <h2 class="card-title">${objekt.title || 'Ohne Titel'}</h2>
    <div class="card-meta">
      ${objekt.objectClass ? `<span class="tag tag-class">${objekt.objectClass}</span>` : ''}
      ${objekt.year ? `<span class="tag tag-year">${objekt.year}</span>` : ''}
    </div>
    <p class="card-description">${objekt.description || ''}</p>
  `;

  return card;
}

/**
 * Zeigt die Objekte im Container an
 * @param {Array} objekte - Array von Objekten
 */
function zeigeObjekte(objekte) {
  const container = document.getElementById('cards-container');
  const resultCount = document.getElementById('result-count');

  // Container leeren
  container.innerHTML = '';

  if (objekte.length === 0) {
    container.innerHTML = '<div class="no-results">Keine Objekte gefunden.</div>';
    resultCount.textContent = '0 Objekte';
    return;
  }

  // Karten erstellen und einfuegen
  objekte.forEach(objekt => {
    container.appendChild(erstelleKarte(objekt));
  });

  // Anzahl aktualisieren
  resultCount.textContent = `${objekte.length} Objekt${objekte.length !== 1 ? 'e' : ''}`;
}

/**
 * Befuellt das Filter-Dropdown mit den verfuegbaren Kategorien
 */
function befuelleFilter() {
  const filter = document.getElementById('kategorie-filter');

  // Alle einzigartigen objectClass-Werte sammeln
  const kategorien = [...new Set(
    alleObjekte
      .map(obj => obj.objectClass)
      .filter(k => k) // Leere Werte entfernen
  )].sort();

  // Optionen hinzufuegen
  kategorien.forEach(kategorie => {
    const option = document.createElement('option');
    option.value = kategorie;
    option.textContent = kategorie;
    filter.appendChild(option);
  });
}

/**
 * Filtert die Objekte nach der ausgewaehlten Kategorie
 * @param {Event} event - Das Change-Event
 */
function onFilterChange(event) {
  const kategorie = event.target.value;

  if (!kategorie) {
    // "Alle anzeigen" ausgewaehlt
    zeigeObjekte(alleObjekte);
  } else {
    // Nach Kategorie filtern
    const gefiltert = alleObjekte.filter(obj => obj.objectClass === kategorie);
    zeigeObjekte(gefiltert);
  }
}

/**
 * Laedt die Daten und initialisiert die Seite
 */
async function initialisieren() {
  const container = document.getElementById('cards-container');

  try {
    // Ladehinweis anzeigen
    container.innerHTML = '<div class="loading">Lade Objekte...</div>';

    // Daten laden
    const response = await fetch(DATEN_URL);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    alleObjekte = await response.json();

    // Filter befuellen
    befuelleFilter();

    // Objekte anzeigen
    zeigeObjekte(alleObjekte);

    // Filter-Event registrieren
    document.getElementById('kategorie-filter').addEventListener('change', onFilterChange);

  } catch (error) {
    console.error('Fehler beim Laden der Daten:', error);
    container.innerHTML = `
      <div class="no-results">
        <p><strong>Fehler beim Laden der Daten</strong></p>
        <p>${error.message}</p>
        <p style="margin-top: 1rem; font-size: 0.9rem;">
          Stellen Sie sicher, dass:<br>
          1. Die Datei workshop_objekte.json existiert<br>
          2. Sie Live Server verwenden (nicht die Datei direkt oeffnen)<br>
          3. Der Pfad in DATEN_URL korrekt ist
        </p>
      </div>
    `;
  }
}

// =============================================================================
// START
// =============================================================================

// Seite initialisieren wenn DOM geladen ist
document.addEventListener('DOMContentLoaded', initialisieren);
