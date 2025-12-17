# Divya Sri Pothuraju - Portfolio Website

## Overview

A professional developer portfolio website for Divya Sri Pothuraju, a Software Development Engineer with 3+ years of experience. The site showcases work experience, projects, skills, and provides a contact form for recruiters and potential employers. Built as a single-page application with a clean, modern design optimized for recruiter scanning.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **Component Library**: shadcn/ui (Radix UI primitives with custom styling)
- **Build Tool**: Vite with React plugin

The frontend follows a component-based architecture with these key sections:
- Navigation with smooth scroll and active section indicators
- Hero section with CTAs
- About, Experience, Projects, Skills, and Contact sections
- Dark/light theme support via ThemeProvider

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints under `/api/`

Current API endpoints:
- `POST /api/contact` - Submit contact form messages
- `GET /api/resume/download` - Download resume file

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Current Storage**: In-memory storage (MemStorage class) for development
- **Schema Location**: `shared/schema.ts` contains database table definitions

Database tables defined:
- `users` - Basic user authentication (id, username, password)
- `contact_messages` - Contact form submissions (id, name, email, subject, message, createdAt)

The storage layer uses an interface pattern (`IStorage`) allowing easy swap between memory and database implementations.

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # UI components (section components + shadcn/ui)
│   │   ├── lib/          # Utilities and data
│   │   ├── pages/        # Route pages
│   │   └── hooks/        # Custom React hooks
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage layer
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code (schemas, types)
└── attached_assets/  # Static assets like resume files
```

### Design System
- Typography: Inter font family
- Color scheme: HSL-based CSS variables supporting light/dark modes
- Component patterns: Cards with hover elevation, badges for tags, responsive grid layouts
- Follows design guidelines in `design_guidelines.md` for professional, recruiter-friendly presentation

## External Dependencies

### Core Libraries
- **@tanstack/react-query**: Async state management and API calls
- **drizzle-orm** + **drizzle-zod**: Database ORM with Zod schema integration
- **zod**: Runtime type validation for forms and API requests
- **react-hook-form**: Form state management with validation

### UI Components
- **@radix-ui/***: Accessible UI primitives (dialog, dropdown, tabs, etc.)
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library
- **embla-carousel-react**: Carousel functionality
- **vaul**: Drawer component

### Database
- **PostgreSQL**: Production database (requires DATABASE_URL environment variable)
- **connect-pg-simple**: Session storage for PostgreSQL

### Development Tools
- **Vite**: Frontend build and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Production server bundling
- **@replit/vite-plugin-***: Replit-specific dev tools