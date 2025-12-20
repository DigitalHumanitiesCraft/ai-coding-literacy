/**
 * AI Coding Literacy - Setup Page
 * Dynamically loads setup content from JSON
 */

let setupData = null;

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
      breadcrumb: 'Übersicht',
      required: 'erforderlich',
      recommended: 'empfohlen',
      tutorials: 'Tutorials',
      extensions: 'Empfohlene Erweiterungen',
      extensionsInstructions: 'So installieren Sie Erweiterungen:',
      checkInstallation: 'Installation prüfen',
      expectedOutput: 'Erwartete Ausgabe:',
      download: 'herunterladen',
      important: 'Wichtig',
      note: 'Hinweis',
      tip: 'Tipp',
      commonPackages: 'Häufig verwendete Pakete',
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
      personalRecommendation: 'Persönliche Empfehlung:',
      personalNote: 'Aus meiner Erfahrung bietet die Bezahlversion von Claude (Claude Pro) die spannendste Lernerfahrung – besonders für längere Code-Erklärungen und iteratives Arbeiten. Wiewohl das natürlich ein proprietäres Modell ist, ist es für den Einstieg eine gute Wahl.',
      firstScript: 'Erstes Script ausführen',
      firstScriptSteps: [
        'Öffnen Sie VS Code',
        'Erstellen Sie eine neue Datei',
        'Fügen Sie diesen Code ein:',
        'Speichern Sie die Datei',
        'Führen Sie das Script aus'
      ],
      firstScriptSubsteps: {
        2: 'File → New File oder Ctrl+N',
        4: 'File → Save As → Speichern als test.py',
        5: 'Klicken Sie auf den Play-Button oben rechts, oder: Terminal öffnen (Ctrl+`) und eingeben: python test.py'
      },
      expectedOutputTitle: 'Erwartete Ausgabe:',
      successMessage: 'Wenn Sie diese Ausgabe sehen, ist alles richtig eingerichtet!',
      troubleshooting: 'Häufige Probleme',
      nextSteps: 'Nächste Schritte',
      nextStepsText: 'Wenn alles eingerichtet ist, können Sie mit dem Curriculum beginnen:',
      toExercises: '→ Zu den Übungen',
      orStartWith: 'Oder starten Sie direkt mit',
      copy: 'kopieren',
      copied: 'kopiert!'
    },
    en: {
      loadError: 'Error loading content.',
      breadcrumb: 'Overview',
      required: 'required',
      recommended: 'recommended',
      tutorials: 'Tutorials',
      extensions: 'Recommended Extensions',
      extensionsInstructions: 'How to install extensions:',
      checkInstallation: 'Check installation',
      expectedOutput: 'Expected output:',
      download: 'download',
      important: 'Important',
      note: 'Note',
      tip: 'Tip',
      commonPackages: 'Common Packages',
      options: 'Options',
      commercial: 'Commercial Providers',
      openSource: 'Open Source Alternatives',
      ideIntegration: 'IDE Integration',
      provider: 'by',
      free: 'free',
      paid: 'paid',
      freeTier: 'Free Tier',
      importantCommands: 'Important Commands',
      terminalCommands: 'Terminal Commands',
      personalRecommendation: 'Personal Recommendation:',
      personalNote: 'In my experience, the paid version of Claude (Claude Pro) offers the most exciting learning experience – especially for longer code explanations and iterative work. Although this is a proprietary model, it is a good choice for getting started.',
      firstScript: 'Run Your First Script',
      firstScriptSteps: [
        'Open VS Code',
        'Create a new file',
        'Add this code:',
        'Save the file',
        'Run the script'
      ],
      firstScriptSubsteps: {
        2: 'File → New File or Ctrl+N',
        4: 'File → Save As → Save as test.py',
        5: 'Click the Play button in the top right, or: Open terminal (Ctrl+`) and type: python test.py'
      },
      expectedOutputTitle: 'Expected output:',
      successMessage: 'If you see this output, everything is set up correctly!',
      troubleshooting: 'Common Issues',
      nextSteps: 'Next Steps',
      nextStepsText: 'Once everything is set up, you can start with the curriculum:',
      toExercises: '→ To the exercises',
      orStartWith: 'Or start directly with',
      copy: 'copy',
      copied: 'copied!'
    }
  };
  return strings[lang] || strings.de;
}

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
    const lang = detectLanguage();
    const contentFile = lang === 'en' ? '/data/content-en.json' : '/data/content.json';
    const response = await fetch(contentFile);
    const data = await response.json();
    setupData = data.setup;
    initPage(lang);
  } catch (error) {
    console.error('Error loading content:', error);
    const lang = detectLanguage();
    const i18n = getI18n(lang);
    document.getElementById('content').innerHTML = `<p>${i18n.loadError}</p>`;
  }
}

