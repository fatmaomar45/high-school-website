# Lamu Girls High School Website

A school website built with Next.js, React, and Tailwind CSS for Lamu Girls High School — a Cluster 1 National Boarding School located in Lamu West, Lamu County, Kenya.

## Overview

Lamu Girls High School is an academic beacon in the region, serving over 570 students. The school is committed to providing quality education that nurtures academic excellence, leadership, integrity, and lifelong learning, preparing students to become responsible citizens capable of making meaningful contributions to society.

- **Motto:** Strive to Excel
- **Location:** Lamu West, Lamu County, Kenya
- **Type:** Cluster 1 National Boarding School
- **Enrollment:** 570+ students

## Pages

- **Home** — Hero section, About Us preview, Core Values (Mission, Vision, Motto), Academics preview (Sciences, Humanities, Technical, Languages), Student Life, and a Call-to-Action.
- **About Us** — School history, leadership (Principal & Board of Management Chair), Mission, Vision & Motto, and the School Crest.
- **Admissions** — Admission requirements, the 4-step application process, important dates, and a CTA to apply.
- **Apply (/apply)** — Full online application form with Student Information, Academic Information, and Parent/Guardian Information sections, plus subject selection and a declaration checkbox. Shows a success screen on submission.
- **Events** — Upcoming events calendar, Sports & Clubs activities, and a Campus Life gallery preview.
- **Contact Us** — Contact information (email, GitHub) and a reactive client-side message form that opens a pre-filled `mailto:` link.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

| Script     | Description              |
| ---------- | ------------------------ |
| `npm run dev`  | Start the development server (Turbopack) |
| `npm run build` | Build the production bundle |
| `npm run start` | Start the production server |
| `npm run lint`  | Run ESLint                |

## Tech Stack

- **Next.js** 16 (App Router, Turbopack)
- **React** 19
- **Tailwind CSS** v4 (via `@tailwindcss/postcss`)
- **CSS Modules** for component styling
- **Geist** font (Google Fonts, sans + mono variants)
- **ESLint** 9 with `eslint-config-next` core-web-vitals rules

## Design System

The visual identity is built around an emerald-green + gold palette inspired by the school crest:

- **Primary** — Emerald Green (`#059669` / `#047857`)
- **Accent** — Gold (`#f59e0b`)
- **Dark** — Forest Green (`#064e3b` / `#022c22`)
- **Surface / Text / Borders** — Clean neutrals with soft shadows

Global utilities include scroll-reveal animations, staggered child transitions, a count-up keyframe, floating/pulse animations, gradient-text clipping, a glass effect, and a dotted decorative pattern.

## Project Structure

```
app/
  components/       — Shared components (Nav, HeroSection, ScrollReveal)
  contacts/         — Contact Us page + message form
  events/           — Events page
  about/            — About Us page
  admission/        — Admissions page
  apply/            — Online application form
  page.js           — Home page
  layout.js         — Root layout with navigation + footer
  globals.css       — Global styles and Tailwind theme
  not-found.js / loading.js — 404 and loading UI
public/
  images/           — Campus, crest, student, and team photos
  team/             — Principal & BOM chair portraits
next.config.mjs     — Turbopack root config
postcss.config.mjs  — Tailwind postcss plugin
eslint.config.mjs   — ESLint configuration
jsconfig.json       — Path alias @/* → ./*
```

## Deployment

Deploy on [Vercel](https://vercel.com) for the easiest Next.js hosting experience.

## Contact

- **Email:** [fatmaomarmoh@gmail.com](mailto:fatmaomarmoh@gmail.com)
- **GitHub:** [github.com/fatmaomar45](https://github.com/fatmaomar45)