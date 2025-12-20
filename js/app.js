/**
 * AI Coding Literacy - Vertikales Scroll-Layout
 * Einfaches, klares Layout mit Sidebar-Navigation
 */

// State
let contentData = null;
let loadedChapters = 0;
const CHAPTERS_PER_LOAD = 2;

// Detect language from URL path
function detectLanguage() {
  const path = window.location.pathname;
  if (path.startsWith('/en/') || path.startsWith('/en')) {
    return 'en';
  }
  return 'de';
}

// Get i18n strings based on language
function getI18n(lang) {
  const strings = {
    de: {
      loadError: 'Fehler beim Laden der Inhalte.',
      theorie: 'Theorie',
      uebungen: 'Übungen',
      ressourcen: 'Ressourcen',
      learnMore: 'Mehr lernen →'
    },
    en: {
      loadError: 'Error loading content.',
      theorie: 'Theory',
      uebungen: 'Exercises',
      ressourcen: 'Resources',
      learnMore: 'Learn more →'
    }
  };
  return strings[lang] || strings.de;
}

// Load JSON data
async function loadContent() {
  try {
    const lang = detectLanguage();
    const contentFile = lang === 'en' ? '/data/content-en.json' : '/data/content.json';
    const response = await fetch(contentFile);
    contentData = await response.json();
    initPage();
  } catch (error) {
    console.error('Error loading content:', error);
    const lang = detectLanguage();
    const i18n = getI18n(lang);
    document.getElementById('loading').textContent = i18n.loadError;
  }
}

