<div align="center">

<img src="public/assets/ArenaX2.png" alt="ArenaX Logo" width="100" />

# ArenaX

### Bangladesh's Premier Sports Facility Booking Platform

**Book football turfs, badminton courts, swimming lanes, and more — in seconds.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-arenax--client.vercel.app-00E5A0?style=for-the-badge&logo=vercel&logoColor=black)](https://arenax-client.vercel.app)

</div>

---

## 🏟️ Purpose

ArenaX is a full-stack sports facility booking management system built with the MERN stack and Better Auth authentication. The platform allows users to explore available sports venues across Bangladesh — football turfs, badminton courts, swimming lanes, tennis courts, and more — and make real-time bookings for specific dates and time slots. Facility owners can list, manage, and update their venues directly from the platform.

---

## 🛠️ Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Authentication:** Better Auth &nbsp;|&nbsp; **Icons:** Phosphor Icons &nbsp;|&nbsp; **UI:** HeroUI

</div>

---

## ✨ Features

### 👤 User Features
- 🔍 **Browse Facilities** — Explore all listed sports venues without logging in
- 🔎 **Search & Filter** — Filter by sport type or search by name using MongoDB `$regex` and `$in` operators
- 📅 **Book a Facility** — Select a date, time slot, and number of hours to make a booking
- 📋 **My Bookings** — View all personal bookings with status indicators (Pending / Confirmed / Cancelled)
- ❌ **Cancel Booking** — Cancel any active booking with a confirmation prompt
- 🌗 **Theme Toggle** — Switch between dark and light mode seamlessly

### 🏢 Facility Owner Features
- ➕ **Add Facility** — List a new sports venue with full details, images, and available time slots
- ✏️ **Update Facility** — Edit facility information at any time
- 🗑️ **Delete Facility** — Remove a facility with a confirmation modal
- 📊 **Manage My Facilities** — View all personally owned venues in one dashboard

### 🔐 Authentication
- Email & password login with validation (6+ chars, uppercase, lowercase)
- Google OAuth login
- HTTPOnly cookie-based JWT sessions via Better Auth
- Protected private routes — no redirect to login on page reload

---

## 📦 NPM Packages Used

| Package | Purpose |
|---|---|
| `next` | React framework with App Router |
| `react` / `react-dom` | UI library |
| `better-auth` | Authentication (email + Google OAuth) |
| `@better-auth/mongo-adapter` | MongoDB adapter for Better Auth |
| `mongodb` | MongoDB driver for database operations |
| `motion` / `framer-motion` | Page transitions and animations |
| `next-themes` | Dark / light theme toggle |
| `@heroui/react` | UI component library |
| `@heroui/select` | Select dropdown component |
| `@phosphor-icons/react` | Icon library |
| `react-hot-toast` | Toast notifications |
| `embla-carousel-react` | Carousel / slider component |
| `embla-carousel-autoplay` | Autoplay plugin for Embla carousel |
| `react-paginate` | Pagination component |
| `use-debounce` | Debounce hook for search input |
| `tailwindcss` | Utility-first CSS framework |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) v18 or higher
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- npm or yarn

---

### 🖥️ Running the Client (Frontend)

```bash
# 1. Clone the repository
git clone https://github.com/rzoshin/arenax-client.git
cd arenax-client

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env.local
```

Fill in your `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGODB_URI=your_mongodb_connection_string
```

```bash
# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### ⚙️ Running the Server (Backend)

```bash
# 1. Clone the server repository
git clone https://github.com/rzoshin/arenax-server.git
cd arenax-server

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env
```

Fill in your `.env`:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
```

```bash
# 4. Start the server
npm run dev
```

The API will be available at [http://localhost:8000](http://localhost:8000).

---

## 📁 Project Structure

```
arenax-client/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── facilities/
│   │   └── [id]/
│   ├── bookings/
│   ├── add-facility/
│   ├── manage-facility/
│   ├── not-found.jsx
│   ├── layout.jsx
│   └── page.jsx
├── components/
│   ├── shared/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── bookings/
│   │   └── BookingCard.jsx
│   └── Providers.jsx
├── lib/
│   └── auth-client.js
└── public/
    └── assets/
```

---

## 🌐 Live URL

🔗 **[https://arenax-client.vercel.app](https://arenax-client.vercel.app)**

---

<div align="center">

Made with ❤️ by **Oshin** &nbsp;·&nbsp; [GitHub](https://github.com/rzoshin) &nbsp;·&nbsp; [LinkedIn](https://linkedin.com/in/rzoshin)

</div>