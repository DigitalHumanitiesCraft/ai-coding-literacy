/**
 * Glossary & Info Panel System
 * Handles hover tooltips, pinning mechanics, and glossary term interactions
 */

class GlossaryManager {
  constructor() {
    this.glossaryData = null;
    this.currentLanguage = this.detectLanguage();
    this.infoPanel = document.getElementById('info-panel');
    this.infoPanelContent = document.getElementById('info-panel-content');
    this.closeButton = document.getElementById('info-panel-close');

    this.hoverTimeout = null;
    this.isPinned = false;
    this.hoverDelay = 1000; // 1 second hover to pin

    this.init();
  }

  detectLanguage() {
    const path = window.location.pathname;
    return path.includes('/en/') ? 'en' : 'de';
  }

  async init() {
    await this.loadGlossaryData();
    this.attachEventListeners();
    this.markupGlossaryTerms();
  }

  async loadGlossaryData() {
    try {
      const fileName = this.currentLanguage === 'en' ? 'glossar-en.json' : 'glossar.json';
      const response = await fetch(`/data/${fileName}`);
      this.glossaryData = await response.json();
    } catch (error) {
      console.error('Failed to load glossary data:', error);
    }
  }

  markupGlossaryTerms() {
    if (!this.glossaryData) return;

    // Get all text nodes in main content
    const mainContent = document.getElementById('content');
    if (!mainContent) return;

    this.glossaryData.terms.forEach(term => {
      // Create regex for the term (case-insensitive, whole word)
      const regex = new RegExp(`\\b(${term.term})\\b`, 'gi');

      this.replaceTextWithGlossaryTerm(mainContent, regex, term);
    });
  }

  replaceTextWithGlossaryTerm(element, regex, termData) {
    // Skip if already processed or is a script/style element
    if (element.classList && element.classList.contains('glossary-term')) return;
    if (['SCRIPT', 'STYLE', 'CODE', 'PRE'].includes(element.tagName)) return;

    if (element.nodeType === Node.TEXT_NODE) {
      const text = element.textContent;
      if (regex.test(text)) {
        const span = document.createElement('span');
        span.innerHTML = text.replace(regex, (match) => {
          return `<span class="glossary-term" data-term-id="${termData.id}" data-category="${termData.category}">${match}</span>`;
        });

        element.replaceWith(...span.childNodes);
      }
    } else {
      // Recursively process child nodes
      Array.from(element.childNodes).forEach(child => {
        this.replaceTextWithGlossaryTerm(child, regex, termData);
      });
    }
  }

  attachEventListeners() {
    // Close button
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => this.closePanel());
    }

    // Click outside to close
    document.addEventListener('click', (e) => {
      if (this.isPinned &&
          this.infoPanel &&
          !this.infoPanel.contains(e.target) &&
          e.target.classList &&
          !e.target.classList.contains('glossary-term')) {
        this.closePanel();
      }
    });

    // Delegate event listeners for glossary terms
    document.addEventListener('mouseenter', (e) => {
      if (e.target.classList && e.target.classList.contains('glossary-term')) {
        this.handleTermHover(e.target);
      }
    }, true);

    document.addEventListener('mouseleave', (e) => {
      if (e.target.classList && e.target.classList.contains('glossary-term')) {
        this.handleTermLeave(e.target);
      }
    }, true);

    document.addEventListener('click', (e) => {
      if (e.target.classList && e.target.classList.contains('glossary-term')) {
        this.handleTermClick(e.target);
      }
    });
  }

  handleTermHover(termElement) {
    const termId = termElement.dataset.termId;

    // Clear any existing timeout
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }

    // Show panel immediately
    this.showTerm(termId, false);

    // Add pinning class to start progress bar animation
    this.infoPanel.classList.add('pinning');

    // Set timeout to pin after hover delay
    this.hoverTimeout = setTimeout(() => {
      if (!this.isPinned) {
        this.pinPanel();
      }
    }, this.hoverDelay);
  }

  handleTermLeave(termElement) {
    // Clear timeout if user leaves before pinning
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }

    // Remove pinning animation class
    this.infoPanel.classList.remove('pinning');

    // Only close if not pinned
    if (!this.isPinned) {
      // Small delay to allow moving to panel
      setTimeout(() => {
        if (!this.isPinned && this.infoPanel && !this.infoPanel.matches(':hover')) {
          this.closePanel();
        }
      }, 300);
    }
  }

  handleTermClick(termElement) {
    const termId = termElement.dataset.termId;
    this.showTerm(termId, true);
  }

  showTerm(termId, pin = false) {
    if (!this.infoPanel || !this.infoPanelContent) return;

    const term = this.glossaryData.terms.find(t => t.id === termId);
    if (!term) return;

    // Get category info
    const category = this.glossaryData.categories.find(c => c.id === term.category);

    // Build panel content
    this.infoPanelContent.innerHTML = `
      <div class="info-panel-header">
        <h3 class="glossary-term-title">${term.term}</h3>
        ${category ? `<span class="glossary-category-badge" data-category="${category.id}">${category.name}</span>` : ''}
      </div>

      <div class="glossary-definition">
        <p>${term.definition}</p>
      </div>

      ${term.relatedTerms && term.relatedTerms.length > 0 ? `
        <div class="glossary-related">
          <h4>${this.currentLanguage === 'en' ? 'Related Terms' : 'Verwandte Begriffe'}</h4>
          <ul class="glossary-related-list">
            ${term.relatedTerms.map(relatedId => {
              const relatedTerm = this.glossaryData.terms.find(t => t.id === relatedId);
              return relatedTerm ? `
                <li>
                  <a href="#" class="glossary-related-link" data-term-id="${relatedTerm.id}">
                    ${relatedTerm.term}
                  </a>
                </li>
              ` : '';
            }).join('')}
          </ul>
        </div>
      ` : ''}
    `;

    // Attach click handlers for related terms
    this.infoPanelContent.querySelectorAll('.glossary-related-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const relatedId = e.target.dataset.termId;
        this.showTerm(relatedId, true);
      });
    });

    // Show panel
    this.infoPanel.classList.add('visible');

    if (pin) {
      this.pinPanel();
    }
  }

  pinPanel() {
    this.isPinned = true;
    this.infoPanel.classList.remove('pinning');
    this.infoPanel.classList.add('pinned');
  }

  closePanel() {
    this.isPinned = false;
    this.infoPanel.classList.remove('visible', 'pinned', 'pinning');

    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.glossaryManager = new GlossaryManager();
});
