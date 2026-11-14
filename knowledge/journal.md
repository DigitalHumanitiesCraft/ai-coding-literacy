---
title: Journal
project:
  name: AI Coding Literacy
  repository: https://github.com/DigitalHumanitiesCraft/ai-coding-literacy
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: active
created: 2026-11-14
updated: 2026-11-14
language: de
---

# Journal

Arbeitstagebuch des ruhenden Repositorys. Der Workshop Programmieren 2.0 vom 12. Februar 2026 hat stattgefunden. Konzept und Workshop-Ausarbeitung bleiben die in `CLAUDE.md` genannten Quellen, `status-report.md` beschreibt den Stand vom 2. Februar 2026. Die Eintraege stehen chronologisch, der neueste zuerst.

## Open

- Zwei auseinanderlaufende Site-Baeume, festgestellt am 2026-11-10 bei der Repository-Wartung (Quellen `gh api repos/DigitalHumanitiesCraft/ai-coding-literacy/pages`, `git log -- docs`, `diff -rq docs/de de`, Ziel `CLAUDE.md` Technische Hinweise, `_config.yml`, `ReadMe.md`). GitHub Pages baut die Repository-Wurzel von `main`, waehrend `CLAUDE.md` den Ordner `docs/` als Deployment-Quelle nennt. Die Seiten in der Wurzel (`de/`, `js/`, `css/`) wurden zuletzt am 2026-02-02/03 geaendert. Commit `fccc753` vom 2026-03-13 aenderte nur `docs/` und fuegte zwei Tutorial-Seiten und ein neues Workshop-Stylesheet hinzu. Die veroeffentlichte Site zeigt daher den Februar-Stand, der Maerz-Stand ist nur unter `/docs/` erreichbar. Der Operator entscheidet, ob `docs/` oder die Wurzel die kanonische Site ist, und setzt die Pages-Quelle entsprechend.
- Repository-Hygiene, festgestellt am 2026-11-10 (Quellen `git ls-files .claude`, `git stash list`, Ziel `.gitignore`, lokaler Stash). `.claude/settings.local.json` ist versioniert, obwohl `.gitignore` es ausschliesst. Die Datei enthaelt lokale Werkzeugberechtigungen und keine Zugangsdaten, Jekyll liefert sie nicht aus. Der Stash `Local refactoring changes` vom 2026-01-21 besteht weiter. Beides blieb unveraendert. Der Operator entscheidet, ob die Datei aus der Versionierung genommen und ob der Stash verworfen oder angewendet wird.

## Eintraege

### 2026-11-14 handoff.md im Journal aufgeloest

- Quelle: Entscheidung des Operators vom 2026-11-14, dass ein Promptotyping-Repository kein `knowledge/handoff.md` mehr fuehrt und das Journal mit dem Offenen beginnt.
- Ziel: dieses Journal, neu angelegt, und das entfernte `knowledge/handoff.md`.
- Ergebnis: Die beiden offenen Punkte zur Pages-Quelle und zur Repository-Hygiene stehen unter Open, der Wiedereinstiegsstand steht in der Einleitung. Nichts wurde fallen gelassen, keine andere Datei verwies auf das Handoff.
