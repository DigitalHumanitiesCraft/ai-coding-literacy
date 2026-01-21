/**
 * Slide Viewer - Minimalistischer Markdown-Präsentations-Viewer
 * Nutzt das Design-System von AI Coding Literacy
 *
 * Verwendung: viewer.html?deck=pfad/zum/deck (ohne .md)
 *
 * Markdown-Format:
 * - Frontmatter mit --- begrenzt (title, competency, etc.)
 * - Slides getrennt durch ---
 * - Glossar-Begriffe: [[Begriff]] werden automatisch verlinkt
 */

// =============================================================================
// KONFIGURATION
// =============================================================================

const CONFIG = {
    basePath: 'decks/',
    defaultDeck: 'programmieren-2-0/03-python',
    slideDelimiter: /\n---\n/
};

// Glossar aus dem Wissensdokument + Workshop-spezifische Begriffe
const GLOSSAR = {
    // Grundbegriffe aus Wissensdokument
    'API': 'Application Programming Interface – Schnittstelle zur programmatischen Nutzung eines Dienstes',
    'API-Key': 'Geheimer Schlüssel zur Authentifizierung bei einer API',
    'CORS': 'Cross-Origin Resource Sharing – Browser-Sicherheitsmechanismus, der lokale Dateizugriffe blockiert',
    'CSV': 'Comma-Separated Values – Tabellenformat mit Komma-getrennten Werten',
    'CSS': 'Cascading Style Sheets – Sprache für visuelles Design von Webseiten',
    'HTML': 'HyperText Markup Language – Sprache für Struktur von Webseiten',
    'JavaScript': 'Programmiersprache für Interaktivität in Webseiten',
    'JSON': 'JavaScript Object Notation – Datenformat für strukturierte Daten',
    'Live Server': 'VS Code Extension für lokalen Webserver – löst CORS-Probleme',
    'LLM': 'Large Language Model – KI-Modell wie Claude oder ChatGPT',
    'PATH': 'Systemvariable, die angibt, wo Programme zu finden sind',
    'Terminal': 'Textbasierte Eingabezeile für Befehle',
    'Token': 'Texteinheit, die LLMs verarbeiten (ca. 0.75 Wörter pro Token)',
    'Python': 'Programmiersprache, beliebt für Scripting und Datenverarbeitung',
    'VS Code': 'Visual Studio Code – Code-Editor von Microsoft',
    'Prompt': 'Eingabe/Anfrage an ein LLM',
    'Context Window': 'Der "Arbeitsspeicher" eines LLM – begrenzte Größe, was nicht drin ist, existiert nicht',

    // Code-Strukturen (Block 3)
    'Import': 'Laden einer Bibliothek am Anfang eines Skripts (z.B. import csv)',
    'Variable': 'Benannter Behälter zum Speichern von Daten (z.B. anzahl = 0)',
    'Schleife': 'Wiederholen von Code für mehrere Elemente (for ... in ...)',
    'Bedingung': 'Code nur ausführen wenn etwas zutrifft (if ... else)',
    'Funktion': 'Wiederverwendbarer Code-Block mit Namen',

    // Fehler und Debugging
    'Encoding': 'Art, wie Textzeichen gespeichert werden – UTF-8 ist Standard für Umlaute',
    'Debugging': 'Fehler finden und beheben – systematischer Prozess',
    'FileNotFoundError': 'Python-Fehler: Datei wurde nicht gefunden – Pfad prüfen!',
    'UnicodeDecodeError': 'Python-Fehler: Encoding-Problem – encoding="utf-8" verwenden',
    'SyntaxError': 'Python-Fehler: Tippfehler im Code – Zeile genau prüfen',

    // LLM-spezifisch (Block 6)
    'Halluzination': 'Wenn LLMs erfundene Funktionen, APIs oder Fakten generieren',
    'Randfälle': 'Edge Cases – Situationen, die der normale Code nicht berücksichtigt',
    'Rate Limiting': 'Begrenzung der API-Anfragen pro Zeiteinheit – zu viele Requests = Sperre',

    // Kompetenzen
    'Computational Thinking': 'Probleme strukturieren und in lösbare Teile zerlegen',
    'Context Engineering': 'Dem LLM die richtigen Informationen geben',
    'Code Literacy': 'Generierten Code lesen, verstehen und einordnen können',
    'Informed Vibe Coding': 'Mit LLM-Unterstützung coden, aber Ergebnisse kritisch prüfen'
};

