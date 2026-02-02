/**
 * AI Coding Literacy - Setup Page
 * Dynamically loads setup content from JSON
 * Benoetigt: shared.js
 */

let setupData = null;

// UI-Texte (nur Deutsch)
const i18n = {
  loadError: sharedI18n.loadError,
  breadcrumb: 'Uebersicht',
  required: 'erforderlich',
  recommended: 'empfohlen',
  tutorials: 'Tutorials',
  extensions: 'Empfohlene Erweiterungen',
  extensionsInstructions: 'So installieren Sie Erweiterungen:',
  checkInstallation: 'Installation pruefen',
  expectedOutput: 'Erwartete Ausgabe:',
  download: 'herunterladen',
  important: 'Wichtig',
  note: 'Hinweis',
  tip: 'Tipp',
  commonPackages: 'Haeufig verwendete Pakete',
  options: 'Optionen',
  commercial: 'Kommerzielle Anbieter',
  openSource: 'Open-Source-Alternativen',
  ideIntegration: 'IDE-Integration',
  provider: 'von',
  free: 'kostenlos',
  paid: 'kostenpflichtig',
  freeTier: 'Kostenlose Version',
  importantCommands: 'Wichtige Befehle',
  terminalCommands: 'Terminal-Befehle',
  personalRecommendation: 'Persoenliche Empfehlung:',
  personalNote: 'Aus meiner Erfahrung bietet die Bezahlversion von Claude (Claude Pro) die spannendste Lernerfahrung - besonders fuer laengere Code-Erklaerungen und iteratives Arbeiten. Wiewohl das natuerlich ein proprietaeres Modell ist, ist es fuer den Einstieg eine gute Wahl.',
  firstScript: 'Erstes Script ausfuehren',
  firstScriptSteps: [
    'Oeffnen Sie VS Code',
    'Erstellen Sie eine neue Datei',
    'Fuegen Sie diesen Code ein:',
    'Speichern Sie die Datei',
    'Fuehren Sie das Script aus'
  ],
  firstScriptSubsteps: {
    2: 'File -> New File oder Ctrl+N',
    4: 'File -> Save As -> Speichern als test.py',
    5: 'Klicken Sie auf den Play-Button oben rechts, oder: Terminal oeffnen (Ctrl+`) und eingeben: python test.py'
  },
  expectedOutputTitle: 'Erwartete Ausgabe:',
  successMessage: 'Wenn Sie diese Ausgabe sehen, ist alles richtig eingerichtet!',
  troubleshooting: 'Haeufige Probleme',
  nextSteps: 'Naechste Schritte',
  nextStepsText: 'Wenn alles eingerichtet ist, koennen Sie mit dem Curriculum beginnen:',
  toExercises: '-> Zu den Uebungen',
  orStartWith: 'Oder starten Sie direkt mit',
  copy: sharedI18n.copy,
  copied: sharedI18n.copied
};

// Competency color mapping
const competencyColors = {
  python: { id: 'CL', color: '#8B7355', name: 'Code Literacy' },
  vscode: { id: 'CL', color: '#8B7355', name: 'Code Literacy' },
  llm: { id: 'PE', color: '#7B6B8D', name: 'Prompt Engineering' },
  terminal: { id: 'RV', color: '#4A6B8C', name: 'Review' },
  pip: { id: 'CE', color: '#5B7355', name: 'Context Engineering' }
};

// Load JSON data
async function loadContent() {
  try {
    const data = await loadContentJson();
    setupData = data.setup;
    initPage();
  } catch (error) {
    console.error('Error loading content:', error);
    document.getElementById('content').innerHTML = `<p>${i18n.loadError}</p>`;
  }
}

// Initialize page
function initPage() {
  // Update page header
  document.querySelector('.chapter-title').textContent = setupData.title;
  document.querySelector('.chapter-subtitle').textContent = setupData.subtitle;
  document.querySelector('.chapter-intro-block p').textContent = setupData.description;

  // Render Quick Check
  renderQuickCheck();

  // Render Setup Items
  renderSetupItems();

  // Render First Script Section
  renderFirstScript();

  // Render Troubleshooting
  renderTroubleshooting();

  // Render Additional Resources
  renderAdditionalResources();

  // Render Next Steps
  renderNextSteps();
}

