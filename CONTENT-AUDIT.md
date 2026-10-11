# Portfolio content audit

Reviewed on October 11, 2026. Only the two portfolio repositories are changed. Project repositories are read-only evidence sources.

## Profile and scope

Name, university, program, third-year status, internship target, languages, project dates, team sizes, and leadership roles come from the owner’s supplied brief. The project source supports descriptions of the team applications; it does not independently establish authorship of every line. Tourism Media is described from the backend contribution perspective requested by the owner.

The original brief asked for a featured marketplace project. The owner subsequently instructed that the current portfolio should exclude ProjectCV because it is unfinished. It is omitted completely from the rendered profile and website; Tourism Media is featured instead.

Neither starter portfolio repository contained a LinkedIn URL or resume. The exact LinkedIn URL remains configurable, and the real resume must be supplied by the owner.

## Tourism Media — Backend

Reviewed repository tree: `2c0fba40f809b96982a187387eb10a20a117e483` on `main`.

Evidence under [Travel-App-Server](https://github.com/TrinhThanh-25/Tourism-Media/tree/main/Travel-App-Server):

| Portfolio claim | Source |
| --- | --- |
| Express routes, controllers, middleware, validators, data access | `server.js`, `routes/`, `controllers/`, `middleware/`, `validators/`, `db/` |
| JWT authentication and admin checks | `middleware/auth.js`, `routes/` |
| Trip ownership authorization | `controllers/tripsController.js` |
| Joi validation | `middleware/validate.js`, `validators/`, route middleware |
| Bcrypt password hashing | `db/passwords.js`, `controllers/authController.js` |
| Refresh-token rotation and SHA-256 storage | `controllers/authController.js`, especially `hashToken`, `storeRefreshToken`, and `refresh` |
| SQLite schema and relational constraints | `db/schema.js`, `db/connect.js` |
| Parameterized queries and transaction handling | `db/queries.js`, controller usage |
| Versioned schema migrations | `db/migrations.js`, `schema_migrations` bookkeeping |
| Contextual Gemini integration | `controllers/aiController.js`, `routes/aiRoutes.js` |

The AI controller’s default model is `gemini-3.1-flash-lite` and its default interface is `chat_completions` at Google’s OpenAI-compatible endpoint. Environment variables can override the provider, model, and API style; the code also supports a Responses mode. The portfolio describes the default configuration, without asserting that a live deployment is configured. Context includes available locations, favorite locations, and the authenticated user’s trips. This is application-context prompting; it is not described as vector retrieval or a trained model.

JWT/admin authorization and ownership checks are named precisely; no ABAC claim is made. MVC-style organization describes source layout, not a claim about a view-rendering backend.

## Mario Platformer

Evidence in [Mario-Project](https://github.com/TrinhThanh-25/Mario-Project):

- **Factories:** `src/Character/CharacterFactory.cpp`, and Block, Enemy, Item, Tile, and GameState factory files in the tree.
- **State:** `inc/GameState/GameState.h`, state subclasses, and `World::setGameState()` in `src/Game/World.cpp`.
- **Singleton:** `inc/Common/KeyManager.h` has a private constructor, static instance, `getInstance()`, and deleted copying; `World.cpp` uses the singleton managers.
- **Memento:** `inc/GameState/CustomMapState.h` and `src/GameState/CustomMapState.cpp` implement snapshot history and undo/redo with `CustomMapMemento`.
- **Template Method:** `inc/Game/GameLoop.h` defines virtual hooks; `src/Game/GameLoop.cpp` fixes the `run()` lifecycle.
- **Shared resources:** `inc/Common/ResourceManager.h` exposes static maps for textures, sounds, music, and fonts; `World.cpp` obtains shared music from the manager.

“Shared resource management” is used instead of an unqualified formal Flyweight claim. OOP, inheritance, polymorphism, and modular design are described; the portfolio does not claim full SOLID compliance or additional unverified GoF patterns.

Demo URL was supplied by the owner: [Mario demo](https://www.youtube.com/watch?v=mn1o7kyaX0U).

## Data Structure & Algorithm Visualizer

Evidence in [DataVisualizer](https://github.com/TrinhThanh-25/DataVisualizer):

- `src/SLL/`, `src/hashtable/`, `src/AVL/`, and `src/tree234/` implement the four named structures. `AVL.cpp` includes rebalancing and rotations; `TreeNode.cpp` includes insertion and splitting.
- `src/MST/Animation/GraphPresentation.cpp` implements `Kruskal()` and `Prim()` with recorded animation operations.
- `src/ShortestPath/ShortestPathState.cpp` implements `saveDijkstraState()` and `animateDijkstra()` including edge relaxation and saved states.
- `src/GUI/PlayBackControl.cpp` supplies playback controls; state and presentation modules support step-by-step execution.

Demo URL was supplied by the owner: [Visualizer demo](https://www.youtube.com/watch?v=mCVZtD-AJGw).

## Technologies excluded from the current portfolio

The omitted marketplace project was the source proposed for Spring Boot, Spring MVC, Spring Security, Spring Data JPA, Hibernate, PostgreSQL, Flyway, OAuth2/OIDC, and Maven claims. Those claims are not included in this version. Docker, Docker Compose, GitHub Actions, NGINX, and Linux are not listed as demonstrated portfolio tools. Git is supported by the repositories; Raylib is present in the C++ projects.

No claim is made about production readiness, deployment of project backends, performance, coverage, user counts, or microservices. GPA, scholarship, and IELTS are excluded.
