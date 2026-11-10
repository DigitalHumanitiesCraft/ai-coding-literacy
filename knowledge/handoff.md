---
title: Handoff
project:
  name: AI Coding Literacy
  repository: https://github.com/DigitalHumanitiesCraft/ai-coding-literacy
method:
  name: Promptotyping
  url: https://dhcraft.org/Promptotyping/
status: active
created: 2026-11-10
updated: 2026-11-10
language: en
---

# Handoff

Re-entry point for the resting repository. The Programmieren 2.0 workshop of 12 February 2026 has taken place. The concept and the workshop elaboration remain the sources named in `CLAUDE.md`. `status-report.md` describes the state of 2 February 2026.

## Two diverging site trees

- Received: 2026-11-10, repository maintenance
- Source: `gh api repos/DigitalHumanitiesCraft/ai-coding-literacy/pages`, `git log -- docs`, `diff -rq docs/de de`
- Target: `CLAUDE.md` (Technische Hinweise), `_config.yml`, `ReadMe.md`
- Context: GitHub Pages builds the repository root of `main`, while `CLAUDE.md` names the `docs/` folder as deployment source. The root pages (`de/`, `js/`, `css/`) were last changed on 2026-02-02/03. Commit `fccc753` of 2026-03-13 changed only `docs/`, adding two tutorial pages and a new workshop stylesheet. The published site therefore shows the February state, and the March state is reachable only under `/docs/`. Which tree is canonical is undecided.
- Operator point: Decide whether `docs/` or the repository root is the canonical site and set the Pages source accordingly.

## Repository hygiene

- Received: 2026-11-10, repository maintenance
- Source: `git ls-files .claude`, `git stash list`
- Target: `.gitignore`, local stash
- Context: `.claude/settings.local.json` is tracked although `.gitignore` excludes it. It holds local tool permissions and no credentials, and Jekyll does not serve it. The stash `Local refactoring changes` of 2026-01-21 is still present. Neither was changed.
- Operator point: Decide whether to untrack `.claude/settings.local.json` and whether to drop or apply the stash.
