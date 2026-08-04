# Agent Instructions

Use this file to understand how to work with this repository.

## Project Overview

This is a vanilla Web Components demo project. The goal is to explore modern browser APIs without relying on external component libraries or frameworks for the components themselves.

## Enterprise Focus

This project demonstrates how to build an enterprise-grade vanilla JavaScript architecture that can be adopted by larger organizations. Key enterprise qualities include:

- **Reliability**: Focus on stable, relatively bug-free code through automated testing.
- **CI/CD patterns**: GitHub Actions workflows for build, test, lint, and deployment.
- **Automated testing**: Playwright for end-to-end tests and Vitest/Storybook for component-level tests.
- **Linting and standards**: Biome for formatting and lint enforcement; conventional commits for a readable history.
- **Reproducible builds and environments**: pnpm lockfile and Playwright Docker image in CI.
- **Maintainability**: Minimal dependencies in components, clear component boundaries, and a shared `BaseComponent`.
- **Observability**: Test reports and Storybook previews published with each build.

## Core Constraints

- Do **not** add external libraries inside `src/components/`.
- Use native browser APIs: Web Components, Custom Elements, Shadow DOM, `Proxy`, `Reflect`, etc.
- Prefer minimal, focused changes. Avoid unnecessary abstractions.
- Do not add emojis or verbose boilerplate unless explicitly requested.

## Tech Stack

- Vite
- TypeScript
- Tailwind CSS v4
- Storybook 10.5.5 with the Vitest addon
- Vitest for component tests
- Playwright for end-to-end tests
- Biome for linting and formatting
- pnpm for dependency management

## Component Architecture

- Components extend `src/components/BaseComponent.ts`.
- Component templates are single `.html` files under `src/components/` and are stitched into the app with `posthtml-include`.
- `BaseComponent` creates an open shadow root from a `<template>` and calls `setup()` then `render()`.
- State management is currently manual. Version 2.0 is planned to introduce native `Proxy`-based reactivity and a basic Flux store.

## Useful Commands

- `pnpm dev` – start the Vite dev server
- `pnpm build` – build and run the full test suite
- `pnpm test` – run Playwright tests
- `pnpm test:storybook` – run Storybook/Vitest component tests
- `pnpm setup:githooks` – configure Git to use the tracked `.githooks/` directory
- `pnpm biome:check` – run linting and formatting checks

## Git Hooks

- `.githooks/pre-push` runs `pnpm test:storybook` before every `git push`.
- To bypass the hook: `git push --no-verify`.
- Run `pnpm setup:githooks` once after cloning to enable the hooks.

## Conventions

- Use conventional commits.
- Keep `CHANGELOG.md` updated for each release.
- Follow the existing style and formatting. Run Biome before committing when possible.
- Do not commit, push, or perform other destructive Git operations without explicit user approval.

## Changelog Maintenance

Follow [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) conventions:

- The changelog is for humans, not machines. Do not dump raw git commit logs into it.
- Keep an `## [Unreleased]` section at the top to track upcoming changes.
- When releasing, move the `Unreleased` changes into a new version section; the latest release comes first.
- Use ISO 8601 dates (`YYYY-MM-DD`) for each release date.
- Group changes under the standard types:
  - `Added` for new features
  - `Changed` for changes to existing functionality
  - `Deprecated` for soon-to-be removed features
  - `Removed` for now-removed features
  - `Fixed` for bug fixes
  - `Security` for vulnerability fixes
- Always call out deprecations, removals, and breaking changes clearly.
- Mention that the project follows [Semantic Versioning](https://semver.org/).
- Update the changelog consistently; do not leave notable changes undocumented.
