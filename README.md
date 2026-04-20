# Portfolio Project Plan

Goal: Build a full-stack portfolio with a TypeScript/React frontend and a Java/Spring backend.

## Scope

- Pages: Home, Projects (list + detail), About, Skills, Timeline, Contact
- Admin: Authenticated CRUD for projects, skills, timeline, and contact submissions
- Exclusions: Blog, comments, and multi-user roles (for now)

## Tech Stack

- Frontend: TypeScript, React, Vite, React Router, Tailwind (or CSS Modules)
- Backend: Java 21, Spring Boot, Spring Web, Spring Data JPA, Spring Security
- Database: PostgreSQL for local and prod, H2 for tests
- Tooling: Docker Compose for local/dev, GitHub Actions for CI

## Architecture Overview

- React SPA consumes REST API from Spring Boot
- Admin UI uses the same API with auth
- Media storage initially on local disk volume (upgradeable to object storage)

## Milestones

1. Planning + design
	- Content inventory
	- Wireframes and visual direction

2. Backend foundation
	- Spring Boot setup
	- Schema + migrations
	- REST endpoints + validation
	- Auth (JWT access + refresh)

3. Frontend foundation
	- Vite + React + TypeScript
	- App shell and routes
	- Shared UI components

4. Feature build-out
	- Projects list + detail
	- About, Skills, Timeline
	- Contact form integration

5. Admin tools
	- Admin layout
	- CRUD forms and file uploads

6. Deployment
	- Docker Compose for frontend, backend, db
	- Reverse proxy and HTTPS

## API Plan (Draft)

- GET /api/projects
- GET /api/projects/{id}
- POST /api/projects
- PUT /api/projects/{id}
- DELETE /api/projects/{id}

- GET /api/skills
- POST /api/skills
- PUT /api/skills/{id}
- DELETE /api/skills/{id}

- GET /api/timeline
- POST /api/timeline
- PUT /api/timeline/{id}
- DELETE /api/timeline/{id}

- POST /api/contact

- POST /api/auth/login
- POST /api/auth/refresh
- POST /api/auth/logout

## Data Model (Draft)

- Project: id, title, slug, summary, description, tags, repoUrl, liveUrl, coverImageUrl, createdAt
- Skill: id, name, category, level
- TimelineItem: id, title, org, startDate, endDate, description
- ContactMessage: id, name, email, message, createdAt
- AdminUser: id, email, passwordHash, createdAt

## Repo Structure (Planned)

- frontend/
  - src/
  - public/
- backend/
  - src/main/java/
  - src/main/resources/
- infra/
  - docker-compose.yml

## Deployment Plan

- Build frontend to static assets and serve behind a reverse proxy
- Run backend and database as Docker services
- Add environment variables via Docker Compose

## Open Questions

- JWT storage: httpOnly cookie vs local storage
- Image storage: local volume vs object storage
- Admin access: single user vs invite-based

## Next Steps

- Pick UI framework (Tailwind or CSS Modules)
- Finalize auth approach and session strategy
- Scaffold frontend and backend projects
