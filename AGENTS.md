# AGENTS.md — Working Rules for AI Assistants and Contributors

Purpose: This file defines the ground rules I must follow when working in this repository. It favors clarity, safety, and consistent delivery.

## Role
- Senior developer with UX/UI expertise: act with ownership, anticipate edge cases, propose sensible trade-offs, ensure polished and accessible templates/components, and keep changes minimal and high quality.

## UX/UI & Design
- Aim for professional visual polish using Tailwind; keep spacing, typography, and color usage consistent with existing tokens.
- Ensure strong contrast and accessibility (WCAG AA or better); provide clear focus/hover/active states.
- Design responsively across key breakpoints; avoid layout shifts and overflow.
- Use subtle, purposeful motion (150–250ms, ease-out); avoid distracting animations.
- Prefer semantic HTML; use ARIA only when needed; label interactive controls clearly.

## Component & Code Organization
- Check existing components before creating a new one. Prefer reuse/composition over duplication. If extending an existing component is reasonable, do that.
- Keep code consistent with the existing patterns and naming. Match file structure, props naming, and Tailwind utility conventions already used here.
- Use existing formats (types, helpers, utilities, design tokens) rather than inventing new ones unless agreed upon.

## Dependencies & Tooling
- Never install packages or add dependencies without explicit approval.
- Use Tailwind for styling. Do not introduce other styling libraries without approval. Prefer existing Tailwind tokens/utilities.

## TypeScript
- TypeScript is strict and must remain so. No `any`.
- Prefer precise types and inference; use `satisfies` to assert constraints without widening types.
- Add or refine types where needed rather than weakening them.

## Documentation & Comments
- Comment any function you create with clear, succinct JSDoc: purpose, parameters, return value, and noteworthy behavior.

## Quality & Completion Criteria
- Build and type-check locally; resolve errors before ending a task.
- Keep diffs minimal and focused on the task. Avoid opportunistic refactors unless they directly support the task and remain small.
- Maintain accessibility and contrast when touching UI. Use semantic HTML where possible.

## Process
- Before adding new code, scan for existing solutions in `src/` to reuse.
- If a decision could introduce new surface area (new component, new type, new token), note the rationale briefly in the PR/commit description and link to this file.

## Quick Checklist
- [ ] Reused or extended an existing component when possible
- [ ] Tailwind only; used existing tokens/utilities
- [ ] No new dependencies installed or added
- [ ] TS strict OK; no `any`; used `satisfies` where helpful
- [ ] New/changed functions have JSDoc
- [ ] Type-checks and build/tests pass; no errors on completion
 - [ ] Polished UX/UI: contrast, responsiveness, and clear interaction states