// =============================================================================
// STATE
// =============================================================================

let slides = [];
let currentSlide = 0;
let meta = {};

// =============================================================================
// DOM ELEMENTS
// =============================================================================

let elements = {};

/**
 * Initialisiert DOM-Referenzen mit Validierung
 */
function initElements() {
    const requiredIds = [
        'slide-content', 'current', 'total', 'prev', 'next',
        'deck-title', 'deck-competency', 'glossar-tooltip',
        'glossar-term', 'glossar-definition'
    ];

    const missingElements = [];

    elements = {
        content: document.getElementById('slide-content'),
        current: document.getElementById('current'),
        total: document.getElementById('total'),
        prev: document.getElementById('prev'),
        next: document.getElementById('next'),
        title: document.getElementById('deck-title'),
        competency: document.getElementById('deck-competency'),
        glossarTooltip: document.getElementById('glossar-tooltip'),
        glossarTerm: document.getElementById('glossar-term'),
        glossarDefinition: document.getElementById('glossar-definition')
    };

    // Prüfe ob alle Elemente existieren
    Object.entries(elements).forEach(([key, el]) => {
        if (!el) missingElements.push(key);
    });

    if (missingElements.length > 0) {
        console.error('Fehlende DOM-Elemente:', missingElements.join(', '));
        return false;
    }

    return true;
}

// =============================================================================
// MARKDOWN PARSING
// =============================================================================

/**
 * Parst Frontmatter aus Markdown
 */
function parseFrontmatter(markdown) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = markdown.match(frontmatterRegex);

    if (match) {
        const frontmatter = {};
        match[1].split('\n').forEach(line => {
            const colonIndex = line.indexOf(':');
            if (colonIndex > 0) {
                const key = line.substring(0, colonIndex).trim();
                const value = line.substring(colonIndex + 1).trim();
                frontmatter[key] = value;
            }
        });
        return { meta: frontmatter, content: match[2] };
    }

    return { meta: {}, content: markdown };
}

/**
 * Teilt Markdown in einzelne Slides
 */
function parseSlides(markdown) {
    const { meta: frontmatter, content } = parseFrontmatter(markdown);
    meta = frontmatter;

    const rawSlides = content.split(CONFIG.slideDelimiter);

    return rawSlides
        .map(s => s.trim())
        .filter(s => s.length > 0);
}

// =============================================================================
// GLOSSAR
// =============================================================================

/**
 * Ersetzt [[Begriff]] durch verlinkte Glossar-Terme
 */
function processGlossarTerms(html) {
    // Ersetze [[Begriff]] Syntax
    html = html.replace(/\[\[([^\]]+)\]\]/g, (match, term) => {
        if (GLOSSAR[term]) {
            return `<span class="glossar-term" data-term="${term}">${term}</span>`;
        }
        return term;
    });

    // Auto-detect bekannte Begriffe (nur ganze Wörter)
    Object.keys(GLOSSAR).forEach(term => {
        // Nur wenn nicht schon als Glossar-Term markiert
        const regex = new RegExp(`(?<!data-term="|class="glossar-term">)\\b(${term})\\b(?![^<]*<\/span>)`, 'g');
        // Nur erstes Vorkommen pro Slide
        let replaced = false;
        html = html.replace(regex, (match) => {
            if (!replaced && !match.includes('glossar-term')) {
                replaced = true;
                return `<span class="glossar-term" data-term="${term}">${match}</span>`;
            }
            return match;
        });
    });

    return html;
}