// Render Quick Check
function renderQuickCheck() {
  const container = document.querySelector('#schnellcheck .checklist');
  if (!container) return;

  container.innerHTML = '';

  setupData.quickCheck.items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'checklist-item';
    li.innerHTML = `
      <span class="check-box"></span>
      <span class="check-label">${item.label}</span>
      <span class="check-hint">${item.check}</span>
    `;
    container.appendChild(li);
  });
}

// Render Setup Items
function renderSetupItems() {
  setupData.items.forEach(item => {
    const section = document.getElementById(`setup-${item.id}`);
    if (!section) return;

    const setupItemDiv = section.querySelector('.setup-item');
    if (!setupItemDiv) return;

    // Render based on item type
    if (item.id === 'python') {
      renderPythonSetup(setupItemDiv, item);
    } else if (item.id === 'vscode') {
      renderVSCodeSetup(setupItemDiv, item);
    } else if (item.id === 'llm') {
      renderLLMSetup(setupItemDiv, item);
    } else if (item.id === 'terminal') {
      renderTerminalSetup(setupItemDiv, item);
    } else if (item.id === 'pip') {
      renderPipSetup(setupItemDiv, item);
    }
  });
}

// Render Python Setup
function renderPythonSetup(container, item) {
  container.innerHTML = `
    <div class="setup-item-content">
      <p>${item.shortDescription}. Python ist bekannt fuer ihre Lesbarkeit und wird haeufig in der Wissenschaft eingesetzt.</p>

      <div class="download-box">
        <a href="${item.downloadUrl}" target="_blank" rel="noopener" class="download-link">
          -> Python ${i18n.download} (python.org)
        </a>
        <p class="download-note">${item.notes}</p>
      </div>

      <div class="warning-box">
        <strong>Wichtig bei der Installation (Windows):</strong>
        <p>Aktivieren Sie unbedingt die Option <strong>"Add Python to PATH"</strong> am Anfang der Installation!</p>
      </div>

      <div class="tutorials-box">
        <h4>${i18n.tutorials}</h4>

        <div class="tutorial-item video">
          <span class="tutorial-icon"><i class="fa-solid fa-video"></i></span>
          <div class="tutorial-info">
            <a href="${item.tutorials.windows.videoUrl}" target="_blank" rel="noopener">
              ${item.tutorials.windows.videoTitle}
            </a>
            <p>Beliebtes YouTube-Tutorial mit klaren Erklaerungen</p>
          </div>
        </div>

        <div class="tutorial-item text ${item.tutorials.textTutorial ? 'recommended' : ''}">
          <span class="tutorial-icon"><i class="fa-solid fa-book"></i></span>
          <div class="tutorial-info">
            <a href="${item.tutorials.textTutorial.url}" target="_blank" rel="noopener">
              ${item.tutorials.textTutorial.title}
            </a>
            <p>${item.tutorials.textTutorial.description}</p>
            ${item.tutorials.textTutorial ? `<span class="badge recommended">${i18n.recommended}</span>` : ''}
          </div>
        </div>
      </div>

      <div class="verify-box">
        <h4>${i18n.checkInstallation}</h4>
        <p>Oeffnen Sie ein Terminal und geben Sie ein:</p>
        <div class="code-block">
          <div class="code-header">
            <span class="filename">Terminal</span>
          </div>
          <pre><code>${item.checkCommand}</code></pre>
        </div>
        <p>${i18n.expectedOutput} <code>Python 3.10.x</code> (oder neuer)</p>
      </div>
    </div>
  `;
}

