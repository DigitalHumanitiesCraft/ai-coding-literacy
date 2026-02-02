/**
 * AI Coding Literacy - Referenz Page
 */

async function loadContent() {
  try {
    const response = await fetch('/data/content.json');
    const data = await response.json();
    renderSidebar(data);
    renderReference(data);
  } catch (error) {
    console.error('Fehler beim Laden:', error);
  }
}

function renderSidebar(data) {
  const sidebarBars = document.getElementById('sidebar-bars');
  data.chapters.forEach(chapter => {
    const link = document.createElement('a');
    link.href = `/de/#chapter-${chapter.id}`;
    link.className = `competency-bar comp-${chapter.id}`;
    link.title = chapter.name;
    link.innerHTML = `<span class="bar-label">${chapter.id}</span>`;
    sidebarBars.appendChild(link);
  });
}

function renderReference(data) {
  const chapters = data.chapters;

  // Konzepte
  const conceptsContainer = document.getElementById('concepts-container');
  chapters.forEach(chapter => {
    if (!chapter.theory || !chapter.theory.concepts) return;

    const section = document.createElement('div');
    section.className = 'concept-section';
    section.innerHTML = `
      <h3>
        <span class="comp-badge" style="background: ${chapter.color}">${chapter.id}</span>
        ${chapter.name}
      </h3>
    `;

    const dl = document.createElement('dl');
    dl.className = 'concept-list';
    chapter.theory.concepts.forEach(concept => {
      dl.innerHTML += `
        <dt>${concept.term}</dt>
        <dd>${concept.definition}</dd>
      `;
    });

    section.appendChild(dl);
    conceptsContainer.appendChild(section);
  });

  // Übungen
  const exercisesTable = document.getElementById('exercises-table');
  chapters.forEach(chapter => {
    if (!chapter.handsOn) return;

    chapter.handsOn.forEach(exercise => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><code>${exercise.id}</code></td>
        <td><a href="/de/#exercise-${exercise.id}">${exercise.title}</a></td>
        <td><span class="comp-badge comp-badge-sm" style="background: ${chapter.color}">${chapter.id}</span></td>
        <td>${exercise.summary}</td>
      `;
      exercisesTable.appendChild(row);
    });
  });

  // Ressourcen
  const resourcesContainer = document.getElementById('resources-container');
  const resourcesByType = {};

  chapters.forEach(chapter => {
    if (!chapter.resources) return;

    chapter.resources.forEach(res => {
      if (!resourcesByType[res.type]) {
        resourcesByType[res.type] = [];
      }
      resourcesByType[res.type].push({
        ...res,
        chapter: chapter
      });
    });
  });

  const typeLabels = {
    paper: 'Wissenschaftliche Artikel',
    book: 'Bücher',
    documentation: 'Dokumentation',
    tutorial: 'Tutorials',
    standard: 'Standards'
  };

  Object.entries(resourcesByType).forEach(([type, resources]) => {
    const section = document.createElement('div');
    section.className = 'resource-section';
    section.innerHTML = `<h3>${typeLabels[type] || type}</h3>`;

    const ul = document.createElement('ul');
    resources.forEach(res => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${res.url}" target="_blank" rel="noopener">${res.title}</a>
        <span class="resource-chapter">
          <span class="comp-badge comp-badge-sm" style="background: ${res.chapter.color}">${res.chapter.id}</span>
        </span>
      `;
      ul.appendChild(li);
    });

    section.appendChild(ul);
    resourcesContainer.appendChild(section);
  });

  // Zitate
  const quotesContainer = document.getElementById('quotes-container');
  chapters.forEach(chapter => {
    if (!chapter.quote) return;

    const quote = document.createElement('blockquote');
    quote.className = 'reference-quote';
    quote.innerHTML = `
      <p>"${chapter.quote.text}"</p>
      <footer>
        <cite>— ${chapter.quote.source}</cite>
        <span class="comp-badge comp-badge-sm" style="background: ${chapter.color}">${chapter.id}</span>
      </footer>
    `;
    quotesContainer.appendChild(quote);
  });
}

document.addEventListener('DOMContentLoaded', loadContent);
