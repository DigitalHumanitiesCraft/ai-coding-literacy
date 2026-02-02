/**
 * AI Coding Literacy - Kompetenzmodell Page
 * Benoetigt: shared.js
 */

async function loadContent() {
  try {
    const data = await loadContentJson();
    renderCompetencySidebar(data);
    renderCompetencyModel(data);
  } catch (error) {
    console.error('Fehler beim Laden:', error);
  }
}

function renderCompetencyModel(data) {
  const chapters = data.chapters;

  // Uebersichtstabelle
  const tableBody = document.getElementById('competency-table');
  chapters.forEach(chapter => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${createCompetencyBadge(chapter)}</td>
      <td><strong>${chapter.name}</strong></td>
      <td>${chapter.short}</td>
    `;
    tableBody.appendChild(row);
  });

  // Zyklus-Liste
  const cycleList = document.getElementById('cycle-list');
  const cycleSteps = [
    { id: 'CT', action: 'Problem verstehen' },
    { id: 'RE', action: 'Anforderungen definieren' },
    { id: 'CE', action: 'Kontext aufbereiten' },
    { id: 'PE', action: 'Prompt formulieren' },
    { id: 'CL', action: 'Code verstehen' },
    { id: 'RV', action: 'Ergebnis pruefen' }
  ];

  cycleSteps.forEach((step, index) => {
    const chapter = chapters.find(c => c.id === step.id);
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${step.action}</strong>
      <span class="comp-ref" style="border-color: ${chapter.color}">${chapter.name}</span>
      ${index === 5 ? ' -> zurueck zu 1.' : ''}
    `;
    cycleList.appendChild(li);
  });

  // Detailbereiche
  const detailsContainer = document.getElementById('competency-details');
  chapters.forEach(chapter => {
    const section = document.createElement('article');
    section.className = 'competency-detail';
    section.id = `comp-${chapter.id}`;

    let html = `
      <h3>
        ${createCompetencyBadge(chapter)}
        ${chapter.name}
      </h3>
      <p class="comp-short">${chapter.short}</p>
      <p>${chapter.theory.description}</p>
    `;

    // Kernelemente als Tabelle (nur fuer CT)
    if (chapter.id === 'CT' && chapter.theory.concepts) {
      html += `
        <table class="concept-table">
          <thead>
            <tr>
              <th>Element</th>
              <th>Bedeutung</th>
            </tr>
          </thead>
          <tbody>
      `;
      chapter.theory.concepts.forEach(concept => {
        html += `
          <tr>
            <td><strong>${concept.term}</strong></td>
            <td>${concept.definition}</td>
          </tr>
        `;
      });
      html += `</tbody></table>`;
    }

    // Kernpunkte
    if (chapter.theory.keyPoints && chapter.theory.keyPoints.length > 0) {
      html += `<h4>Kernpunkte</h4><ul>`;
      chapter.theory.keyPoints.forEach(point => {
        html += `<li>${point}</li>`;
      });
      html += `</ul>`;
    }

    // Zitat
    if (chapter.quote) {
      html += `
        <blockquote>
          <p>"${chapter.quote.text}"</p>
          <cite>— ${chapter.quote.source}</cite>
        </blockquote>
      `;
    }

    section.innerHTML = html;
    detailsContainer.appendChild(section);

    // Trennlinie zwischen Bereichen (ausser nach dem letzten)
    if (chapter !== chapters[chapters.length - 1]) {
      detailsContainer.appendChild(document.createElement('hr'));
    }
  });
}

document.addEventListener('DOMContentLoaded', loadContent);
