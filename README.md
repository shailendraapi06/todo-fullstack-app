# Full-Stack To-Do List App

## Project overview
Simple beginner full-stack To-Do list app. Frontend React (Vite) and backend Node + Express + MongoDB Atlas.

## Features
- View all tasks
- Add tasks
- Edit tasks
- Delete tasks
- Toggle status (pending/completed)
- Search tasks by title

## Tech stack
- Node.js, Express
- MongoDB Atlas, Mongoose
- React, Vite, Axios
- dotenv

## Folder structure

```
root/
  backend/
    config/
    controllers/
    middlewares/
    models/
    routes/
    services/
    server.js
    .env.example
    .gitignore
  frontend/
    src/
      components/
      pages/
      services/
      App.jsx
      main.jsx
      index.css
    .env.example
    .gitignore
  .gitignore
  README.md
```

## Backend setup
1. `cd backend`
2. `npm install`
3. copy `.env.example` to `.env`
4. set values:
   - `PORT=5000`
   - `MONGO_URI=mongodb+srv://<username>:<password>@cluster0.vxhj1di.mongodb.net/<dbname>?retryWrites=true&w=majority`
5. run `npm run dev` (or `npm start`)

## Frontend setup
1. `cd frontend`
2. `npm install`
3. copy `.env.example` to `.env`
4. set value:
   - `VITE_API_URL=http://localhost:5000/api`
5. run `npm run dev`
6. open `http://localhost:5173`

## API endpoints
- GET `/api/tasks`
- POST `/api/tasks`
- PUT `/api/tasks/:id`
- DELETE `/api/tasks/:id`
- PATCH `/api/tasks/:id/status`
- GET `/api/tasks/search?query=`

## Deployment
### Backend
- Deploy on Render/Heroku/Railway using Node.js
- Set env: `PORT`, `MONGO_URI`

### Frontend
- Deploy on Netlify/Vercel
- `npm run build`
- Publish `dist`
- Add env `VITE_API_URL` to deployed frontend, matching backend URL.

## Challenges faced
- setting up MongoDB Atlas auth
- CORS in backend
- syncing search + API calls
- making simple student-friendly code

## Good practices
- `.gitignore` includes `node_modules` and `.env`
- do not push secret keys
- keep code simple and clear
3. create `.env` from `.env.example`
   - `VITE_API_URL=http://localhost:5000/api`
4. Run
   - `npm run dev`

## Environment variables

- backend `.env`
  - `MONGODB_URI` (mongodb connection string)
  - `PORT` (e.g., 5000)
- frontend `.env`
  - `VITE_API_URL` (e.g., `http://localhost:5000/api`)

## API endpoints

- GET `/api/tasks` - list all tasks
- POST `/api/tasks` - create task
- PUT `/api/tasks/:id` - update task
- DELETE `/api/tasks/:id` - delete task
- PATCH `/api/tasks/:id/status` - update status
- GET `/api/tasks/search?query=` - find tasks by title

Task body example for POST/PUT

```json
{
  "title": "Buy milk",
  "description": "1 liter"
}
```

Status patch example

```json
{
  "status": "completed"
}
```

## Deployment steps

- Backend: prepare with `npm start`; on Render use `server.js` entry and add `env` values.
- Frontend: build with `npm run build`; deploy to Netlify using build command `npm run build` and publish `dist`.

## Challenges faced

- Keeping structure simple and putting files in right folders.
- Basic error handling and data validation was easy but required care to avoid crash.
- Connecting frontend and backend must use `VITE_API_URL` and CORS.

## Notes

- This code is intentionally simple and student-style (no advanced architecture).  
- That means basic folder layout, minimal helpers, and readable loops.
