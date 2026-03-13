/**
 * AI Coding Literacy - Referenz Page
 * Benoetigt: shared.js
 */

async function loadContent() {
  try {
    const data = await loadContentJson();
    renderReference(data);
  } catch (error) {
    console.error('Fehler beim Laden:', error);
  }
}

function renderReference(data) {
  const chapters = data.chapters;

  // Konzepte
  const conceptsContainer = document.getElementById('concepts-container');
  if (conceptsContainer) {
    chapters.forEach(chapter => {
      if (!chapter.theory || !chapter.theory.concepts) return;

      const section = document.createElement('div');
      section.className = 'concept-content';
      section.style.marginBottom = '2rem';
      section.innerHTML = `
        <h3 class="section-heading" style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="background: var(--ws-terracotta); color: white; padding: 0.2rem 0.5rem; font-size: 0.8rem;">${chapter.id}</span>
          ${chapter.name}
        </h3>
      `;

      const grid = document.createElement('div');
      grid.className = 'context-grid';
      grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
      grid.style.marginTop = '1rem';

      chapter.theory.concepts.forEach(concept => {
        const card = document.createElement('div');
        card.className = 'context-card';
        card.innerHTML = `
          <h3>${concept.term}</h3>
          <p class="context-sub">${concept.definition}</p>
        `;
        grid.appendChild(card);
      });

      section.appendChild(grid);
      conceptsContainer.appendChild(section);
    });
  }

  // Uebungen
  const exercisesTable = document.getElementById('exercises-table');
  if (exercisesTable) {
    chapters.forEach(chapter => {
      if (!chapter.handsOn) return;

      chapter.handsOn.forEach(exercise => {
        const row = document.createElement('tr');
        row.style.borderBottom = '1px solid var(--ws-border)';
        row.innerHTML = `
          <td style="padding: 0.75rem;"><code>${exercise.id}</code></td>
          <td style="padding: 0.75rem;"><a href="${chapter.id.toLowerCase()}.html#exercise-${exercise.id}">${exercise.title}</a></td>
          <td style="padding: 0.75rem;">${chapter.id}</td>
          <td style="padding: 0.75rem; color: var(--ws-ink-faded);">${exercise.summary}</td>
        `;
        exercisesTable.appendChild(row);
      });
    });
  }

  // Ressourcen
  const resourcesContainer = document.getElementById('resources-container');
  if (resourcesContainer) {
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

    const grid = document.createElement('div');
    grid.className = 'resources-grid';
    grid.style.gridTemplateColumns = 'repeat(2, 1fr)';

    Object.entries(resourcesByType).forEach(([type, resources]) => {
      const section = document.createElement('div');
      section.className = 'resource-category';
      section.innerHTML = `<h3>${typeLabels[type] || type}</h3>`;

      const ul = document.createElement('ul');
      ul.className = 'resource-list';
      resources.forEach(res => {
        const li = document.createElement('li');
        li.innerHTML = `
          <a href="${res.url}" target="_blank" rel="noopener">${res.title}</a>
          <span style="color: var(--ws-ink-faded); font-size: 0.85rem;"> (${res.chapter.id})</span>
        `;
        ul.appendChild(li);
      });

      section.appendChild(ul);
      grid.appendChild(section);
    });

    resourcesContainer.appendChild(grid);
  }
}

document.addEventListener('DOMContentLoaded', loadContent);
