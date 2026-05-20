# CognifAI

CognifAI is an AI-powered student productivity platform built with Next.js, Tailwind CSS, Zustand, Firebase, Auth.js, Groq, Recharts, and Lucide React.

## Features

- Upload notes and PDFs
- Generate quizzes and flashcards
- Chat with AI about lessons
- Track study habits and tasks
- Organize subjects and recent uploads
- Analyze weak topics and study performance

## Stack

- Next.js App Router
- Tailwind CSS
- shadcn/ui-ready component patterns
- Recharts for analytics
- Zustand for local UI state
- Firebase for database and storage
- Auth.js for authentication
- Groq API for AI tutoring and content generation

## Setup

1. Install dependencies.
2. Copy `.env.local.example` to `.env.local` and fill in your keys.
3. Run the dev server with `npm run dev`.

## Environment

Required variables are documented in `.env.local.example`.

## Routes

- `/` landing page
- `/dashboard` main app dashboard
- `/notes` uploads and note management
- `/quizzes` quiz generation and review
- `/flashcards` spaced repetition cards
- `/analytics` study metrics and weak topics
- `/auth/signin` sign-in placeholder

## Notes

The current implementation uses route stubs and UI scaffolding. Firebase persistence, Auth.js session handling, PDF extraction, and full database wiring are ready to add next.
