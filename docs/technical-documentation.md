# Technical Documentation

**Assignment 3 -- Advanced Portfolio Features & API Integration**

------------------------------------------------------------------------

## Overview

This project is an advanced version of the personal portfolio website
built using:

-   HTML5
-   CSS3
-   Vanilla JavaScript
-   GitHub REST API

The purpose of the project is to demonstrate advanced front-end
development skills including dynamic rendering, API integration,
responsive UI design, accessibility, and structured project
organization.

The final version includes project filtering and sorting, GitHub API
integration, improved dropdown UI, view toggles, and enhanced user
interaction.

------------------------------------------------------------------------

## Project Structure

    assignment-3/
    │
    ├── README.md
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── script.js
    ├── assets/
    │   └── images/
    │       ├── profile-placeholder.png
    │       ├── project-placeholder-1.png
    │       ├── project-placeholder-2.png
    │       └── project-placeholder-3.png
    ├── docs/
    │   ├── ai-usage-report.md
    │   └── technical-documentation.md
    └── .gitignore

------------------------------------------------------------------------

## HTML Architecture

The website uses semantic HTML elements for clarity and structure:

-   `<header>` -- Navigation bar
-   `<main>` -- Main content container
-   `<section>` -- About, Skills, Projects, GitHub, Contact
-   `<article>` -- Project cards and repository cards
-   `<form>` -- Contact form
-   `<footer>` -- Footer

------------------------------------------------------------------------

## Main Sections

### 1. About Section

-   Dynamic greeting based on time of day
-   Professional introduction
-   Profile image
-   Call-to-action buttons

------------------------------------------------------------------------

### 2. Skills Section

Enhanced dynamic skills section with:

-   Category filtering (All, Frontend, Backend, Tools)
-   Live search input
-   JavaScript-based rendering
-   Active state highlighting
-   Keyboard accessibility support
-   Dynamic feedback messages

Skills are stored in a JavaScript array:

``` js
const SKILLS = [
  { name: "HTML", level: "Good", category: "frontend" }
];
```

------------------------------------------------------------------------

### 3. Projects Section (Major Assignment 3 Feature)

A fully dynamic Projects section was implemented.

Features:

-   Category filtering (All, Web, Database, AI)
-   Sorting options:
    -   Newest First
    -   Oldest First
    -   Name A-Z
    -   Name Z-A
-   Grid / List view toggle
-   LocalStorage persistence for user preferences
-   Dynamic rendering using JavaScript

Projects are stored in a structured JavaScript array:

``` js
const PROJECTS = [
  {
    title: "Pantrix",
    category: "web",
    date: "2026-02-01"
  }
];
```

------------------------------------------------------------------------

### 4. GitHub Section (New Feature)

GitHub public repositories are loaded dynamically using GitHub API.

Features:

-   Fetch latest repositories using Fetch API
-   Display:
    -   Repository name
    -   Description
    -   Language
    -   Stars
    -   Repository link
-   Loading status message
-   Error handling for failed requests

Example endpoint:

``` js
https://api.github.com/users/ReemaAlqahtani1/repos
```

------------------------------------------------------------------------

### 5. Contact Section

-   Name field
-   Email field
-   Message textarea
-   Submit button
-   Dynamic status feedback message
-   Frontend validation only

------------------------------------------------------------------------

## CSS Implementation

### Styling Strategy

-   CSS variables defined in `:root`
-   Light/Dark theme using `[data-theme="light"]`
-   Modern dropdown styling for project filters
-   Gradient buttons and polished UI controls
-   Flexbox for layout alignment
-   CSS Grid for projects and GitHub cards
-   Media queries for responsiveness

### UI Enhancements

Improved visual design includes:

-   Custom dropdown styling
-   Enhanced button hover effects
-   Grid/List view buttons
-   Modern color palette
-   Consistent card shadows and rounded corners

------------------------------------------------------------------------

## JavaScript Features

### 1. Theme Toggle

-   Switches between light and dark mode
-   Stores preference in `localStorage`
-   Restores theme on reload

------------------------------------------------------------------------

### 2. Dynamic Greeting

Displays:

-   Good morning
-   Good afternoon
-   Good evening

Based on current system time.

------------------------------------------------------------------------

### 3. Projects System

-   Dynamic filtering
-   Sorting
-   View mode switching
-   DOM rendering using template strings
-   State persistence using `localStorage`

------------------------------------------------------------------------

### 4. GitHub API Integration

Uses:

``` js
fetch()
async / await
```

To retrieve live GitHub repositories and render them dynamically.

------------------------------------------------------------------------

### 5. Contact Form Validation

-   Prevents default form submission
-   Required field checking
-   Email regex validation
-   Success / error feedback
-   Form reset on success

------------------------------------------------------------------------

## Accessibility Features

-   `aria-expanded` for mobile navigation
-   `aria-live="polite"` for dynamic feedback
-   Proper `<label>` associations
-   Skip link for keyboard users
-   Keyboard accessibility for filters and controls

------------------------------------------------------------------------

## Browser Testing

Tested on:

-   Google Chrome
-   Safari
-   Microsoft Edge

Responsive behavior verified using browser DevTools.

------------------------------------------------------------------------

## Future Improvements

-   Backend integration for contact form
-   GitHub repository search feature
-   More advanced animations
-   Project details modal
-   Deployment using GitHub Pages

------------------------------------------------------------------------

## Summary

This project demonstrates:

-   Advanced semantic HTML structure
-   Responsive and modern CSS design
-   Dynamic JavaScript rendering
-   API integration using GitHub REST API
-   Improved accessibility
-   Structured documentation

The implementation focuses on maintainability, professional UI design,
dynamic functionality, and real-world front-end development practices.
