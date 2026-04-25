# Technical Documentation

**Assignment 4 — Final Personal Web Application**

------------------------------------------------------------------------

## Overview

This project is the final and complete version of the personal portfolio website built using:

-   HTML5
-   CSS3
-   Vanilla JavaScript
-   GitHub REST API
-   Formspree
-   GitHub Pages

The purpose of this project is to deliver a polished, professional, and fully functional personal portfolio web application that demonstrates front-end development skills, responsive design, API integration, real contact form functionality, accessibility, and production-ready UI/UX quality.

This final version combines all previous assignments and includes major improvements such as Education section, real contact form integration, social links cards, CV download, Back to Top button, and full documentation.

------------------------------------------------------------------------

## Project Structure

    202280860-ReemaAlQahtani-assignment4/
    │
    ├── README.md
    ├── index.html
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── script.js
    ├── assets/
    │   ├── CV.pdf
    │   └── images/
    │       ├── profile-placeholder.png
    │       ├── project-placeholder-1.png
    │       ├── project-placeholder-2.png
    │       ├── project-placeholder-3.png
    │       └── kfupm-logo.png
    ├── docs/
    │   ├── ai-usage-report.md
    │   └── technical-documentation.md
    ├── presentation/
    │   ├── slides.pdf
    │   └── demo.mp4
    └── .gitignore

------------------------------------------------------------------------

## HTML Architecture

The website uses semantic HTML elements for clarity and structure:

-   `<header>` -- Navigation bar
-   `<main>` -- Main content container
-   `<section>` -- About, Education, Skills, Projects, GitHub, Contact
-   `<article>` -- Project cards and repository cards
-   `<form>` -- Real contact form
-   `<footer>` -- Footer
-   `<button>`  -- Theme toggle, Back to Top button, filters, controls

The structure follows accessibility and responsive design best practices.

------------------------------------------------------------------------

## Main Sections

### 1. About Section

Features:

-   Dynamic greeting based on time of day
-   Professional introduction
-   Profile image
-   Call-to-action buttons
-   Download CV button
-   Social links cards

This section creates the first professional impression of the portfolio.

------------------------------------------------------------------------

### 2. Education Section
New section added in Assignment 4.

Features:

-   KFUPM logo
-   University name
-   Software Engineering degree
-   Expected graduation date
-   Academic level

This section strengthens the professional presentation of the portfolio.

------------------------------------------------------------------------

### 3. Skills Section

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

### 4. Projects Section (Major Assignment 3 Feature)

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

### 5. GitHub Section

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
This demonstrates real-world API integration.

------------------------------------------------------------------------

### 6. Contact Section
Assignment 4 upgraded the Contact section using Formspree.

Features:

-   Real contact form submission
-   No backend development required
-   Name field
-   Email field
-   Message textarea
-   Client-side validation
-   Personalized success message
-   Error handling

This makes the website more practical and professional.

------------------------------------------------------------------------

### 7. Contact Section
New feature added for better user experience.

Features:

-   Floating fixed button
-   Appears when user scrolls down
-   Smooth scroll back to top
-   Improved navigation usability

This improves professional quality and user experience.

------------------------------------------------------------------------

## CSS Implementation

### Styling Strategy

The styling system is built using:

-   CSS variables defined in `:root`
-   Light/Dark theme using `[data-theme="light"]`
-   Glassmorphism-inspired UI styling
-   Gradient buttons
-   Professional cards and shadows
-   Responsive layouts using Flexbox and CSS Grid
-   Media queries for mobile and tablet support

The design focuses on consistency, readability, and professional presentation.

### UI Enhancements

Improved visual design includes:

-   Custom dropdown styling
-   Enhanced button hover effects
-   Grid/List view buttons
-   Social cards styling
-   Education section design
-   Modern color palette
-   Floating Back to Top button
-   Consistent spacing and rounded corners

These enhancements improve overall UI/UX quality.

------------------------------------------------------------------------

## JavaScript Features

### 1. Theme Toggle

Features:

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

### 3. Skills System

Features:

-   Dynamic filtering
-   Live search
-   Active filter highlighting
-   Empty state handling
-   Dynamic rendering using template strings

------------------------------------------------------------------------

### 4. Projects System

Feature:

-   Dynamic filtering
-   Sorting
-   View mode switching
-   DOM rendering using template strings
-   State persistence using `localStorage`

This section demonstrates advanced JavaScript state management.

------------------------------------------------------------------------

### 5. GitHub API Integration

Uses:

``` js
fetch()
async / await
```

To retrieve live GitHub repositories and render them dynamically.

This demonstrates API consumption and asynchronous JavaScript.

------------------------------------------------------------------------

### 6. Contact Form Validation

-   Prevents invalid form submission
-   Required field checking
-   Email regex validation
-   Personalized success message
-   Form reset after successful submission
-   Real submission using Formspree

This improves real-world usability.

------------------------------------------------------------------------

### 7. Back to Top Button Logic

Features: 

-   Detects page scroll
-   Shows button dynamically
-   Smooth scroll animation

This improves user navigation.

------------------------------------------------------------------------

## Accessibility Features

-   `aria-expanded` for mobile navigation
-   `aria-live="polite"` for dynamic feedback
-   Proper `<label>` associations
-   Skip link for keyboard users
-   Keyboard accessibility for filters and controls
-   Accessible buttons and forms

Accessibility was considered throughout the project structure.

------------------------------------------------------------------------

## Browser Testing

Tested on:

-   Google Chrome
-   Safari
-   Microsoft Edge

Responsive behavior verified using browser DevTools for:

-   Desktop
-   Tablet
-   Mobile screens

Testing ensured compatibility and smooth user experience.

------------------------------------------------------------------------

## Deployment

The website is deployed using:

*   GitHub Pages

Benefits:

-   Public access through live URL
-   No installation required
-   Easy sharing for presentation and grading

Deployment improves professionalism and final submission quality.

------------------------------------------------------------------------

## Future Improvements

Possible future improvements include:

-   Backend contact form with database storage
-   GitHub repository search feature
-   Advanced animations and transitions
-   Project details modal
-   Admin dashboard for portfolio updates
-   Blog section
-   Better SEO optimization

------------------------------------------------------------------------

## Summary

This project demonstrates:

-   Advanced semantic HTML structure
-   Responsive and modern CSS design
-   Dynamic JavaScript rendering
-   API integration using GitHub REST API
-   Improved accessibility
-   Real contact form fuctionality
-   Professional UI/UX quality
-   Full project documentation
-   Production-ready portfolio structure

The implementation focuses on maintainability, usability, professional UI design,
dynamic functionality, and real-world front-end development practices.