// Render VS Code Setup
function renderVSCodeSetup(container, item) {
  const extSteps = [
    'Oeffnen Sie VS Code',
    'Klicken Sie auf das Extensions-Symbol in der linken Leiste (oder <code>Ctrl+Shift+X</code>)',
    'Suchen Sie nach "Python"',
    'Klicken Sie auf "Install"'
  ];

  container.innerHTML = `
    <div class="setup-item-content">
      <p>VS Code ist ein kostenloser, leichtgewichtiger Code-Editor von Microsoft. Er ist einfach zu bedienen und hat eine grosse Sammlung von Erweiterungen.</p>

      <div class="download-box">
        <a href="${item.downloadUrl}" target="_blank" rel="noopener" class="download-link">
          -> VS Code ${i18n.download} (code.visualstudio.com)
        </a>
        <p class="download-note">${item.notes}</p>
      </div>

      <div class="tutorials-box">
        <h4>${i18n.tutorials}</h4>

        <div class="tutorial-item video recommended">
          <span class="tutorial-icon"><i class="fa-solid fa-video"></i></span>
          <div class="tutorial-info">
            <a href="${item.tutorials.official.videoUrl}" target="_blank" rel="noopener">
              ${item.tutorials.official.title}
            </a>
            <p>${item.tutorials.official.description}</p>
            <span class="badge recommended">${i18n.recommended}</span>
          </div>
        </div>

        <div class="tutorial-item video">
          <span class="tutorial-icon"><i class="fa-solid fa-video"></i></span>
          <div class="tutorial-info">
            <a href="${item.tutorials.windows.videoUrl}" target="_blank" rel="noopener">
              ${item.tutorials.windows.videoTitle}
            </a>
            <p>Ausfuehrliches Setup-Tutorial fuer Windows</p>
          </div>
        </div>

        <div class="tutorial-item text">
          <span class="tutorial-icon"><i class="fa-solid fa-book"></i></span>
          <div class="tutorial-info">
            <a href="${item.tutorials.textTutorial.url}" target="_blank" rel="noopener">
              ${item.tutorials.textTutorial.title}
            </a>
            <p>${item.tutorials.textTutorial.description}</p>
          </div>
        </div>
      </div>

      <h4>${i18n.extensions}</h4>
      <p>Nach der Installation von VS Code, installieren Sie diese Erweiterungen:</p>

      <ul class="extension-list">
        ${item.extensions.map(ext => `
          <li class="extension-item">
            <strong>${ext.name}</strong> <code>${ext.id}</code>
            <p>${ext.description}</p>
          </li>
        `).join('')}
      </ul>

      <p><strong>${i18n.extensionsInstructions}</strong></p>
      <ol>
        ${extSteps.map(step => `<li>${step}</li>`).join('')}
      </ol>
    </div>
  `;
}

