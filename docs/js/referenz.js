/**
 * AI Coding Literacy - Referenz Page
 * Benoetigt: shared.js
 */

async function loadContent() {
  try {
    const data = await loadContentJson();
    renderCompetencySidebar(data);
    renderReference(data);
  } catch (error) {
    console.error('Fehler beim Laden:', error);
  }
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
        ${createCompetencyBadge(chapter)}
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

  // Uebungen
  const exercisesTable = document.getElementById('exercises-table');
  chapters.forEach(chapter => {
    if (!chapter.handsOn) return;

    chapter.handsOn.forEach(exercise => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><code>${exercise.id}</code></td>
        <td><a href="./#exercise-${exercise.id}">${exercise.title}</a></td>
        <td>${createCompetencyBadge(chapter, 'sm')}</td>
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
    book: 'Buecher',
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
          ${createCompetencyBadge(res.chapter, 'sm')}
        </span>
      `;
      ul.appendChild(li);
    });

    section.appendChild(ul);
    resourcesContainer.appendChild(section);
  });
}

document.addEventListener('DOMContentLoaded', loadContent);
