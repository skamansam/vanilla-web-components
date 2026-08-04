# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - TBD

### Added

- Tracked `.githooks/pre-push` hook for running Storybook Vitest tests before every `git push`.
- `setup:githooks` pnpm script to configure Git's `core.hooksPath` on new clones.
- `pretest:storybook` script to auto-install Playwright browsers before Storybook tests.

### Changed

- Pre-push hook bypass is now `git push --no-verify` instead of a custom `NO_PUSH_TESTS` environment variable.

## [1.0.0] - TBD

### Added

- Initial release of the vanilla web components demo menu app.
- Component-driven architecture using custom HTML templates and a shared `BaseComponent`.
- Custom elements: `<category-search>`, `<category-card>`, `<item-card>`.
- Single-file `.html` component templates stitched into the app with `posthtml-include`.
- Storybook 10.5.5 integration with Vite, including an Introduction landing page and component stories.
- Storybook preview loader (`registerHtmlComponents`) so the same `.html` components render in Storybook without modification.
- Vitest + Storybook Vitest addon for component testing (`pnpm test:storybook`).
- Playwright end-to-end tests across Chromium, Firefox, and WebKit.
- Live search across categories, descriptions, and items with search highlighting.
- Lunch and dinner menu browsing by category.
- Responsive Tailwind CSS v4 styling.
- GitHub Pages deployment with built Storybook and Playwright HTML report included in `dist/`.
- GitHub Actions workflows:
  - `ci.yml` — builds, runs the full test suite, and deploys to Pages on `main`.
  - `tests.yml` — runs Playwright per browser and Vitest Storybook tests on every PR.
  - `biome.yml` — checks formatting and lint on every PR.
- Biome linting and formatting.
- Playwright Docker image used in CI to avoid browser installation.
- pnpm-based dependency management.
