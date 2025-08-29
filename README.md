> **Note:** I originally planned to use MongoDB for persistent storage, but I ran out of free uses on my account. For this project, I implemented in-memory storage in the backend instead. This means tasks are not saved after the server restarts.
# Web Task Manager

A full-stack web app for managing tasks. Built with React (frontend) and Node.js + Express (backend).

## Project Structure
- `/frontend` - React app
- `/backend` - Node.js + Express API

## Setup Instructions

### Backend
1. Open a terminal and navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
   The backend runs on [http://localhost:5000](http://localhost:5000) and uses in-memory storage (no database required).

### Frontend
1. Open a new terminal and navigate to the `frontend` folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```
   The frontend runs on [http://localhost:3000](http://localhost:3000).

## Tech Stack
- React (functional components, hooks)
- Node.js + Express (REST API)
- In-memory storage (no database required)

## Features
- Add, view, complete/incomplete, and delete tasks
- Filter tasks: All, Completed, Incomplete
- Responsive, modern UI
- Error handling and loading states

## Known Issues
- Tasks are not persisted if the backend server restarts (in-memory only)
- No user authentication

## Extra Features
- Professional, clean UI design
- Task filters
- Error and loading state feedback

---

Interns: Push your complete project to GitHub and submit the repo link.
- React (frontend)
- Node.js + Express (backend)
- MongoDB (database)

## Features
- Add, view, toggle, and delete tasks
- RESTful API
- Bonus: Filters, due dates, priorities

## Notes
- For MongoDB, you can use a local instance or MongoDB Atlas.
- If you use in-memory storage, tasks will reset on server restart.

## Known Issues
- None yet

---

Interns: Push your complete project to GitHub and submit the repo link.
