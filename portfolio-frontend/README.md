# Portfolio Frontend

This folder contains the frontend application for my personal developer portfolio.

The frontend is built as a **single-page application (SPA)** focused on clarity, performance, and user experience.
Its main purpose is to present selected projects, technical information, and a contact interface in a clean and accessible way.

---

## Tech Stack

- React
- Vite
- Modern CSS (Grid & Flexbox)
- Responsive layout with mobile-first styles
- Accessible markup
- Minimal animations focused on usability

No UI frameworks or CSS libraries are used in order to clearly demonstrate layout and styling fundamentals.

---

## Structure Overview

```
src/
├─ components/   # Reusable UI components
├─ pages/        # Main sections/pages
├─ data/         # Static data (projects, content)
├─ styles/       # Global styles and variables
├─ layout/       # Global layout for each page 
├─ App.jsx
└─ main.jsx
```

The application is structured to keep concerns separated and improve maintainability.

---

## Navigation

- Section-based navigation for the main content
- Client-side routing used only where it adds value
- Designed to scale if more pages are added in the future

---

## Backend Integration

The frontend consumes data from a custom backend API to display projects and handle the contact flow.

This separation allows:

- Independent development
- Easier future scaling
- Clear frontend/backend responsibilities

---

## Running the Project Locally

```bash
npm install
npm run dev
```

---

## Purpose
This frontend is not meant to be a visual experiment, but a realistic portfolio application that reflects how I approach structure, styling, and user-focused development.