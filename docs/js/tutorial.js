/**
 * Tutorial JavaScript
 * Glossar-Highlighting und Tooltip-Funktionalitaet
 */

(function() {
  'use strict';

  let glossarData = null;
  let tooltip = null;

  /**
   * Laedt die Glossar-Daten aus der JSON-Datei
   */
  async function loadGlossar() {
    try {
      const response = await fetch('../data/glossar.json');
      glossarData = await response.json();
      initGlossarTerms();
    } catch (error) {
      console.error('Fehler beim Laden des Glossars:', error);
    }
  }

  /**
   * Initialisiert die Glossar-Begriffe auf der Seite
   */
  function initGlossarTerms() {
    if (!glossarData || !glossarData.terms) return;

    // Erstelle Lookup-Map fuer schnellen Zugriff
    const termMap = new Map();
    glossarData.terms.forEach(term => {
      termMap.set(term.id, term);
      // Auch nach dem term selbst suchen (lowercase)
      termMap.set(term.term.toLowerCase(), term);
      if (term.short && term.short !== term.term) {
        termMap.set(term.short.toLowerCase(), term);
      }
    });

    // Finde alle Glossar-Terms im Dokument
    const glossarTerms = document.querySelectorAll('.glossar-term');

    glossarTerms.forEach(element => {
      const termId = element.dataset.term;
      const termData = termMap.get(termId) || termMap.get(termId.toLowerCase());

      if (termData) {
        element.setAttribute('tabindex', '0');
        element.setAttribute('role', 'button');
        element.setAttribute('aria-describedby', 'glossar-tooltip');

        // Event Listeners
        element.addEventListener('mouseenter', (e) => showTooltip(e, termData));
        element.addEventListener('mouseleave', hideTooltip);
        element.addEventListener('focus', (e) => showTooltip(e, termData));
        element.addEventListener('blur', hideTooltip);
        element.addEventListener('click', (e) => {
          e.preventDefault();
          toggleTooltip(e, termData);
        });
        element.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTooltip(e, termData);
          }
          if (e.key === 'Escape') {
            hideTooltip();
          }
        });
      }
    });

    // Erstelle Tooltip-Element
    createTooltip();
  }

  /**
   * Erstellt das Tooltip-Element
   */
  function createTooltip() {
    tooltip = document.createElement('div');
    tooltip.className = 'glossar-tooltip';
    tooltip.id = 'glossar-tooltip';
    tooltip.setAttribute('role', 'tooltip');
    tooltip.innerHTML = `
      <div class="glossar-tooltip-term"></div>
      <p class="glossar-tooltip-definition"></p>
    `;
    document.body.appendChild(tooltip);

    // Schliessen bei Klick ausserhalb
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.glossar-term') && !e.target.closest('.glossar-tooltip')) {
        hideTooltip();
      }
    });
  }

  /**
   * Zeigt das Tooltip an
   */
  function showTooltip(event, termData) {
    if (!tooltip || !termData) return;

    const termElement = tooltip.querySelector('.glossar-tooltip-term');
    const defElement = tooltip.querySelector('.glossar-tooltip-definition');

    termElement.textContent = termData.term + (termData.short !== termData.term ? ` (${termData.short})` : '');
    defElement.textContent = termData.definition;

    // Positionierung
    const rect = event.target.getBoundingClientRect();
    const tooltipWidth = 350;

    let left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
    let top = rect.bottom + 10;

    // Viewport-Korrektur
    if (left < 10) left = 10;
    if (left + tooltipWidth > window.innerWidth - 10) {
      left = window.innerWidth - tooltipWidth - 10;
    }

    // Wenn nicht genug Platz unten, zeige oben
    if (top + 200 > window.innerHeight) {
      top = rect.top - 10;
      tooltip.style.transform = 'translateY(-100%)';
    } else {
      tooltip.style.transform = 'translateY(0)';
    }

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.classList.add('visible');
  }

  /**
   * Versteckt das Tooltip
   */
  function hideTooltip() {
    if (tooltip) {
      tooltip.classList.remove('visible');
    }
  }

  /**
   * Togglet das Tooltip (fuer Touch/Klick)
   */
  function toggleTooltip(event, termData) {
    if (tooltip && tooltip.classList.contains('visible')) {
      hideTooltip();
    } else {
      showTooltip(event, termData);
    }
  }

  // Initialisierung
  document.addEventListener('DOMContentLoaded', loadGlossar);

})();
