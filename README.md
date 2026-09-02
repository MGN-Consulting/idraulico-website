# L'Idraulico di Bozzi Antonio

> A modern, mobile-friendly website for a plumbing and HVAC business in Modena, Italy — with online booking, contact forms, and a polished customer experience.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue?style=flat-square)](LICENSE)

---

## What is this project?

This is the official website for **L'Idraulico di Bozzi Antonio**, a plumbing and heating specialist serving Modena and the surrounding area. Visitors can:

- Browse services (plumbing, heating systems, air conditioning, fire safety, and more)
- View a photo gallery of past work
- Request a callback or book an appointment through an online form
- Get in touch quickly via phone or email

If you are new to web development, think of this project as a **single-page marketing site** with a **contact form** and optional **database storage** for appointments. It is built with popular, well-documented tools that many companies use in production.

---

## Tech stack (in plain English)

| Technology | What it does |
|------------|--------------|
| **[Next.js](https://nextjs.org/)** | The main framework. It handles pages, routing, and server-side API routes. |
| **[React](https://react.dev/)** | Builds the interactive user interface (buttons, forms, sections). |
| **[TypeScript](https://www.typescriptlang.org/)** | JavaScript with types — catches mistakes earlier and makes the code easier to read. |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first CSS for styling without writing large custom stylesheets. |
| **[Prisma](https://www.prisma.io/)** | Talks to the database using clear, typed models instead of raw queries. |
| **[MongoDB](https://www.mongodb.com/)** | Stores appointment bookings (name, date, time slot, etc.). |
| **[Nodemailer](https://nodemailer.com/)** | Sends email notifications when someone submits the contact form. |
| **[Vercel Analytics](https://vercel.com/analytics)** | Lightweight traffic and performance insights when deployed on Vercel. |

---

## Prerequisites

Before you start, make sure you have the following installed on your computer:

1. **[Node.js](https://nodejs.org/)** (version 20 or newer recommended) — runs JavaScript outside the browser
2. **[npm](https://www.npmjs.com/)** — comes with Node.js; used to install packages
3. **A MongoDB database** — free tier on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) works well for development
4. **An SMTP email account** (optional but needed for the contact form) — e.g. Gmail with an app password, or any mail provider

> **New to the terminal?** Open your terminal (Terminal on Mac, PowerShell or CMD on Windows), `cd` into the project folder, and run the commands below one at a time.

---

## Getting started

### 1. Clone and install dependencies

```bash
git clone <your-repo-url>
cd bozzi-website
npm install
```

`npm install` reads `package.json` and downloads all libraries the project needs into `node_modules/`.

### 2. Set up environment variables

Create a file named `.env` in the project root (same folder as `package.json`). This file holds secrets and is **never** committed to git.

```env
# Database (required for /api/appointments)
DATABASE_URL="mongodb+srv://USER:PASSWORD@cluster.mongodb.net/bozzi?retryWrites=true&w=majority"

# Email (required for /api/contact)
EMAIL_HOST="smtp.example.com"
EMAIL_PORT="587"
EMAIL_USER="your-email@example.com"
EMAIL_PASS="your-app-password"
CONTACT_ADDRESS="info@example.com"

# Google Calendar (optional — integration is prepared but commented out in code)
# GOOGLE_CLIENT_EMAIL=""
# GOOGLE_PRIVATE_KEY=""
# GOOGLE_CALENDAR_ID=""
```

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | Connection string for MongoDB |
| `EMAIL_HOST` / `EMAIL_PORT` | SMTP server for outgoing mail |
| `EMAIL_USER` / `EMAIL_PASS` | Credentials for the mail account |
| `CONTACT_ADDRESS` | Where contact form submissions are delivered |

### 3. Prepare the database

Prisma needs to generate a client and sync the schema with MongoDB:

```bash
npx prisma generate
npx prisma db push
```

- `prisma generate` — creates TypeScript types and a database client from `prisma/schema.prisma`
- `prisma db push` — applies the `Appointment` model to your MongoDB database

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page reloads automatically when you save a file.

To stop the server, press `Ctrl + C` in the terminal.

---

## Project structure

A quick map of the most important folders and files:

```
bozzi-website/
├── prisma/
│   └── schema.prisma          # Database model (Appointment)
├── public/
│   ├── pics/                  # Service and gallery images
│   └── icons/                 # Favicons and PWA manifest
├── src/
│   ├── app/
│   │   ├── page.tsx           # Main landing page (hero, services, gallery)
│   │   ├── layout.tsx         # HTML shell, metadata, global layout
│   │   ├── globals.css        # Global styles and Tailwind imports
│   │   └── api/
│   │       ├── contact/       # POST — sends email via Nodemailer
│   │       └── appointments/  # POST — saves booking to MongoDB
│   ├── components/
│   │   ├── BookingForm.tsx    # Appointment / contact form
│   │   ├── Footer.tsx
│   │   ├── TrustWall.tsx      # Trust badges and social proof
│   │   └── PipeSystem.tsx     # Decorative animated pipes
│   └── lib/
│       ├── email.ts           # Email sending helper
│       └── prisma.ts          # Shared Prisma client instance
├── package.json               # Dependencies and npm scripts
└── next.config.ts             # Next.js configuration
```

**How a form submission works (beginner-friendly flow):**

```
User fills BookingForm  →  fetch('/api/contact')  →  sendContactEmail()  →  inbox
                      or
                      →  fetch('/api/appointments')  →  prisma.appointment.create()  →  MongoDB
```

The booking form currently posts to `/api/contact` (email). The `/api/appointments` route is ready if you want to persist bookings in the database instead.

---

## Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build locally (run `build` first) |
| `npm run lint` | Check code style and common issues with ESLint |

---

## Deployment

The simplest path is **[Vercel](https://vercel.com/)** (made by the Next.js team):

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import the repository on Vercel
3. Add the same environment variables from your `.env` file in the Vercel project settings
4. Deploy

For other hosts, see the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Customization tips

- **Copy and images** — Edit text and image paths in `src/app/page.tsx`
- **SEO title and description** — Update `metadata` in `src/app/layout.tsx`
- **Form fields** — Adjust `BookingForm.tsx` and the matching API route
- **Styling** — Tailwind classes live directly in components; global tokens are in `globals.css`

---

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn) — interactive tutorial
- [Prisma with MongoDB](https://www.prisma.io/docs/orm/overview/databases/mongodb)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## License

Copyright 2026 MGN Consulting

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
