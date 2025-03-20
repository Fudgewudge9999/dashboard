# Personal Dashboard Documentation

## Overview

This personal dashboard is a comprehensive web application designed to help users organize, track, and improve various aspects of their lives in one central place.

## Features

- **Dashboard**: Central overview with widgets and quick access to all features
- **Tasks**: To-do list management with priority levels and status tracking
- **Calendar**: Event scheduling and management
- **Notes**: Rich text note-taking and organization
- **Goals**: Goal setting and tracking with subgoals
- **Focus**: Pomodoro-style productivity timer and session tracking
- **Resources**: Storage for links, files, and other resources
- **Analytics**: Data visualizations of productivity, goals, and habits
- **Journal**: Reflective journal entries
- **Tutoring**: Tutoring session management

## Tech Stack

### Frontend
- **React**: UI library
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and development server
- **React Router**: Navigation and routing
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI
- **Tanstack Query**: Data fetching and state management
- **Zustand**: State management
- **Recharts**: Data visualization
- **date-fns**: Date manipulation utilities

### Backend
- **Supabase**: Backend-as-a-Service
  - Authentication
  - PostgreSQL database
  - Storage
  - Row Level Security (RLS)

## Database Schema

The application uses a PostgreSQL database with these main tables:

- `goals` & `subgoals`: Track user goals and their breakdown
- `tasks`: User task management
- `focus_sessions`: Pomodoro session tracking
- `resources`: Links, files, and other resources
- `events`: Calendar events
- `notes`: User notes with rich text content
- `categories`: Categorization for resources and notes

## Authentication and Security

- User authentication via Supabase Auth
- Row Level Security (RLS) policies ensure users can only access their own data
- PKCE authentication flow for secure token handling

## Development

### Prerequisites
- Node.js and npm
- Supabase CLI (for database migrations)

### Environment Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

### Local Development
```bash
npm run dev
```

### Database Management

The application follows a migration-based workflow for database changes:

1. Create a new migration:
   ```bash
   npx supabase migration new your_migration_name
   ```

2. Apply the migration:
   ```bash
   npx supabase db push
   ```

3. Generate updated TypeScript types:
   ```bash
   npx supabase gen types typescript > src/types/supabase-generated.ts
   ```

For more details on database development, refer to:
- [Database Structure](../supabase/DATABASE.md)
- [Supabase Development Workflow](../supabase/WORKFLOW.md)

## Project Structure

- `/src`: Frontend source code
  - `/components`: React components organized by feature
  - `/context`: React context providers
  - `/hooks`: Custom React hooks
  - `/integrations`: External service integrations (Supabase)
  - `/pages`: Top-level page components
  - `/types`: TypeScript type definitions
  - `/utils`: Utility functions
  - `/store`: State management with Zustand
- `/supabase`: Supabase configuration and migrations
- `/public`: Static assets
- `/docs`: Documentation (this documentation)