// Initialize page
function initPage(lang) {
  const i18n = getI18n(lang);

  // Update page header
  document.querySelector('.chapter-title').textContent = setupData.title;
  document.querySelector('.chapter-subtitle').textContent = setupData.subtitle;
  document.querySelector('.chapter-intro-block p').textContent = setupData.description;

  // Render Quick Check
  renderQuickCheck(lang, i18n);

  // Render Setup Items
  renderSetupItems(lang, i18n);

  // Render First Script Section
  renderFirstScript(lang, i18n);

  // Render Troubleshooting
  renderTroubleshooting(lang, i18n);

  // Render Additional Resources
  renderAdditionalResources(lang, i18n);

  // Render Next Steps
  renderNextSteps(lang, i18n);
}

// Render Quick Check
function renderQuickCheck(lang, i18n) {
  const container = document.querySelector('#schnellcheck .checklist');
  if (!container) return;

  container.innerHTML = '';

  setupData.quickCheck.items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'checklist-item';
    li.innerHTML = `
      <span class="check-box">☐</span>
      <span class="check-label">${item.label}</span>
      <span class="check-hint">${item.check}</span>
    `;
    container.appendChild(li);
  });
}

// Render Setup Items
function renderSetupItems(lang, i18n) {
  const sections = document.querySelectorAll('.content-section[id^="setup-"]');

  setupData.items.forEach((item, index) => {
    const section = document.getElementById(`setup-${item.id}`);
    if (!section) return;

    const setupItemDiv = section.querySelector('.setup-item');
    if (!setupItemDiv) return;

    // Render based on item type
    if (item.id === 'python') {
      renderPythonSetup(setupItemDiv, item, lang, i18n);
    } else if (item.id === 'vscode') {
      renderVSCodeSetup(setupItemDiv, item, lang, i18n);
    } else if (item.id === 'llm') {
      renderLLMSetup(setupItemDiv, item, lang, i18n);
    } else if (item.id === 'terminal') {
      renderTerminalSetup(setupItemDiv, item, lang, i18n);
    } else if (item.id === 'pip') {
      renderPipSetup(setupItemDiv, item, lang, i18n);
    }
  });
}

// Render Python Setup
function renderPythonSetup(container, item, lang, i18n) {
  const comp = competencyColors[item.id];

  container.innerHTML = `
    <div class="setup-item-content">
      <p>${item.shortDescription}. Python ist bekannt für ihre Lesbarkeit und wird häufig in der Wissenschaft eingesetzt.</p>

      <div class="download-box">
        <a href="${item.downloadUrl}" target="_blank" rel="noopener" class="download-link">
          → Python ${i18n.download} (python.org)
        </a>
        <p class="download-note">${item.notes}</p>
      </div>

      ${lang === 'de' ? `
      <div class="warning-box">
        <strong>Wichtig bei der Installation (Windows):</strong>
        <p>Aktivieren Sie unbedingt die Option <strong>"Add Python to PATH"</strong> am Anfang der Installation!</p>
      </div>
      ` : `
      <div class="warning-box">
        <strong>Important for Installation (Windows):</strong>
        <p>Make sure to activate the option <strong>"Add Python to PATH"</strong> at the beginning of the installation!</p>
      </div>
      `}

      <div class="tutorials-box">
        <h4>${i18n.tutorials}</h4>

        <div class="tutorial-item video">
          <span class="tutorial-icon"><i class="fa-solid fa-video"></i></span>
          <div class="tutorial-info">
            <a href="${item.tutorials.windows.videoUrl}" target="_blank" rel="noopener">
              ${item.tutorials.windows.videoTitle}
            </a>
            <p>${lang === 'de' ? 'Beliebtes YouTube-Tutorial mit klaren Erklärungen' : 'Popular YouTube tutorial with clear explanations'}</p>
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
        <p>${lang === 'de' ? 'Öffnen Sie ein Terminal und geben Sie ein:' : 'Open a terminal and enter:'}</p>
        <div class="code-block">
          <div class="code-header">
            <span class="filename">Terminal</span>
          </div>
          <pre><code>${item.checkCommand}</code></pre>
        </div>
        <p>${i18n.expectedOutput} <code>Python 3.10.x</code> ${lang === 'de' ? '(oder neuer)' : '(or newer)'}</p>
      </div>
    </div>
  `;
}

