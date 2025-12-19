/**
 * AI Coding Literacy - Prompt-Loop UI
 * Horizontale Loop-Panels pro Session
 */

// State
let contentData = null;
let loadedChapters = 0;
const CHAPTERS_PER_LOAD = 2;
const SCROLL_STATE_KEY = 'ai-coding-literacy-loop-v2'; // v2: Reset für neues UI

// Load JSON data
async function loadContent() {
  try {
    const response = await fetch('/data/content.json');
    contentData = await response.json();
    initPage();
  } catch (error) {
    console.error('Fehler beim Laden:', error);
    document.getElementById('loading').textContent = 'Fehler beim Laden der Inhalte.';
  }
}

// Initialize page
function initPage() {
  // Meta
  document.getElementById('subtitle').textContent = contentData.meta.subtitle;
  document.getElementById('description').textContent = contentData.meta.description;

  // Sidebar competency bars
  const sidebarBars = document.getElementById('sidebar-bars');
  contentData.chapters.forEach(chapter => {
    const link = document.createElement('a');
    link.href = `#chapter-${chapter.id}`;
    link.className = `competency-bar comp-${chapter.id}`;
    link.title = chapter.name;
    link.innerHTML = `<span class="bar-label">${chapter.id}</span>`;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToChapter(chapter.id);
    });
    sidebarBars.appendChild(link);
  });

  // Competency list in overview
  const list = document.getElementById('competency-list');
  contentData.chapters.forEach(chapter => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="comp-marker" style="background: ${chapter.color}"></span>
      <strong>${chapter.name}</strong> – ${chapter.short}
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
  while (loadedChapters < contentData.chapters.length) {
    loadMoreChapters();
  }

  const element = document.getElementById(`chapter-${chapterId}`);
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
    const section = createLoopElement(chapter);
    container.appendChild(section);

    // Trigger visibility animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        section.classList.add('visible');
      });
    });

    // Restore scroll state
    restoreScrollState(chapter.id);
  });

  loadedChapters += chaptersToLoad.length;

  if (loadedChapters >= contentData.chapters.length) {
    loading.style.display = 'none';
  }
}

// Create Loop Element with horizontal panels
function createLoopElement(chapter) {
  const section = document.createElement('section');
  section.className = 'chapter';
  section.id = `chapter-${chapter.id}`;
  section.dataset.competency = chapter.id;

  // Loop Progress Indicator
  const progress = createLoopProgress();
  section.appendChild(progress);

  // Loop Container with panels
  const loopContainer = document.createElement('div');
  loopContainer.className = 'loop-container';
  loopContainer.dataset.panel = '0';

  // Panel 1: INPUT (Überblick)
  loopContainer.appendChild(createInputPanel(chapter));

  // Panel 2: PROCESS (Theorie)
  if (chapter.theory) {
    loopContainer.appendChild(createProcessPanel(chapter));
  }

  // Panel 3: EXECUTE (Übungen)
  if (chapter.handsOn && chapter.handsOn.length > 0) {
    loopContainer.appendChild(createExecutePanel(chapter));
  }

  // Panel 4: OUTPUT (Ressourcen)
  if ((chapter.resources && chapter.resources.length > 0) || chapter.quote) {
    loopContainer.appendChild(createOutputPanel(chapter));
  }

  // Track scroll position and update progress
  loopContainer.addEventListener('scroll', () => {
    const panelWidth = loopContainer.firstElementChild.offsetWidth;
    const panelIndex = Math.round(loopContainer.scrollLeft / panelWidth);
    loopContainer.dataset.panel = panelIndex;
    updateLoopProgress(section, panelIndex);
    saveScrollState(chapter.id, panelIndex);
  });

  section.appendChild(loopContainer);
  return section;
}