/**
 * Setup Glossar-Tooltip Event Listeners
 */
function setupGlossarTooltip() {
    document.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('glossar-term')) {
            const term = e.target.dataset.term;
            const definition = GLOSSAR[term];

            if (definition) {
                elements.glossarTerm.textContent = term;
                elements.glossarDefinition.textContent = definition;

                // Position tooltip mit Boundary-Check
                const rect = e.target.getBoundingClientRect();
                const tooltipWidth = 350; // max-width aus CSS
                const tooltipHeight = 100; // geschätzte Höhe
                const padding = 8;

                let left = rect.left;
                let top = rect.bottom + padding;

                // Rechter Rand: Tooltip nicht über Viewport hinaus
                if (left + tooltipWidth > window.innerWidth - padding) {
                    left = window.innerWidth - tooltipWidth - padding;
                }

                // Linker Rand
                if (left < padding) {
                    left = padding;
                }

                // Unterer Rand: Tooltip nach oben wenn kein Platz
                if (top + tooltipHeight > window.innerHeight - padding) {
                    top = rect.top - tooltipHeight - padding;
                }

                elements.glossarTooltip.style.left = `${left}px`;
                elements.glossarTooltip.style.top = `${top}px`;

                elements.glossarTooltip.classList.add('visible');
            }
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('glossar-term')) {
            elements.glossarTooltip.classList.remove('visible');
        }
    });
}

// =============================================================================
// CODE BLOCKS
// =============================================================================

/**
 * Fügt Kopier-Buttons zu Code-Blöcken hinzu
 */
function enhanceCodeBlocks() {
    const codeBlocks = elements.content.querySelectorAll('pre');

    codeBlocks.forEach((pre, index) => {
        // Wrapper erstellen
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block';

        // Header mit Kopier-Button
        const header = document.createElement('div');
        header.className = 'code-header';

        // Dateiname aus vorherigem Text extrahieren oder generisch
        const filename = document.createElement('span');
        filename.className = 'filename';

        // Versuche Dateiname aus Code zu extrahieren (# dateiname.py Kommentar)
        const codeText = pre.textContent;
        const filenameMatch = codeText.match(/^#\s*([\w.-]+\.(py|js|html|css|json|csv))/m);
        filename.textContent = filenameMatch ? filenameMatch[1] : `code-${index + 1}`;

        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'kopieren';
        copyBtn.onclick = () => copyCode(pre, copyBtn);

        header.appendChild(filename);
        header.appendChild(copyBtn);

        // Wrapper einfügen
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(header);
        wrapper.appendChild(pre);
    });
}

/**
 * Kopiert Code in die Zwischenablage
 */
async function copyCode(pre, btn) {
    try {
        await navigator.clipboard.writeText(pre.textContent);
        btn.textContent = 'kopiert!';
        setTimeout(() => {
            btn.textContent = 'kopieren';
        }, 2000);
    } catch (err) {
        btn.textContent = 'Fehler';
        setTimeout(() => {
            btn.textContent = 'kopieren';
        }, 2000);
    }
}

// =============================================================================
// RENDERING
// =============================================================================

/**
 * Rendert einen Slide
 */
function renderSlide(index) {
    if (index < 0 || index >= slides.length) return;

    currentSlide = index;
    const slideContent = slides[index];

    // Markdown zu HTML
    let html = marked.parse(slideContent);

    // Glossar-Terme verarbeiten
    html = processGlossarTerms(html);

    elements.content.innerHTML = html;

    // Code-Blöcke verbessern
    enhanceCodeBlocks();

    // Title Slide Detection
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const children = Array.from(tempDiv.children);
    const isTitle = children.length <= 3 &&
                    children[0]?.tagName === 'H1' &&
                    children.every(c => ['H1', 'P', 'H2'].includes(c.tagName));

    elements.content.classList.toggle('title-slide', isTitle);

    // Kompetenz-Border hinzufügen wenn definiert
    elements.content.className = 'slide';
    if (isTitle) elements.content.classList.add('title-slide');
    if (meta.competency) {
        elements.content.classList.add(`comp-border-${meta.competency}`);
    }

    updateUI();
    updateURL();
}

/**
 * Aktualisiert UI-Elemente
 */
function updateUI() {
    elements.current.textContent = currentSlide + 1;
    elements.total.textContent = slides.length;

    elements.prev.disabled = currentSlide === 0;
    elements.next.disabled = currentSlide === slides.length - 1;

    // Titel
    if (meta.title) {
        elements.title.textContent = meta.title;
        document.title = `${meta.title} – Slides`;
    }

    // Kompetenz-Badge
    if (meta.competency) {
        elements.competency.textContent = meta.competency;
        elements.competency.className = `slide-competency comp-${meta.competency}`;
        elements.competency.style.display = 'inline-block';
    } else {
        elements.competency.style.display = 'none';
    }
}

/**
 * Aktualisiert URL mit aktuellem Slide
 */
function updateURL() {
    const url = new URL(window.location);
    url.searchParams.set('slide', currentSlide + 1);
    window.history.replaceState({}, '', url);
}

// =============================================================================
// NAVIGATION
// =============================================================================

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        renderSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        renderSlide(currentSlide - 1);
    }
}

