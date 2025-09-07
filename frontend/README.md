<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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
>>>>>>> 8822a47b167a293800c4a597baa3b8e2bf0f1fdd
