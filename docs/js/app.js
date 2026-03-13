/**
 * AI Coding Literacy - Index Page
 * Benoetigt: shared.js
 */

// State
let contentData = null;
let loadedChapters = 0;
const CHAPTERS_PER_LOAD = 2;

// UI-Texte (nur Deutsch)
const i18n = {
  loadError: sharedI18n.loadError,
  theorie: 'Theorie',
  uebungen: 'Uebungen',
  ressourcen: 'Ressourcen',
  learnMore: 'Mehr lernen ->'
};

// Load JSON data
async function loadContent() {
  try {
    contentData = await loadContentJson();
    initPage();
  } catch (error) {
    console.error('Error loading content:', error);
    document.getElementById('loading').textContent = i18n.loadError;
  }
}

// Initialize page
function initPage() {
  // Update description if element exists
  const descEl = document.getElementById('description');
  if (descEl && contentData.meta.description) {
    descEl.textContent = contentData.meta.description;
  }

  // Competency grid in overview (as clickable cards with workshop style)
  const grid = document.getElementById('competency-list');
  if (grid) {
    contentData.chapters.forEach(chapter => {
      const card = document.createElement('a');
      card.href = `${chapter.id.toLowerCase()}.html`;
      card.className = 'context-card';
      card.style.textDecoration = 'none';
      card.innerHTML = `
        <h3>${chapter.id} - ${chapter.name}</h3>
        <p class="context-sub">${chapter.short}</p>
      `;
      grid.appendChild(card);
    });
  }

  // Render cycle (Der Zyklus)
  const cycleList = document.getElementById('cycle-list');
  if (cycleList) {
    const cycleSteps = [
      { id: 'CT', action: 'Problem verstehen' },
      { id: 'RE', action: 'Anforderungen definieren' },
      { id: 'CE', action: 'Kontext aufbereiten' },
      { id: 'PE', action: 'Prompt formulieren' },
      { id: 'CL', action: 'Code verstehen' },
      { id: 'RV', action: 'Ergebnis pruefen' }
    ];

    cycleSteps.forEach((step, index) => {
      const chapter = contentData.chapters.find(c => c.id === step.id);
      if (chapter) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${step.action}</strong> (${chapter.name})${index === 5 ? ' - zurueck zu 1.' : ''}`;
        cycleList.appendChild(li);
      }
    });
  }

  // Load initial chapters for Sessions section
  loadMoreChapters();

  // Setup infinite scroll
  setupInfiniteScroll();
}

// Load more chapters
function loadMoreChapters() {
  const container = document.getElementById('sessions-container');
  const loading = document.getElementById('loading');

  if (!container || !loading) return;

  const chaptersToLoad = contentData.chapters.slice(
    loadedChapters,
    loadedChapters + CHAPTERS_PER_LOAD
  );

  if (chaptersToLoad.length === 0) {
    loading.style.display = 'none';
    return;
  }

  chaptersToLoad.forEach(chapter => {
    const section = createChapterElement(chapter);
    container.appendChild(section);

    // Trigger visibility animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        section.classList.add('visible');
      });
    });
  });

  loadedChapters += chaptersToLoad.length;

  if (loadedChapters >= contentData.chapters.length) {
    loading.style.display = 'none';
  }
}

// Create Chapter Element with workshop-style sections
function createChapterElement(chapter) {
  const section = document.createElement('section');
  section.className = 'materials-section';
  section.id = `chapter-${chapter.id}`;
  section.style.marginTop = '2rem';

  let html = '';

  // Chapter Header as a styled card
  html += `
    <h3 style="display: flex; align-items: center; gap: 0.75rem;">
      <span style="background: var(--ws-terracotta); color: white; padding: 0.25rem 0.5rem; font-size: 0.85rem;">${chapter.id}</span>
      ${chapter.name}
    </h3>
    <p style="color: var(--ws-ink-faded); margin-bottom: 1rem;">${chapter.short}</p>
  `;

  // Intro/Description
  if (chapter.theory?.description) {
    html += `<p>${chapter.theory.description}</p>`;
  }

  // Key Points (if available, show as compact list)
  if (chapter.theory?.keyPoints?.length > 0) {
    html += `
      <div class="learning-objectives" style="margin-top: 1rem;">
        <h4 class="section-heading">Kernpunkte</h4>
        <ul class="objectives-list">
    `;
    chapter.theory.keyPoints.slice(0, 4).forEach(point => {
      html += `<li>${point}</li>`;
    });
    html += `</ul></div>`;
  }

  // Link to detail page
  html += `
    <p style="margin-top: 1rem;">
      <a href="${chapter.id.toLowerCase()}.html" class="concept-link">
        Zur ${chapter.name}-Detailseite
      </a>
    </p>
  `;

  section.innerHTML = html;
  return section;
}

// Setup Intersection Observer for infinite scroll
function setupInfiniteScroll() {
  const loading = document.getElementById('loading');
  if (!loading) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && loadedChapters < contentData.chapters.length) {
        loadMoreChapters();
      }
    });
  }, {
    rootMargin: '200px'
  });

  observer.observe(loading);
}

// Initialize
document.addEventListener('DOMContentLoaded', loadContent);
