# robo-hpa-lab

Experimental perception lab for advanced human-presence analysis, replay, debug tooling, analytics, and scene-context modules before selective migration into `robo-hpa`.

## Purpose

This repository is a clean sandbox for building a lightweight, browser-native perception operating layer inspired by:

- DimensionalOS / dimos for modular stream-oriented architecture and replay-first development
- Pangolin for debugging-oriented multiview perception tooling
- Modern dataviz ecosystems for explainability and operator analytics
- Robotics perception references for scene-context expansion

This is **not** a fork of any of those repositories.
It is an original implementation focused on human emotion, presence, distress interpretation, and operator-facing transparency.

## Principles

- No fake features
- No dead UI
- No placeholder modules disguised as production features
- Replay-first architecture
- Portable modules that can later be migrated into `robo-hpa`
- Browser-native and lightweight where possible

## Target stack

- React
- Vite
- TypeScript
- Express

## Planned architecture

```text
src/
  core/
    event-bus.ts
    pipeline.ts
    state-manager.ts

  streams/
    visual-stream.ts
    audio-stream.ts
    perception-stream.ts

  perception/
    schemas/
      perception-output.ts
    visual/
    audio/
    aggregator/
    scene-context/

  modules/
    debug-studio/
    analytics/
    replay/
    operator/

  components/
  pages/

server/
  api/
  services/
```

## Delivery strategy

### Phase 1
- Bootstrap clean architecture
- Define strict schemas
- Create event bus and lightweight stream contracts
- Build replay-friendly data model

### Phase 2
- Add visual/audio stream emitters
- Add scene-context extension
- Add live debug-studio shell

### Phase 3
- Add analytics modules
- Add replay controls and export
- Add operator reasoning surfaces

### Phase 4
- Audit and remove anything partial, fake, or unnecessary
- Prepare migration plan into `robo-hpa`

## Migration intent

Only validated, working modules should later move into `robo-hpa`.
Nothing experimental should be merged into the production-oriented app until it proves useful and stable.
