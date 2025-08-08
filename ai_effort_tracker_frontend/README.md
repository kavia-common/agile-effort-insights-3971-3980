# AI Effort Tracker: Frontend

Modern Next.js frontend for AI-powered agile effort analytics and sprint reporting.

## Features

- Modern minimal landing page with features overview
- User authentication (login/registration via `/api/auth/*`)
- Excel upload for sprint data
- Analytics dashboard (charts/reports: REST/HTTP API integration)
- Interactive AI chat (WebSocket integration)
- Responsive, themed UI (primary: #2563eb, secondary: #475569, accent: #fbbf24)

## Usage

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the dev server:

    ```bash
    npm run dev
    ```

3. Open your browser at [http://localhost:3000](http://localhost:3000)

For real data, configure the following environment variables in `.env`:

- `NEXT_PUBLIC_API_BASE`: URL for backend API base (`http://localhost:8000` by default)

## Architecture

- `/dashboard`: Upload Excel and view reports/charts (requires login)
- `/chat`: Chat with AI for analysis (requires login)
- `/auth`: Login/register

API endpoints required:

- `POST /api/auth/login` – login
- `POST /api/auth/register` – create user
- `POST /api/upload` – Excel file upload
- WebSocket endpoint at `/ws/chat` – AI chat

## Theme

Consistent modern/minimal look with:
- Primary: #2563eb
- Secondary: #475569
- Accent: #fbbf24

## Customization

All REST/WebSocket endpoints are easily swappable; see `/src/utils/api.ts` for details.

