# StaySync Backend

StaySync is an event planning and RSVP web application. This repository contains the backend API built with Node.js, Express, MongoDB, and JWT authentication.

## Features

- User registration and login
- JWT-based authentication for protected routes
- Create, read, update, and delete events
- RSVP toggle for events
- View organizer-owned events
- View events a user has RSVPed to

## Tech Stack

- Node.js
- Express
- MongoDB / Mongoose
- JSON Web Tokens (JWT)
- bcryptjs for password hashing
- dotenv for environment management
- cors for cross-origin requests

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- MongoDB running locally or accessible via URI

## Installation

1. Open a terminal and change into the backend folder:

   ```bash
   cd StaySync-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create or update `.env` with your values:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/staysync
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:

   - Production mode:
     ```bash
     npm start
     ```

   - Development mode with live reload:
     ```bash
     npm run dev
     ```

5. The API will be available at:

   ```
   http://localhost:3000
   ```

## Available Scripts

- `npm start` - Run the backend with Node
- `npm run dev` - Run the backend with nodemon for development

## Environment Variables

The backend expects these variables in `.env`:

- `PORT` - Port number for the API server
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret used to sign JWT tokens

## API Endpoints

### Authentication

#### Register a new user

- URL: `POST /api/auth/register`
- Body:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- Response: `201 Created`
- Returns user object and JWT token

#### Login

- URL: `POST /api/auth/login`
- Body:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- Response: `200 OK`
- Returns user object and JWT token

#### Get current user

- URL: `GET /api/auth/me`
- Headers:
  - `Authorization: Bearer <token>`
- Response: `200 OK`
- Returns logged-in user details

### Events

#### Get all events

- URL: `GET /api/events`
- Response: `200 OK`
- Returns a list of events

#### Get event by ID

- URL: `GET /api/events/:id`
- Response: `200 OK`
- Returns a single event by its ID

#### Create event

- URL: `POST /api/events`
- Headers:
  - `Authorization: Bearer <token>`
- Body:
  ```json
  {
    "title": "Board Game Night",
    "description": "An evening of board games.",
    "location": "123 Main Street",
    "date": "2026-05-15T18:00:00.000Z"
  }
  ```
- Response: `200 OK`
- Creates a new event with the authenticated user as the organizer

#### Update event

- URL: `PUT /api/events/:id`
- Headers:
  - `Authorization: Bearer <token>`
- Body: partial or full event payload
- Response: `200 OK`
- Updates the specified event

#### Delete event

- URL: `DELETE /api/events/:id`
- Headers:
  - `Authorization: Bearer <token>`
- Response: `200 OK`
- Deletes the specified event

#### Toggle RSVP

- URL: `POST /api/events/:id/rsvp`
- Headers:
  - `Authorization: Bearer <token>`
- Response: `200 OK`
- Adds or removes the authenticated user's RSVP for the event

#### Get my events

- URL: `GET /api/events/my-events`
- Headers:
  - `Authorization: Bearer <token>`
- Response: `200 OK`
- Returns events organized by the authenticated user

#### Get my RSVPs

- URL: `GET /api/events/my-rsvps`
- Headers:
  - `Authorization: Bearer <token>`
- Response: `200 OK`
- Returns events where the authenticated user has RSVPed

## Project Structure

```
StaySync-backend/
├── src/
│   ├── config/db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── eventController.js
│   ├── middlewares/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── Event.js
│   │   └── User.js
│   ├── repositories/
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── eventRoutes.js
│   ├── services/
│   └── utils/
│   └── server.js
├── .env
├── package.json
└── README.md
```

## Notes

- Passwords are hashed using `bcryptjs` before they are stored.
- Protected routes use JWT tokens sent in the `Authorization` header.
- The API returns JSON error responses for invalid requests and authorization issues.

## License

This project is provided as-is.
