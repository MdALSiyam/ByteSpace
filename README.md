# ByteSpace

ByteSpace is a responsive front-end concept for an online learning platform. Learners can explore a course catalog, browse learning categories, view course details, and discover creators. The interface is based on the supplied ByteSpace design references and includes a complete landing page plus sign-in and sign-up screens.

> **Project status:** This is a front-end prototype. Course data is currently static, and account forms, enrollment, payments, and data persistence are not connected to a backend.

## Live Demo

[Open ByteSpace](https://byte-space-sandy-gamma.vercel.app/)

## Features

- **Landing page:** Hero and course search UI, course discovery, learning paths, creator information, testimonials, and footer.
- **Course catalog:** Browse sample courses with creator, rating, lesson count, duration, and price information.
- **Course details:** Select a course card to view its preview and course information.
- **Category browsing:** Explore the available topic categories and learning paths.
- **Creator views:** Review creator-focused content and platform benefits.
- **Authentication screens:** Switch between sign-in and sign-up form layouts.
- **Responsive presentation:** Layouts adapt to desktop and smaller screen sizes.

## Technology Stack

- **React 19** for the component-based interface and client-side state.
- **Vite 8** for local development and production builds.
- **Tailwind CSS 3** for responsive utility-based styling.
- **Lucide React** for interface icons.
- **JavaScript (ES modules)** for application code.

## Getting Started

### Requirements

- Node.js (compatible with the installed Vite version)
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite prints the local URL after the server starts.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run lint` | Run ESLint across the project. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |

## Project Structure

```text
src/
  components/   Shared navigation and footer components
  pages/        Authentication and page components
  assets/       Static visual assets
  App.jsx       Main app shell and landing-page views
  index.css     Tailwind CSS entry point
```

## Current Prototype Limitations

- Course listings and creator/testimonial content are sample data stored in the front end.
- The search field and category controls provide interface interactions only; there is no search API or server-side filtering.
- Sign-in and sign-up forms do not authenticate users or store account information.
- Enrollment, checkout, and payment flows are visual placeholders.
- The project does not currently include a backend or database.

## Validation

Before submitting changes, run:

```bash
npm run lint
npm run build
```