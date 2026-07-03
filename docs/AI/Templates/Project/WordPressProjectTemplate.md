# WordPress Project Template

## Purpose

The WordPress Project Template extends the Generic Project Template for WordPress-hosted projects.

It provides a reusable structure for plugins, themes, or WordPress-hosted applications adopting AI Framework RC2 without inheriting Forge AI-specific architecture or implementation details.

---

## Relationship to the Generic Template

The WordPress Project Template starts with the Generic Project Template structure:

```text
AGENTS.md
.cursorrules
README.md
docs/ProjectStatus.md
docs/FrameworkGovernance.md
docs/AI/
docs/DevelopmentPhases/
docs/Architecture/
src/
tests/
_reference/
_wip/
```

It then adds WordPress-oriented project structure, dependency files, and adapter boundaries.

---

## Suggested WordPress Additions

```text
composer.json
{plugin-bootstrap-file}.php
src/
    Core/
    Domain/
    Application/
    Api/
    Infrastructure/
    Presentation/
tests/
```

The plugin bootstrap filename should be set by the project during template adoption.

Theme-based projects may replace the plugin bootstrap convention with the appropriate theme entrypoints while preserving the same architecture boundaries.

---

## Directory Responsibilities

### `composer.json`

`composer.json` defines PHP dependencies, autoloading, scripts, and development tooling for the WordPress project.

It should not introduce dependencies on read-only reference directories.

### `{plugin-bootstrap-file}.php`

The plugin bootstrap file is the WordPress entrypoint.

It should remain thin and delegate initialization to the project kernel, service provider, or bootstrap layer.

It must not become the owner of Domain rules or project architecture.

### `src/Core/`

`src/Core/` owns project bootstrap, kernel, service registration, container wiring, and shared platform contracts.

Core should not own product business rules.

### `src/Domain/`

`src/Domain/` owns entities, value objects, domain services, policies, specifications, domain events, and domain contracts.

Domain should remain independent of WordPress APIs, REST transport, persistence implementation, rendering, and presentation concerns.

### `src/Application/`

`src/Application/` owns use cases, commands, queries, handlers, DTOs, registries, and application orchestration.

Application coordinates Domain without making WordPress the source of business truth.

### `src/Api/`

`src/Api/` owns transport-facing controllers, route definitions, requests, responses, and API metadata.

Api is transport-facing and should not own Domain rules.

### `src/Infrastructure/`

`src/Infrastructure/` owns WordPress adapters, persistence adapters, cache adapters, filesystem adapters, logging adapters, external service integrations, and other host integrations.

Infrastructure adapts external systems to project contracts.

### `src/Presentation/`

`src/Presentation/` owns admin UI, frontend UI, editor UI, templates, assets, and user-facing presentation concerns when relevant.

Presentation consumes approved contracts and must not define Domain truth.

### `tests/`

`tests/` contains project tests, which may include unit, integration, WordPress adapter, API, and presentation tests depending on project scope.

---

## WordPress Boundary Rule

WordPress is the adapter and platform host. WordPress is not automatically Domain truth.

WordPress APIs, hooks, post types, options, metadata, REST routes, database tables, and admin screens may be implementation mechanisms. They must not silently become the canonical owner of business rules unless the project governance explicitly defines that ownership and preserves clean dependency direction.

---

## Not Axis Suite-Specific

This template is not an Forge AI template.

It must not include:

- Forge AI schema rules;
- Axis Enterprise Design System rules;
- Axis sprint identifiers;
- Axis widget, runtime, builder, token, template, or theme contracts;
- Axis source namespaces;
- Axis implementation code;
- Axis-specific ProjectStatus entries.

Forge AI remains the first reference implementation of AI Framework RC2, not the definition of all WordPress projects.