// Create Loop Progress Indicator
function createLoopProgress() {
  const progress = document.createElement('div');
  progress.className = 'loop-progress';

  const steps = ['INPUT', 'PROCESS', 'EXECUTE', 'OUTPUT'];
  steps.forEach((step, i) => {
    const stepEl = document.createElement('span');
    stepEl.className = `loop-step ${i === 0 ? 'active' : ''}`;
    stepEl.dataset.step = i;
    stepEl.innerHTML = `<span class="loop-dot"></span>${step}`;
    progress.appendChild(stepEl);

    if (i < steps.length - 1) {
      const line = document.createElement('span');
      line.className = 'loop-line';
      progress.appendChild(line);
    }
  });

  return progress;
}

// Update Loop Progress based on panel index
function updateLoopProgress(section, panelIndex) {
  const steps = section.querySelectorAll('.loop-step');
  const lines = section.querySelectorAll('.loop-line');

  steps.forEach((step, i) => {
    step.classList.remove('active', 'completed');
    if (i < panelIndex) {
      step.classList.add('completed');
    } else if (i === panelIndex) {
      step.classList.add('active');
    }
  });

  lines.forEach((line, i) => {
    line.classList.toggle('completed', i < panelIndex);
  });
}

// Panel 1: INPUT
function createInputPanel(chapter) {
  const panel = document.createElement('div');
  panel.className = 'loop-panel panel-input';

  panel.innerHTML = `
    <span class="panel-phase">Input</span>
    <div class="chapter-header">
      <span class="chapter-id">${chapter.id}</span>
      <span class="chapter-color" style="background: ${chapter.color}"></span>
    </div>
    <h3>${chapter.name}</h3>
    <p class="chapter-short">${chapter.short}</p>
    <button class="loop-start-btn" type="button">Loop starten</button>
  `;

  // Click handler for start button
  panel.querySelector('.loop-start-btn').addEventListener('click', () => {
    const container = panel.closest('.loop-container');
    scrollToPanel(container, 1);
  });

  return panel;
}

// Panel 2: PROCESS (Theorie)
function createProcessPanel(chapter) {
  const panel = document.createElement('div');
  panel.className = 'loop-panel panel-process';

  let html = `<span class="panel-phase">Process</span>`;
  html += `<p>${chapter.theory.description}</p>`;

  // Key Points
  if (chapter.theory.keyPoints && chapter.theory.keyPoints.length > 0) {
    html += `<h4>Kernpunkte</h4><ul class="goals-list">`;
    chapter.theory.keyPoints.forEach(point => {
      html += `<li>${point}</li>`;
    });
    html += `</ul>`;
  }

  // Concepts
  if (chapter.theory.concepts && chapter.theory.concepts.length > 0) {
    html += `<div class="concepts"><h4>Konzepte</h4>`;
    chapter.theory.concepts.forEach(concept => {
      html += `<p class="concept"><span class="concept-term">${concept.term}</span> – ${concept.definition}</p>`;
    });
    html += `</div>`;
  }

  panel.innerHTML = html;
  return panel;
}

// Panel 3: EXECUTE (Übungen)
function createExecutePanel(chapter) {
  const panel = document.createElement('div');
  panel.className = 'loop-panel panel-execute';

  let html = `<span class="panel-phase">Execute</span>`;

  chapter.handsOn.forEach(exercise => {
    html += `
      <div class="exercise" id="exercise-${exercise.id}">
        <h4>${exercise.id}: ${exercise.title}</h4>
        <p>${exercise.summary}</p>
    `;

    // Goals
    if (exercise.goals && exercise.goals.length > 0) {
      html += `<p><strong>Lernziele:</strong></p><ul class="goals-list">`;
      exercise.goals.forEach(goal => {
        html += `<li>${goal}</li>`;
      });
      html += `</ul>`;
    }

    // Exercise details
    if (exercise.exercise) {
      if (exercise.exercise.description) {
        html += `<p>${exercise.exercise.description}</p>`;
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
        html += `<p><strong>Aufgabe:</strong> ${exercise.exercise.task}</p>`;
      }
    }

    // Reflection
    if (exercise.reflection && exercise.reflection.length > 0) {
      html += `<div class="reflection"><h5>Reflexion</h5><ul>`;
      exercise.reflection.forEach(q => {
        html += `<li>${q}</li>`;
      });
      html += `</ul></div>`;
    }

    html += `</div>`;
  });

  panel.innerHTML = html;
  return panel;
}

