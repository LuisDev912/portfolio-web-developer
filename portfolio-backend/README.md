# Backend – Portfolio API

Backend REST API built with **Node.js** and **Express**, following the **MVC architecture pattern**.

## Tech Stack
- Node.js
- Express
- JavaScript (ES Modules)
- REST API
- Environment variables

## Project Structure

```
src/
├─ app.js # Express configuration
├─ server.js # Entry point
├─ routes/ # API routes
├─ controllers/ # Request handling logic
├─ services/ # Business logic
├─ middlewares/ # Custom middlewares
└─ config/ # App configuration
```


## Available Endpoints
- `GET /api/health` → Health check endpoint

## Setup
```bash
npm install
npm run dev
cd src
node index.js