// Initialize page
function initPage() {
  const lang = detectLanguage();
  const i18n = getI18n(lang);

  // Meta
  document.getElementById('subtitle').textContent = contentData.meta.subtitle;
  document.getElementById('description').textContent = contentData.meta.description;

  // Sidebar with expandable sub-links
  const sidebarBars = document.getElementById('sidebar-bars');
  contentData.chapters.forEach(chapter => {
    const barWrapper = document.createElement('div');
    barWrapper.className = 'competency-bar-wrapper';

    // Main bar (clickable)
    const link = document.createElement('a');
    link.href = `#chapter-${chapter.id}`;
    link.className = `competency-bar comp-${chapter.id}`;
    link.title = chapter.name;
    link.innerHTML = `<span class="bar-label"><span class="bar-label-id">${chapter.id}</span><span class="bar-label-name">${chapter.name}</span></span>`;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToChapter(chapter.id);
    });
    barWrapper.appendChild(link);

    // Sub-links (Theory, Exercises, Resources)
    const subLinks = document.createElement('div');
    subLinks.className = 'sidebar-sublinks';
    subLinks.id = `sublinks-${chapter.id}`;

    const sections = [
      { id: 'theorie', label: i18n.theorie },
      { id: 'uebungen', label: i18n.uebungen },
      { id: 'ressourcen', label: i18n.ressourcen }
    ];

    sections.forEach(sec => {
      const subLink = document.createElement('a');
      subLink.href = `#${chapter.id}-${sec.id}`;
      subLink.className = 'sidebar-sublink';
      subLink.textContent = sec.label;
      subLink.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(chapter.id, sec.id);
      });
      subLinks.appendChild(subLink);
    });

    barWrapper.appendChild(subLinks);
    sidebarBars.appendChild(barWrapper);
  });

  // Competency list in overview
  const list = document.getElementById('competency-list');
  contentData.chapters.forEach(chapter => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="comp-marker" style="background: ${chapter.color}"></span>
      <strong>${chapter.name}</strong> – ${chapter.longDescription || chapter.short}
    `;
    list.appendChild(li);
  });

  // Load initial chapters
  loadMoreChapters();

  // Setup observers
  setupInfiniteScroll();
  setupScrollSpy();
}

// Scroll to chapter
function scrollToChapter(chapterId) {
  // Load all chapters if needed
  while (loadedChapters < contentData.chapters.length) {
    loadMoreChapters();
  }

  const element = document.getElementById(`chapter-${chapterId}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Scroll to specific section within chapter
function scrollToSection(chapterId, sectionId) {
  // Load all chapters if needed
  while (loadedChapters < contentData.chapters.length) {
    loadMoreChapters();
  }

  const element = document.getElementById(`${chapterId}-${sectionId}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Load more chapters
function loadMoreChapters() {
  const container = document.getElementById('sessions-container');
  const loading = document.getElementById('loading');

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

// Create Chapter Element with vertical sections
function createChapterElement(chapter) {
  const section = document.createElement('section');
  section.className = 'chapter';
  section.id = `chapter-${chapter.id}`;
  section.dataset.competency = chapter.id;

  let html = '';

  // Chapter Header
  html += `
    <div class="chapter-header-block" style="border-left: 4px solid ${chapter.color}">
      <span class="chapter-id-badge" style="background: ${chapter.color}">${chapter.id}</span>
      <h2 class="chapter-title">${chapter.name}</h2>
      <p class="chapter-subtitle">${chapter.short}</p>
    </div>
  `;

  // Intro/Description
  if (chapter.theory?.description) {
    html += `
      <div class="chapter-intro-block">
        <p>${chapter.theory.description}</p>
      </div>
    `;
  }

  // Theorie Section
  if (chapter.theory) {
    html += `
      <div class="content-section" id="${chapter.id}-theorie">
        <h3 class="section-title">
          <span class="section-marker" style="background: ${chapter.color}"></span>
          Theorie
        </h3>
    `;

    // Key Points
    if (chapter.theory.keyPoints?.length > 0) {
      html += `<div class="keypoints"><h4>Kernpunkte</h4><ul class="keypoints-list">`;
      chapter.theory.keyPoints.forEach(point => {
        html += `<li>${point}</li>`;
      });
      html += `</ul></div>`;
    }

    // Concepts
    if (chapter.theory.concepts?.length > 0) {
      html += `<div class="concepts"><h4>Konzepte</h4><dl class="concepts-list">`;
      chapter.theory.concepts.forEach(concept => {
        html += `<dt>${concept.term}</dt><dd>${concept.definition}</dd>`;
      });
      html += `</dl></div>`;
    }

    html += `</div>`;
  }

  // Übungen Section
  if (chapter.handsOn?.length > 0) {
    html += `
      <div class="content-section" id="${chapter.id}-uebungen">
        <h3 class="section-title">
          <span class="section-marker" style="background: ${chapter.color}"></span>
          Übungen
        </h3>
    `;

    chapter.handsOn.forEach(exercise => {
      html += `
        <div class="exercise-block" id="exercise-${exercise.id}">
          <h4 class="exercise-title">${exercise.id}: ${exercise.title}</h4>
          <p class="exercise-summary">${exercise.summary}</p>
      `;

      // Goals
      if (exercise.goals?.length > 0) {
        html += `<div class="exercise-goals"><strong>Lernziele:</strong><ul>`;
        exercise.goals.forEach(goal => {
          html += `<li>${goal}</li>`;
        });
        html += `</ul></div>`;
      }

      // Exercise content
      if (exercise.exercise) {
        if (exercise.exercise.description) {
          html += `<p class="exercise-description">${exercise.exercise.description}</p>`;
        }
        if (exercise.exercise.code) {
          html += `
            <div class="code-block">
              <div class="code-header">
                <span class="filename">${exercise.exercise.filename || 'code.py'}</span>
                <button class="copy-btn" onclick="copyCode(this)">kopieren</button>
              </div>
              <pre><code>${escapeHtml(exercise.exercise.code)}</code></pre>
            </div>
          `;
        }
        if (exercise.exercise.task) {
          html += `<p class="exercise-task"><strong>Aufgabe:</strong> ${exercise.exercise.task}</p>`;
        }
      }

      // Reflection
      if (exercise.reflection?.length > 0) {
        html += `<div class="reflection"><strong>Reflexion:</strong><ul>`;
        exercise.reflection.forEach(q => {
          html += `<li>${q}</li>`;
        });
        html += `</ul></div>`;
      }

      html += `</div>`;
    });

    html += `</div>`;
  }

  // Ressourcen Section
  if (chapter.resources?.length > 0 || chapter.quote) {
    html += `
      <div class="content-section" id="${chapter.id}-ressourcen">
        <h3 class="section-title">
          <span class="section-marker" style="background: ${chapter.color}"></span>
          Ressourcen
        </h3>
    `;

    if (chapter.resources?.length > 0) {
      html += `<ul class="resources-list">`;
      chapter.resources.forEach(res => {
        html += `<li><a href="${res.url}" target="_blank" rel="noopener">${res.title}</a> <span class="resource-type">(${res.type})</span></li>`;
      });
      html += `</ul>`;
    }

    if (chapter.quote) {
      html += `
        <blockquote class="chapter-quote">
          "${chapter.quote.text}"
          <cite>— ${chapter.quote.source}</cite>
        </blockquote>
      `;
    }

    html += `</div>`;
  }

  section.innerHTML = html;
  return section;
}

// Setup Intersection Observer for infinite scroll
function setupInfiniteScroll() {
  const loading = document.getElementById('loading');

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

// Setup scroll spy for sidebar
function setupScrollSpy() {
  const visibleChapters = new Set();
  const visibleSections = new Set();

  // Shared helper: update sidebar state
  function updateSidebar(chapterId, sectionId = null) {
    // Update chapter bar
    document.querySelectorAll('.competency-bar').forEach(bar => {
      bar.classList.toggle('active', bar.classList.contains(`comp-${chapterId}`));
    });

    // Update sub-links visibility
    document.querySelectorAll('.sidebar-sublinks').forEach(sublinks => {
      sublinks.classList.remove('visible');
    });
    const activeSublinks = document.getElementById(`sublinks-${chapterId}`);
    if (activeSublinks) {
      activeSublinks.classList.add('visible');
    }

    // Update active sub-link
    if (sectionId) {
      document.querySelectorAll('.sidebar-sublink').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
      });
    }
  }

  // Find topmost element from a Set by comparing positions
  function findTopmostElement(elementSet, getElement) {
    let topmost = null;
    let topmostTop = Infinity;

    elementSet.forEach(id => {
      const el = getElement(id);
      if (el) {
        const top = el.getBoundingClientRect().top;
        if (top < topmostTop) {
          topmostTop = top;
          topmost = id;
        }
      }
    });
    return topmost;
  }

  // Chapter observer (fallback when no sections visible)
  const chapterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const competency = entry.target.dataset.competency;
      if (entry.isIntersecting) {
        visibleChapters.add(competency);
      } else {
        visibleChapters.delete(competency);
      }
    });

    // Only update if no sections visible
    if (visibleSections.size === 0 && visibleChapters.size > 0) {
      const topmost = findTopmostElement(
        visibleChapters,
        id => document.querySelector(`[data-competency="${id}"]`)
      );
      if (topmost) updateSidebar(topmost);
    }
  }, {
    rootMargin: '-10% 0px -70% 0px',
    threshold: 0
  });

  // Section observer (primary source of truth)
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const sectionId = entry.target.id;
      if (entry.isIntersecting) {
        visibleSections.add(sectionId);
      } else {
        visibleSections.delete(sectionId);
      }
    });

    if (visibleSections.size > 0) {
      const topmost = findTopmostElement(
        visibleSections,
        id => document.getElementById(id)
      );
      if (topmost) {
        const chapterId = topmost.split('-')[0];
        updateSidebar(chapterId, topmost);
      }
    }
  }, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  });

  // Observe chapters as they're added
  const container = document.getElementById('sessions-container');
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.classList && node.classList.contains('chapter')) {
          chapterObserver.observe(node);

          // Also observe sections within the chapter
          node.querySelectorAll('.content-section').forEach(section => {
            sectionObserver.observe(section);
          });
        }
      });
    });
  });

  mutationObserver.observe(container, { childList: true });
}

// Utility: Escape HTML
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Utility: Copy code
function copyCode(button) {
  const codeBlock = button.closest('.code-block');
  const code = codeBlock.querySelector('code').textContent;

  navigator.clipboard.writeText(code).then(() => {
    const originalText = button.textContent;
    button.textContent = 'kopiert!';
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', loadContent);
