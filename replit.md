# Loodgieter Services - Professional Plumbing Website

## Overview

A professional Dutch plumbing services website (loodgieter-services.nl) built for high conversion and local SEO. The platform serves as a lead generation tool for plumbing services across multiple Dutch cities (Amsterdam, Rotterdam, Leiden, Zoetermeer). The site features city-specific landing pages, quote request forms, contact forms, and is optimized for mobile emergency service users.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with custom design system based on shadcn/ui components
- **State Management**: TanStack React Query for server state and form mutations
- **Form Handling**: React Hook Form with Zod validation schemas
- **UI Components**: Radix UI primitives wrapped with shadcn/ui styling conventions

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **API Pattern**: RESTful endpoints under `/api/*` prefix
- **Development**: Vite dev server with HMR proxied through Express
- **Production**: Static file serving from built client assets

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` contains all database table definitions
- **Current Storage**: In-memory storage implementation (`MemStorage`) for development
- **Database Ready**: Schema configured for PostgreSQL with Drizzle Kit migrations

### Key Design Patterns
- **Shared Types**: TypeScript schemas in `shared/` directory used by both client and server
- **Form Validation**: Zod schemas derived from Drizzle table definitions using `drizzle-zod`
- **Component Structure**: Feature components in `client/src/components/`, UI primitives in `client/src/components/ui/`
- **City Pages**: Dynamic city content using shared layout with city-specific data from schema

### Page Structure
- Home page (`/`) - Generic landing page
- City pages (`/loodgieter-{city}`) - SEO-optimized city-specific landing pages
- Contact page (`/contact`) - Contact form and information
- Offerte page (`/offerte`) - Quote request form

## External Dependencies

### Third-Party Services
- **Email Service**: Resend API for transactional emails (quote/contact form submissions)
  - Requires `RESEND_API_KEY` and optionally `RESEND_FROM_EMAIL` environment variables
- **WhatsApp Integration**: Direct link to WhatsApp for instant customer contact

### Database
- **PostgreSQL**: Required for production deployment
  - Connection via `DATABASE_URL` environment variable
  - Schema migrations managed through Drizzle Kit (`npm run db:push`)

### Key NPM Packages
- `drizzle-orm` / `drizzle-kit`: Database ORM and migration tooling
- `@tanstack/react-query`: Async state management
- `react-hook-form` / `@hookform/resolvers`: Form handling with Zod integration
- `wouter`: Lightweight client-side routing
- `express` / `express-session`: Backend server and session management
- Radix UI component primitives for accessible UI components