// Render VS Code Setup
function renderVSCodeSetup(container, item, lang, i18n) {
  const extSteps = lang === 'de' ? [
    'Öffnen Sie VS Code',
    'Klicken Sie auf das Extensions-Symbol in der linken Leiste (oder <code>Ctrl+Shift+X</code>)',
    'Suchen Sie nach "Python"',
    'Klicken Sie auf "Install"'
  ] : [
    'Open VS Code',
    'Click on the Extensions icon in the left sidebar (or <code>Ctrl+Shift+X</code>)',
    'Search for "Python"',
    'Click "Install"'
  ];

  container.innerHTML = `
    <div class="setup-item-content">
      <p>${lang === 'de' ? 'VS Code ist ein kostenloser, leichtgewichtiger Code-Editor von Microsoft. Er ist einfach zu bedienen und hat eine große Sammlung von Erweiterungen.' : 'VS Code is a free, lightweight code editor from Microsoft. It is easy to use and has a large collection of extensions.'}</p>

      <div class="download-box">
        <a href="${item.downloadUrl}" target="_blank" rel="noopener" class="download-link">
          → VS Code ${i18n.download} (code.visualstudio.com)
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
            <p>${lang === 'de' ? 'Ausführliches Setup-Tutorial für Windows' : 'Detailed setup tutorial for Windows'}</p>
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
      <p>${lang === 'de' ? 'Nach der Installation von VS Code, installieren Sie diese Erweiterungen:' : 'After installing VS Code, install these extensions:'}</p>

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
function renderLLMSetup(container, item, lang, i18n) {
  const commercialOptions = item.options.filter(opt =>
    ['ChatGPT', 'Claude', 'Gemini'].includes(opt.name)
  );
  const openSourceOptions = [
    {
      name: 'Mistral Le Chat',
      provider: 'Mistral AI (Frankreich)',
      url: 'https://chat.mistral.ai',
      description: lang === 'de'
        ? 'Europäischer Anbieter mit Open-Source-Modellen. Kostenloser Chat-Zugang.'
        : 'European provider with open-source models. Free chat access.'
    },
    {
      name: 'HuggingChat',
      provider: 'Hugging Face',
      url: 'https://huggingface.co/chat',
      description: lang === 'de'
        ? 'Zugang zu verschiedenen Open-Source-Modellen (Llama, Mistral, etc.).'
        : 'Access to various open-source models (Llama, Mistral, etc.).'
    }
  ];
  const copilotOption = item.options.find(opt => opt.name === 'GitHub Copilot');

  container.innerHTML = `
    <div class="setup-item-content">
      <p>${lang === 'de'
        ? 'Für die Übungen brauchen Sie Zugang zu einem LLM. Es gibt verschiedene Anbieter – wählen Sie einen, der zu Ihren Bedürfnissen passt:'
        : 'For the exercises, you need access to an LLM. There are various providers – choose one that fits your needs:'}</p>

      <h4>${lang === 'de' ? 'Kommerzielle Anbieter (mit kostenloser Stufe)' : 'Commercial Providers (with free tier)'}</h4>
      <div class="llm-options">
        ${commercialOptions.map(opt => `
          <div class="llm-option">
            <div class="llm-header">
              <h4>${opt.name}</h4>
            </div>
            <p class="llm-provider">${i18n.provider} ${opt.provider}</p>
            <p>${lang === 'de'
              ? (opt.name === 'Claude' ? 'Kostenloser Zugang mit Nutzungslimits. Gut für längere Gespräche und Code-Erklärungen.' :
                 opt.name === 'ChatGPT' ? 'GPT-3.5 kostenlos, GPT-4 kostenpflichtig. Weit verbreitet mit großer Community.' :
                 'Kostenloser Zugang. Gut integriert mit Google-Diensten.')
              : (opt.name === 'Claude' ? 'Free access with usage limits. Good for longer conversations and code explanations.' :
                 opt.name === 'ChatGPT' ? 'GPT-3.5 free, GPT-4 paid. Widely used with large community.' :
                 'Free access. Well integrated with Google services.')}</p>
            <a href="${opt.url}" target="_blank" rel="noopener" class="llm-link">→ ${opt.url.replace('https://', '')}</a>
          </div>
        `).join('')}
        ${commercialOptions.length === 2 ? `
          <div class="llm-option">
            <div class="llm-header">
              <h4>Gemini</h4>
            </div>
            <p class="llm-provider">${i18n.provider} Google</p>
            <p>${lang === 'de' ? 'Kostenloser Zugang. Gut integriert mit Google-Diensten.' : 'Free access. Well integrated with Google services.'}</p>
            <a href="https://gemini.google.com" target="_blank" rel="noopener" class="llm-link">→ gemini.google.com</a>
          </div>
        ` : ''}
      </div>

      <h4>${lang === 'de' ? 'Open-Source-Alternativen' : 'Open Source Alternatives'}</h4>
      <div class="llm-options">
        ${openSourceOptions.map(opt => `
          <div class="llm-option">
            <div class="llm-header">
              <h4>${opt.name}</h4>
            </div>
            <p class="llm-provider">${i18n.provider} ${opt.provider}</p>
            <p>${opt.description}</p>
            <a href="${opt.url}" target="_blank" rel="noopener" class="llm-link">→ ${opt.url.replace('https://', '')}</a>
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
          <p>${lang === 'de'
            ? 'Direkt in VS Code integriert. Kostenlos für Studierende und Open-Source-Beitragende.'
            : 'Directly integrated into VS Code. Free for students and open-source contributors.'}</p>
          <a href="${copilotOption.url}" target="_blank" rel="noopener" class="llm-link">→ ${copilotOption.url.replace('https://', '')}</a>
        </div>
      </div>
      ` : ''}

      <div class="info-box">
        <strong>${i18n.note}:</strong>
        <p>${lang === 'de'
          ? 'Alle genannten Optionen funktionieren für die Übungen. Wählen Sie einen Anbieter, bei dem Sie sich wohl fühlen. Die Konzepte sind übertragbar – Sie können jederzeit wechseln.'
          : 'All mentioned options work for the exercises. Choose a provider you feel comfortable with. The concepts are transferable – you can switch at any time.'}</p>
      </div>

      <div class="info-box personal-note">
        <strong>${i18n.personalRecommendation}</strong>
        <p>${i18n.personalNote}</p>
      </div>
    </div>
  `;
}

// Render Terminal Setup
function renderTerminalSetup(container, item, lang, i18n) {
  container.innerHTML = `
    <div class="setup-item-content">
      <p>${lang === 'de'
        ? 'Das Terminal (auch Kommandozeile genannt) ist der Ort, wo Sie Python-Scripts ausführen und Pakete installieren.'
        : 'The terminal (also called command line) is where you run Python scripts and install packages.'}</p>

      <div class="info-box">
        <strong>${lang === 'de' ? 'Gute Nachricht:' : 'Good news:'}</strong>
        <p>${item.notes}</p>
      </div>

      <h4>${i18n.importantCommands}</h4>
      <div class="code-block">
        <div class="code-header">
          <span class="filename">${i18n.terminalCommands}</span>
        </div>
        <pre><code>${lang === 'de' ? `# Python-Version prüfen
python --version

# Ein Python-Script ausführen
python mein_script.py

# Ein Paket installieren
pip install pandas

# Aktuelles Verzeichnis anzeigen
cd` : `# Check Python version
python --version

# Run a Python script
python my_script.py

# Install a package
pip install pandas

# Show current directory
cd`}</code></pre>
      </div>
    </div>
  `;
}

// Render pip Setup
function renderPipSetup(container, item, lang, i18n) {
  container.innerHTML = `
    <div class="setup-item-content">
      <p>${lang === 'de'
        ? '<strong>pip</strong> wird automatisch mit Python installiert. Es ist der Paketmanager, mit dem Sie zusätzliche Bibliotheken installieren.'
        : '<strong>pip</strong> is automatically installed with Python. It is the package manager you use to install additional libraries.'}</p>

      <div class="verify-box">
        <h4>${i18n.checkInstallation}</h4>
        <p>${lang === 'de' ? 'Öffnen Sie ein Terminal und geben Sie ein:' : 'Open a terminal and enter:'}</p>
        <div class="code-block">
          <div class="code-header">
            <span class="filename">Terminal</span>
          </div>
          <pre><code>${item.checkCommand}</code></pre>
        </div>
      </div>

      <h4>${i18n.commonPackages}</h4>
      <p>${lang === 'de' ? 'Diese Pakete werden in den Übungen verwendet:' : 'These packages are used in the exercises:'}</p>

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
        <p>${lang === 'de'
          ? 'Sie müssen nicht alle Pakete vorab installieren. In den Übungen wird angegeben, welche Pakete benötigt werden.'
          : 'You don\'t need to install all packages in advance. The exercises will specify which packages are needed.'}</p>
      </div>
    </div>
  `;
}

// Render First Script
function renderFirstScript(lang, i18n) {
  const section = document.getElementById('erstes-script');
  if (!section) return;

  const container = section.querySelector('.setup-item-content');
  if (!container) return;

  const firstScriptCode = lang === 'de' ? `# Mein erstes Python-Script
print("Hallo, AI Coding Literacy!")
print("Python funktioniert!")

# Eine einfache Berechnung
ergebnis = 2 + 2
print(f"2 + 2 = {ergebnis}")` : `# My first Python script
print("Hello, AI Coding Literacy!")
print("Python works!")

# A simple calculation
result = 2 + 2
print(f"2 + 2 = {result}")`;

  const expectedOutput = lang === 'de' ? `Hallo, AI Coding Literacy!
Python funktioniert!
2 + 2 = 4` : `Hello, AI Coding Literacy!
Python works!
2 + 2 = 4`;

  container.innerHTML = `
    <p>${lang === 'de' ? 'Testen Sie Ihre Einrichtung mit einem einfachen Script:' : 'Test your setup with a simple script:'}</p>

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
function renderTroubleshooting(lang, i18n) {
  const section = document.getElementById('probleme');
  if (!section) return;

  const container = section.querySelector('.faq-list');
  if (!container) return;

  const faqs = lang === 'de' ? [
    {
      question: '"python" wird nicht erkannt (Windows)',
      answer: 'Python wurde nicht zum PATH hinzugefügt. Lösung: Python neu installieren und <strong>"Add Python to PATH"</strong> aktivieren.'
    },
    {
      question: '"python3" statt "python" (macOS/Linux)',
      answer: 'Auf manchen Systemen heißt der Befehl <code>python3</code> statt <code>python</code>. Probieren Sie: <code>python3 --version</code>'
    },
    {
      question: 'VS Code findet Python nicht',
      answer: 'Öffnen Sie die Command Palette (<code>Ctrl+Shift+P</code>) und suchen Sie "Python: Select Interpreter". Wählen Sie die installierte Python-Version aus.'
    },
    {
      question: 'pip-Befehl funktioniert nicht',
      answer: 'Versuchen Sie <code>python -m pip --version</code> statt <code>pip --version</code>.'
    }
  ] : [
    {
      question: '"python" not recognized (Windows)',
      answer: 'Python was not added to PATH. Solution: Reinstall Python and activate <strong>"Add Python to PATH"</strong>.'
    },
    {
      question: '"python3" instead of "python" (macOS/Linux)',
      answer: 'On some systems, the command is <code>python3</code> instead of <code>python</code>. Try: <code>python3 --version</code>'
    },
    {
      question: 'VS Code cannot find Python',
      answer: 'Open the Command Palette (<code>Ctrl+Shift+P</code>) and search for "Python: Select Interpreter". Select the installed Python version.'
    },
    {
      question: 'pip command does not work',
      answer: 'Try <code>python -m pip --version</code> instead of <code>pip --version</code>.'
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
function renderAdditionalResources(lang, i18n) {
  const section = document.getElementById('ressourcen');
  if (!section) return;

  // This section is already in HTML but could be enhanced with JSON data
  // For now, we'll leave it as is since it's working well
}

// Render Next Steps
function renderNextSteps(lang, i18n) {
  const section = document.getElementById('naechste-schritte');
  if (!section) return;

  const container = section.querySelector('.next-steps-box');
  if (!container) return;

  const langPath = lang === 'en' ? '/en/' : '/de/';

  container.innerHTML = `
    <p>${i18n.nextStepsText}</p>
    <a href="${langPath}#sessions-section" class="cta-button">${i18n.toExercises}</a>
    <p class="next-hint">${i18n.orStartWith} <a href="${langPath}ct.html">Computational Thinking</a>.</p>
  `;
}

// Copy code function
function copyCode(button) {
  const lang = detectLanguage();
  const i18n = getI18n(lang);
  const codeBlock = button.closest('.code-block');
  const code = codeBlock.querySelector('code').textContent;
  navigator.clipboard.writeText(code).then(() => {
    const originalText = button.textContent;
    button.textContent = i18n.copied;
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000);
  });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', loadContent);