function goToSlide(index) {
    if (index >= 0 && index < slides.length) {
        renderSlide(index);
    }
}

// =============================================================================
// EVENT HANDLERS
// =============================================================================

function setupEventListeners() {
    elements.prev.addEventListener('click', prevSlide);
    elements.next.addEventListener('click', nextSlide);

    document.addEventListener('keydown', (e) => {
        // Ignoriere wenn in Input-Feld
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
            case ' ':
            case 'PageDown':
                e.preventDefault();
                nextSlide();
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault();
                prevSlide();
                break;
            case 'Home':
                e.preventDefault();
                goToSlide(0);
                break;
            case 'End':
                e.preventDefault();
                goToSlide(slides.length - 1);
                break;
        }
    });

    // Touch/Swipe Support
    let touchStartX = 0;
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    document.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) nextSlide();
            else prevSlide();
        }
    });

    // Glossar Tooltip
    setupGlossarTooltip();
}

// =============================================================================
// LOADING
// =============================================================================

async function loadDeck(deckPath) {
    try {
        const response = await fetch(`${CONFIG.basePath}${deckPath}.md`);

        if (!response.ok) {
            throw new Error(`Deck nicht gefunden: ${deckPath}`);
        }

        const markdown = await response.text();
        slides = parseSlides(markdown);

        if (slides.length === 0) {
            throw new Error('Keine Slides gefunden');
        }

        // Start-Slide aus URL oder 0
        const url = new URL(window.location);
        const startSlide = parseInt(url.searchParams.get('slide')) - 1 || 0;

        renderSlide(Math.max(0, Math.min(startSlide, slides.length - 1)));

    } catch (error) {
        elements.content.innerHTML = `
            <h1>Fehler</h1>
            <p>${error.message}</p>
            <p><code>${CONFIG.basePath}${deckPath}.md</code></p>
        `;
    }
}

// =============================================================================
// INIT
// =============================================================================

function init() {
    // DOM-Elemente validieren
    if (!initElements()) {
        document.body.innerHTML = '<h1>Fehler</h1><p>Slide Viewer konnte nicht initialisiert werden. Prüfen Sie die Konsole für Details.</p>';
        return;
    }

    setupEventListeners();

    const url = new URL(window.location);
    const deck = url.searchParams.get('deck') || CONFIG.defaultDeck;

    loadDeck(deck);
}

document.addEventListener('DOMContentLoaded', init);
