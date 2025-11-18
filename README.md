# Habit Tracker

A full-stack web application to help you build and track daily habits. Create habits, mark them as done each day, and watch your streak grow.

## Features

- **Create Habits**: Add new habits with name, category, and priority level.
- **Daily Check-in**: Mark habits as completed each day.
- **Streak Tracking**: See how many consecutive days you've completed each habit.
- **Habit Management**: Delete habits and their associated check-ins.
- **Responsive Design**: Works on desktop and mobile (Tailwind CSS).

## Project Structure

```
HabitTracker/
├── Backend/              # Node.js + Express + MongoDB
│   ├── config/
│   │   └── db.js        # MongoDB connection
│   ├── controllers/      # Request handlers
# Habit Tracker

A small, full-stack habit tracking application (React + Vite frontend, Node/Express + MongoDB backend). This README has been updated to reflect the project's current files, features, and the exact commands to run the app locally.

## What this project implements

- Create / list / delete habits (with goal configuration)
- Daily check-ins and streak tracking (stored on Habit documents)
- Simple reminders (persisted in the DB; scheduler exists under `Backend/scripts`)
- Challenges (create and join; leaderboard is currently a placeholder)
- Basic UI built with React (components live under `frontend/src/components`)

## Quick start (run locally)

Prereqs: Node.js (16+), npm, and a MongoDB instance (local or Atlas)

1) Backend

```powershell
cd Backend
npm install
# copy the example env and edit the values (do not commit your real .env)
copy .env.example .env
# Fill MONGO_URI in Backend/.env, then start the server
npm run dev
```

The backend runs on http://localhost:5000 and exposes API routes under `/api/`.

2) Frontend

```powershell
cd frontend
npm install
# optionally set VITE_API_URL (defaults to http://localhost:5000/api)
npm run dev -- --host 0.0.0.0 --port 5173
```

Open the UI at http://localhost:5173

3) One-line helper (PowerShell)

From repo root you can run the provided script which launches both servers in background jobs:

```powershell
.\start-dev.ps1
```

## Important files and where to look

- Backend entry: `Backend/server.js`
- DB connection: `Backend/config/db.js`
- Models: `Backend/models/*` (Habit, Checkin, Reminder, Challenge, User)
- API routes and controllers: `Backend/routes/*`, `Backend/controllers/*`
- Frontend entry: `frontend/src/main.jsx` and `frontend/index.html`
- Frontend API client: `frontend/src/api.js`
- UI components: `frontend/src/components/` (e.g. `HabitCard.jsx`, `RemindersPage.jsx`, `ChallengesPage.jsx`)

## Environment

- `Backend/.env.example` is included as a template. Copy to `Backend/.env` and set `MONGO_URI` and `FRONTEND_URL`.
- For the frontend, `VITE_API_URL` can be set in your environment; otherwise the client defaults to `http://localhost:5000/api`.

## Notes about features & limitations

- Streaks: checkins are stored in `Checkin` documents and the backend updates `Habit.currentStreak`, `Habit.lastCheckinAt`, and `Habit.longestStreak` when adding a checkin.
- Reminders: the DB model and API endpoints are implemented and the frontend shows reminders; there is a scheduler script in `Backend/scripts/reminderScheduler.js` to run jobs (not automatically running in dev).
- Challenges: you can create and join challenges; the leaderboard logic is a simple placeholder — it needs expansion to tie user habits to challenge participation.

## Tests, linting and audit

- `frontend` contains ESLint config and a `lint` script (`npm run lint`).
- After installing dependencies I ran `npm audit fix` in the frontend; please run `npm audit` periodically and address vulnerabilities.

## Pushing changes

- I updated the repo with local fixes and created a branch named `push-to-jyothi` which was pushed to your repository's `main` branch (remote `jyothi`).

## Recommended cleanup (optional)

- The repository should not track `node_modules` or build artifacts. Consider adding `frontend/node_modules/` and other build/dist folders to `.gitignore` and removing them from the index:

```powershell
# from repo root
echo "frontend/node_modules/" >> .gitignore
git rm -r --cached frontend/node_modules
git commit -m "chore: remove tracked frontend node_modules"
git push
```

If you'd like, I can perform this cleanup and push a smaller PR.

## Next steps I can take for you

- Clean up tracked node_modules and push a smaller commit (recommended)
- Improve challenge leaderboard to count per-user checkins correctly
- Wire the reminder scheduler to run in dev and print scheduled sends
- Add input validation for API endpoints

If you want any of the above, tell me which and I'll implement it and push the changes.

---

Happy habit tracking! 🎯

