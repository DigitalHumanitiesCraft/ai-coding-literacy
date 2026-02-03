/**
 * AI Coding Literacy - Shared Utilities
 * Gemeinsame Funktionen fuer alle Seiten
 */

// ============================================
// Content Loading
// ============================================

/**
 * Laedt content.json
 * @returns {Promise<Object>} Content-Daten
 */
async function loadContentJson() {
  const response = await fetch('../data/content.json');
  return response.json();
}

// ============================================
// Sidebar Rendering
// ============================================

/**
 * Rendert die Kompetenz-Sidebar (einfache Version fuer Unterseiten)
 * @param {Object} data - Content-Daten mit chapters
 * @param {string} targetId - ID des Container-Elements
 */
function renderCompetencySidebar(data, targetId = 'sidebar-bars') {
  const sidebarBars = document.getElementById(targetId);
  if (!sidebarBars) return;

  data.chapters.forEach(chapter => {
    const link = document.createElement('a');
    link.href = `./#chapter-${chapter.id}`;
    link.className = `competency-bar comp-${chapter.id}`;
    link.title = chapter.name;
    link.innerHTML = `<span class="bar-label">${chapter.id}</span>`;
    sidebarBars.appendChild(link);
  });
}

// ============================================
// Code Block Utilities
// ============================================

/**
 * Kopiert Code aus einem Code-Block in die Zwischenablage
 * @param {HTMLElement} button - Der angeklickte Button
 * @param {string} successText - Text nach erfolgreichem Kopieren
 */
function copyCode(button, successText = 'kopiert!') {
  const codeBlock = button.closest('.code-block');
  const code = codeBlock.querySelector('code').textContent;

  navigator.clipboard.writeText(code).then(() => {
    const originalText = button.textContent;
    button.textContent = successText;
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000);
  });
}

/**
 * Escaped HTML-Sonderzeichen
 * @param {string} text - Zu escapender Text
 * @returns {string} Escapeter Text
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ============================================
// UI Helpers
// ============================================

/**
 * Erstellt ein Kompetenz-Badge Element
 * @param {Object} chapter - Chapter-Objekt mit id und color
 * @param {string} size - 'sm' fuer klein, '' fuer normal
 * @returns {string} HTML-String
 */
function createCompetencyBadge(chapter, size = '') {
  const sizeClass = size ? ` comp-badge-${size}` : '';
  return `<span class="comp-badge${sizeClass}" style="background: ${chapter.color}">${chapter.id}</span>`;
}

// ============================================
// Mobile Navigation
// ============================================

/**
 * Initialisiert die mobile Navigation
 */
function initMobileNav() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  // Mobile Menu Button erstellen
  const menuBtn = document.createElement('button');
  menuBtn.className = 'mobile-menu-btn';
  menuBtn.innerHTML = 'Menu';
  menuBtn.setAttribute('aria-label', 'Navigation oeffnen');
  document.body.appendChild(menuBtn);

  // Overlay erstellen
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);

  // Toggle Funktion
  function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
    menuBtn.innerHTML = sidebar.classList.contains('open') ? 'Schliessen' : 'Menu';
  }

  menuBtn.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', toggleSidebar);

  // Sidebar schliessen wenn Link geklickt wird
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 1000) {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
        menuBtn.innerHTML = 'Menu';
      }
    });
  });
}

// Mobile Nav initialisieren wenn DOM bereit
document.addEventListener('DOMContentLoaded', initMobileNav);

// ============================================
// i18n - Gemeinsame UI-Texte
// ============================================

const sharedI18n = {
  loadError: 'Fehler beim Laden der Inhalte.',
  copy: 'kopieren',
  copied: 'kopiert!'
};
