# Conventional Commits Reference

These guidelines are distilled from [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/). Refer to that site for the canonical reference.

## Commit format

A commit message is structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Types

- `feat` — introduces a new feature (correlates with a `MINOR` SemVer bump).
- `fix` — patches a bug (correlates with a `PATCH` SemVer bump).
- `docs` — adds or updates documentation.
- `style` — code style changes that do not affect meaning (formatting, semicolons, etc.).
- `refactor` — code changes that neither fix a bug nor add a feature.
- `perf` — improves performance.
- `test` — adds or updates tests.
- `build` — changes to build system or dependencies.
- `ci` — changes to CI configuration.
- `chore` — other changes that do not modify source or test files.
- `revert` — reverts a previous commit.

## Breaking changes

A breaking change is indicated by one of the following:

- A `BREAKING CHANGE:` footer with a description.
- An exclamation mark (`!`) immediately before the colon in the type/scope prefix, e.g. `feat(api)!: ...`.

Breaking changes correlate with a `MAJOR` SemVer bump.

## Scope

A scope may be provided in parentheses after the type to give additional context, e.g. `fix(parser):` or `feat(button):`.

## Examples

```
feat: allow config object to extend other configs

BREAKING CHANGE: `extends` key now used for extending config files
```

```
feat(api)!: send email when product ships
```

```
fix(parser): handle multiple spaces in string
```

```
docs: correct spelling of CHANGELOG
```

## Combining with gitmojis

This project prefixes Conventional Commits with a gitmoji. See `docs/references/gitmoji.md` for the full gitmoji reference. Format:

```
<gitmoji> <type>[(scope)]: <description>
```

Examples:

- `✨ feat(button): add loading state`
- `🐛 fix(store): prevent duplicate dispatches`
- `✅ test(shadow): verify attribute reflection`
- `📝 docs(conventional-commits): add commit guidelines`