// Render LLM Setup
function renderLLMSetup(container, item) {
  const commercialOptions = item.options.filter(opt =>
    ['ChatGPT', 'Claude', 'Gemini'].includes(opt.name)
  );
  const openSourceOptions = [
    {
      name: 'Mistral Le Chat',
      provider: 'Mistral AI (Frankreich)',
      url: 'https://chat.mistral.ai',
      description: 'Europaeischer Anbieter mit Open-Source-Modellen. Kostenloser Chat-Zugang.'
    },
    {
      name: 'HuggingChat',
      provider: 'Hugging Face',
      url: 'https://huggingface.co/chat',
      description: 'Zugang zu verschiedenen Open-Source-Modellen (Llama, Mistral, etc.).'
    }
  ];
  const copilotOption = item.options.find(opt => opt.name === 'GitHub Copilot');

  container.innerHTML = `
    <div class="setup-item-content">
      <p>Fuer die Uebungen brauchen Sie Zugang zu einem LLM. Es gibt verschiedene Anbieter - waehlen Sie einen, der zu Ihren Beduerfnissen passt:</p>

      <h4>Kommerzielle Anbieter (mit kostenloser Stufe)</h4>
      <div class="llm-options">
        ${commercialOptions.map(opt => `
          <div class="llm-option">
            <div class="llm-header">
              <h4>${opt.name}</h4>
            </div>
            <p class="llm-provider">${i18n.provider} ${opt.provider}</p>
            <p>${opt.name === 'Claude' ? 'Kostenloser Zugang mit Nutzungslimits. Gut fuer laengere Gespraeche und Code-Erklaerungen.' :
                 opt.name === 'ChatGPT' ? 'GPT-3.5 kostenlos, GPT-4 kostenpflichtig. Weit verbreitet mit grosser Community.' :
                 'Kostenloser Zugang. Gut integriert mit Google-Diensten.'}</p>
            <a href="${opt.url}" target="_blank" rel="noopener" class="llm-link">-> ${opt.url.replace('https://', '')}</a>
          </div>
        `).join('')}
        ${commercialOptions.length === 2 ? `
          <div class="llm-option">
            <div class="llm-header">
              <h4>Gemini</h4>
            </div>
            <p class="llm-provider">${i18n.provider} Google</p>
            <p>Kostenloser Zugang. Gut integriert mit Google-Diensten.</p>
            <a href="https://gemini.google.com" target="_blank" rel="noopener" class="llm-link">-> gemini.google.com</a>
          </div>
        ` : ''}
      </div>

      <h4>Open-Source-Alternativen</h4>
      <div class="llm-options">
        ${openSourceOptions.map(opt => `
          <div class="llm-option">
            <div class="llm-header">
              <h4>${opt.name}</h4>
            </div>
            <p class="llm-provider">${i18n.provider} ${opt.provider}</p>
            <p>${opt.description}</p>
            <a href="${opt.url}" target="_blank" rel="noopener" class="llm-link">-> ${opt.url.replace('https://', '')}</a>
          </div>
        `).join('')}
      </div>

      ${copilotOption ? `
      <h4>${i18n.ideIntegration}</h4>
      <div class="llm-options">
        <div class="llm-option">
          <div class="llm-header">
            <h4>${copilotOption.name}</h4>
          </div>
          <p class="llm-provider">${i18n.provider} ${copilotOption.provider}</p>
          <p>Direkt in VS Code integriert. Kostenlos fuer Studierende und Open-Source-Beitragende.</p>
          <a href="${copilotOption.url}" target="_blank" rel="noopener" class="llm-link">-> ${copilotOption.url.replace('https://', '')}</a>
        </div>
      </div>
      ` : ''}

      <div class="info-box">
        <strong>${i18n.note}:</strong>
        <p>Alle genannten Optionen funktionieren fuer die Uebungen. Waehlen Sie einen Anbieter, bei dem Sie sich wohl fuehlen. Die Konzepte sind uebertragbar - Sie koennen jederzeit wechseln.</p>
      </div>

      <div class="info-box personal-note">
        <strong>${i18n.personalRecommendation}</strong>
        <p>${i18n.personalNote}</p>
      </div>
    </div>
  `;
}

// Render Terminal Setup
function renderTerminalSetup(container, item) {
  container.innerHTML = `
    <div class="setup-item-content">
      <p>Das Terminal (auch Kommandozeile genannt) ist der Ort, wo Sie Python-Scripts ausfuehren und Pakete installieren.</p>

      <div class="info-box">
        <strong>Gute Nachricht:</strong>
        <p>${item.notes}</p>
      </div>

      <h4>${i18n.importantCommands}</h4>
      <div class="code-block">
        <div class="code-header">
          <span class="filename">${i18n.terminalCommands}</span>
        </div>
        <pre><code># Python-Version pruefen
python --version

# Ein Python-Script ausfuehren
python mein_script.py

# Ein Paket installieren
pip install pandas

# Aktuelles Verzeichnis anzeigen
cd</code></pre>
      </div>
    </div>
  `;
}

// Render pip Setup
function renderPipSetup(container, item) {
  container.innerHTML = `
    <div class="setup-item-content">
      <p><strong>pip</strong> wird automatisch mit Python installiert. Es ist der Paketmanager, mit dem Sie zusaetzliche Bibliotheken installieren.</p>

      <div class="verify-box">
        <h4>${i18n.checkInstallation}</h4>
        <p>Oeffnen Sie ein Terminal und geben Sie ein:</p>
        <div class="code-block">
          <div class="code-header">
            <span class="filename">Terminal</span>
          </div>
          <pre><code>${item.checkCommand}</code></pre>
        </div>
      </div>

      <h4>${i18n.commonPackages}</h4>
      <p>Diese Pakete werden in den Uebungen verwendet:</p>

      <ul class="package-list">
        ${item.commonPackages.map(pkg => `
          <li class="package-item">
            <div class="package-header">
              <strong>${pkg.name}</strong>
              <code>${pkg.command}</code>
            </div>
            <p>${pkg.description}</p>
          </li>
        `).join('')}
      </ul>

      <div class="info-box">
        <strong>${i18n.tip}:</strong>
        <p>Sie muessen nicht alle Pakete vorab installieren. In den Uebungen wird angegeben, welche Pakete benoetigt werden.</p>
      </div>
    </div>
  `;
}

