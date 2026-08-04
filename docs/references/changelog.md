# Changelog Reference

These guidelines are distilled from [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). Refer to that site for the canonical reference.

## Principles

- A changelog is for humans, not machines. Do not paste raw git logs into it.
- Keep an `## [Unreleased]` section at the top for work that has not been released.
- When releasing, move the `Unreleased` changes into a new version section; the most recent release comes first.
- Each release heading should include the version and an ISO 8601 release date (`YYYY-MM-DD`).
- Document every notable change; do not leave undocumented changes behind.

## Change groups

Group changes under one of the following subsections, in this order if present:

- `### Added` — new features.
- `### Changed` — changes to existing functionality.
- `### Deprecated` — soon-to-be removed features.
- `### Removed` — now-removed features.
- `### Fixed` — bug fixes.
- `### Security` — vulnerability fixes.

Always call out deprecations, removals, and breaking changes clearly.

## Versioning

This project follows [Semantic Versioning](https://semver.org/).
