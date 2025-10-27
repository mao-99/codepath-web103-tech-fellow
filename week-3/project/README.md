# UnityGrid Plaza - Event Management Application

A full-stack web application for managing and displaying events at various locations.

## Features

- View all events across all locations
- Browse events by specific locations
- Interactive location map with venue selection
- Real-time countdown to upcoming events
- Responsive design with modern UI

## Tech Stack

**Frontend:**
- React 18
- React Router v6
- Vite (build tool)
- Pico CSS

**Backend:**
- Node.js
- Express
- PostgreSQL

## Project Structure

```
project/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service functions
│   │   └── css/           # Stylesheets
│   └── vite.config.js     # Vite configuration
├── server/                # Backend Express application
│   ├── config/            # Database configuration
│   ├── controllers/       # Route controllers
│   ├── data/              # Seed data
│   └── routes/            # API routes
└── package.json           # Project dependencies
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### 1. Install Dependencies

```bash
npm install
```

### 2. Database Setup

1. Create a PostgreSQL database:
```bash
createdb unitygrid
```

2. Create a `.env` file in the project root:
```env
PGUSER=your_postgres_username
PGPASSWORD=your_postgres_password
PGHOST=localhost
PGPORT=5432
PGDATABASE=unitygrid
NODE_ENV=development
```

3. Initialize the database with seed data:
```bash
npm run reset
```

### 3. Run the Application

Start both the frontend and backend servers:
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## API Endpoints

### Events

- `GET /api/events` - Get all events
- `GET /api/events/:eventId` - Get a specific event by ID

## Development Scripts

- `npm run dev` - Start development servers (client + server)
- `npm run build` - Build the client for production
- `npm start` - Start production server
- `npm run reset` - Reset and seed the database

## Recent Fixes

The following issues were resolved:

1. **Import/Export Mismatches**: Fixed inconsistent module imports between service files and components
2. **API Route Configuration**: Corrected server route paths to properly match `/api/events`
3. **Event Component**: Removed undefined `dates` utility and implemented date/time formatting directly
4. **Missing Events Page**: Created the Events page component for viewing all events
5. **API Service Structure**: Standardized API services to use default exports with method objects

## Contributing

This is a CodePath WEB103 project.