// Render First Script
function renderFirstScript() {
  const section = document.getElementById('erstes-script');
  if (!section) return;

  const container = section.querySelector('.setup-item-content');
  if (!container) return;

  const firstScriptCode = `# Mein erstes Python-Script
print("Hallo, AI Coding Literacy!")
print("Python funktioniert!")

# Eine einfache Berechnung
ergebnis = 2 + 2
print(f"2 + 2 = {ergebnis}")`;

  const expectedOutput = `Hallo, AI Coding Literacy!
Python funktioniert!
2 + 2 = 4`;

  container.innerHTML = `
    <p>Testen Sie Ihre Einrichtung mit einem einfachen Script:</p>

    <ol class="numbered-steps">
      <li>
        <strong>${i18n.firstScriptSteps[0]}</strong>
      </li>
      <li>
        <strong>${i18n.firstScriptSteps[1]}</strong>
        <p>${i18n.firstScriptSubsteps[2]}</p>
      </li>
      <li>
        <strong>${i18n.firstScriptSteps[2]}</strong>
        <div class="code-block">
          <div class="code-header">
            <span class="filename">test.py</span>
            <button class="copy-btn" onclick="copyCode(this)">${i18n.copy}</button>
          </div>
          <pre><code>${firstScriptCode}</code></pre>
        </div>
      </li>
      <li>
        <strong>${i18n.firstScriptSteps[3]}</strong>
        <p>${i18n.firstScriptSubsteps[4]}</p>
      </li>
      <li>
        <strong>${i18n.firstScriptSteps[4]}</strong>
        <p>${i18n.firstScriptSubsteps[5]}</p>
      </li>
    </ol>

    <div class="success-box">
      <strong>${i18n.expectedOutputTitle}</strong>
      <pre>${expectedOutput}</pre>
      <p>${i18n.successMessage}</p>
    </div>
  `;
}

// Render Troubleshooting
function renderTroubleshooting() {
  const section = document.getElementById('probleme');
  if (!section) return;

  const container = section.querySelector('.faq-list');
  if (!container) return;

  const faqs = [
    {
      question: '"python" wird nicht erkannt (Windows)',
      answer: 'Python wurde nicht zum PATH hinzugefuegt. Loesung: Python neu installieren und <strong>"Add Python to PATH"</strong> aktivieren.'
    },
    {
      question: '"python3" statt "python" (macOS/Linux)',
      answer: 'Auf manchen Systemen heisst der Befehl <code>python3</code> statt <code>python</code>. Probieren Sie: <code>python3 --version</code>'
    },
    {
      question: 'VS Code findet Python nicht',
      answer: 'Oeffnen Sie die Command Palette (<code>Ctrl+Shift+P</code>) und suchen Sie "Python: Select Interpreter". Waehlen Sie die installierte Python-Version aus.'
    },
    {
      question: 'pip-Befehl funktioniert nicht',
      answer: 'Versuchen Sie <code>python -m pip --version</code> statt <code>pip --version</code>.'
    }
  ];

  container.innerHTML = faqs.map(faq => `
    <div class="faq-item">
      <h4>${faq.question}</h4>
      <p>${faq.answer}</p>
    </div>
  `).join('');
}

// Render Additional Resources
function renderAdditionalResources() {
  const section = document.getElementById('ressourcen');
  if (!section) return;
  // Section is already in HTML
}

// Render Next Steps
function renderNextSteps() {
  const section = document.getElementById('naechste-schritte');
  if (!section) return;

  const container = section.querySelector('.next-steps-box');
  if (!container) return;

  container.innerHTML = `
    <p>${i18n.nextStepsText}</p>
    <a href="/de/#sessions-section" class="cta-button">${i18n.toExercises}</a>
    <p class="next-hint">${i18n.orStartWith} <a href="/de/ct.html">Computational Thinking</a>.</p>
  `;
}

// Initialize on load
document.addEventListener('DOMContentLoaded', loadContent);