// Panel 4: OUTPUT (Ressourcen)
function createOutputPanel(chapter) {
  const panel = document.createElement('div');
  panel.className = 'loop-panel panel-output';

  let html = `<span class="panel-phase">Output</span>`;

  // Resources
  if (chapter.resources && chapter.resources.length > 0) {
    html += `<h4>Weiterführende Ressourcen</h4><ul class="resources-list">`;
    chapter.resources.forEach(res => {
      html += `<li><a href="${res.url}" target="_blank" rel="noopener">${res.title}</a> <span class="resource-type">(${res.type})</span></li>`;
    });
    html += `</ul>`;
  }

  // Quote
  if (chapter.quote) {
    html += `
      <blockquote class="session-quote">
        "${chapter.quote.text}"
        <cite>— ${chapter.quote.source}</cite>
      </blockquote>
    `;
  }

  // Loop Complete indicator
  html += `<div class="loop-complete">Loop complete – iterate oder nächstes Kapitel</div>`;

  panel.innerHTML = html;
  return panel;
}

// Scroll to specific panel
function scrollToPanel(container, panelIndex) {
  const panels = container.querySelectorAll('.loop-panel');
  if (panels[panelIndex]) {
    const panelWidth = panels[0].offsetWidth;
    container.scrollTo({
      left: panelIndex * panelWidth,
      behavior: 'smooth'
    });
  }
}

// Scroll State Management
function saveScrollState(chapterId, panelIndex) {
  try {
    const state = JSON.parse(sessionStorage.getItem(SCROLL_STATE_KEY) || '{}');
    state[chapterId] = panelIndex;
    sessionStorage.setItem(SCROLL_STATE_KEY, JSON.stringify(state));
  } catch (e) {
    // sessionStorage not available
  }
}

function restoreScrollState(chapterId) {
  try {
    const state = JSON.parse(sessionStorage.getItem(SCROLL_STATE_KEY) || '{}');
    const panelIndex = state[chapterId];

    if (panelIndex && panelIndex > 0) {
      const section = document.getElementById(`chapter-${chapterId}`);
      const container = section.querySelector('.loop-container');
      if (container) {
        requestAnimationFrame(() => {
          const panelWidth = container.firstElementChild.offsetWidth;
          container.scrollLeft = panelIndex * panelWidth;
          container.dataset.panel = panelIndex;
          updateLoopProgress(section, panelIndex);
        });
      }
    }
  } catch (e) {
    // sessionStorage not available
  }
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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const competency = entry.target.dataset.competency;

        document.querySelectorAll('.competency-bar').forEach(bar => {
          bar.classList.remove('active');
          if (bar.classList.contains(`comp-${competency}`)) {
            bar.classList.add('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-50% 0px -50% 0px'
  });

  // Observe chapters as they're added
  const container = document.getElementById('sessions-container');
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.classList && node.classList.contains('chapter')) {
          observer.observe(node);
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

// Copy code function
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

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  // Find the currently visible chapter
  const chapters = document.querySelectorAll('.chapter');
  let activeChapter = null;

  chapters.forEach(chapter => {
    const rect = chapter.getBoundingClientRect();
    if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
      activeChapter = chapter;
    }
  });

  if (!activeChapter) return;

  const container = activeChapter.querySelector('.loop-container');
  const currentPanel = parseInt(container.dataset.panel) || 0;
  const panelCount = container.querySelectorAll('.loop-panel').length;

  if (e.key === 'ArrowRight' && currentPanel < panelCount - 1) {
    scrollToPanel(container, currentPanel + 1);
  } else if (e.key === 'ArrowLeft' && currentPanel > 0) {
    scrollToPanel(container, currentPanel - 1);
  }
});

// Initialize
document.addEventListener('DOMContentLoaded', loadContent);
