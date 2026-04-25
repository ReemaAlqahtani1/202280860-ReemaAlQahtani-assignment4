# 202280860-ReemaAlQahtani-assignment4# Personal Portfolio Website

**Assignment 3 --- Advanced Portfolio Features & API Integration**

------------------------------------------------------------------------

## Project Description

This project represents the **third phase** of my personal portfolio
website.
It builds on the previous assignments by adding **advanced project
management features, GitHub API integration, improved filtering systems,
and enhanced UI/UX design**.

The website is developed using **HTML, CSS, and JavaScript** and
demonstrates responsive front-end development, dynamic rendering, API
consumption, and modern interactive design.

The website contains five main sections:

-   **About Me** - Personal introduction with dynamic time-based
    greeting
-   **Skills** - Searchable and filterable skills section
-   **Projects** - Dynamic projects section with filtering, sorting,
    and view modes
-   **GitHub Repositories** - Live GitHub API integration for public
    repositories
-   **Contact** - Interactive frontend form with validation

Assignment 3 focuses on improving **dynamic functionality, API
integration, advanced UI controls, and professional user experience**.

------------------------------------------------------------------------

## Technologies Used

-   **HTML5** (Semantic structure & accessibility)

-   **CSS3**

    -   Flexbox
    -   CSS Grid
    -   Media Queries
    -   CSS Variables
    -   Advanced UI Styling
    -   Custom Dropdown Design

-   **Vanilla JavaScript**

    -   DOM Manipulation
    -   Event Handling
    -   LocalStorage API
    -   Dynamic Content Rendering
    -   Fetch API
    -   Async/Await

-   **GitHub REST API**

-   **ARIA attributes** for accessibility

------------------------------------------------------------------------

## Key Features

-   Fully responsive layout (Desktop, Tablet, Mobile)
-   Light/Dark theme toggle stored in `LocalStorage`
-   Time-based dynamic greeting
-   Mobile navigation menu with accessibility support
-   Searchable and filterable Skills section
-   Dynamic Projects section with:
    -   Category filtering
    -   Sorting options
    -   Grid/List view toggle
-   GitHub API integration to load latest public repositories
-   Client-side contact form validation
-   Enhanced button design and modern dropdown styling
-   Accessibility improvements (ARIA attributes and keyboard navigation)

------------------------------------------------------------------------

## Projects Section (Assignment 3 Feature)

A dynamic Projects section was implemented as a major advanced feature.

### Features include:

-   Category filtering (All, Web, Database, AI)

-   Sorting options:

    -   Newest First
    -   Oldest First
    -   Name (A-Z)
    -   Name (Z-A)

-   View mode toggle:

    -   Grid View
    -   List View

-   Dynamic rendering using JavaScript\

-   User preferences saved using `LocalStorage`

Projects are stored as structured JavaScript objects and rendered
dynamically into the DOM.

### Example

``` js
const PROJECTS = [
  {
    title: "Pantrix: Smart Recipe Recommendation System",
    category: "web",
    date: "2026-02-01"
  }
];
```

This demonstrates advanced DOM rendering and state management using
JavaScript.

------------------------------------------------------------------------

## GitHub API Integration

A GitHub section was added to dynamically load public repositories using
the GitHub API.

### Features include:

-   Fetching latest repositories using `Fetch API`

-   Displaying:

    -   Repository name
    -   Description
    -   Programming language
    -   Star count
    -   Repository link

-   Error handling for failed API requests\

-   Loading and success status messages

### Example API endpoint used

``` js
https://api.github.com/users/ReemaAlqahtani1/repos
```

This demonstrates practical API integration using JavaScript.

------------------------------------------------------------------------

## Live Demo

The project is deployed using GitHub Pages and can be accessed here:

https://reemaalqahtani1.github.io/202280860-ReemaAlQahtani-assignment3/

You can open the live website directly from the browser without any installation.

------------------------------------------------------------------------

## How to Run Locally

#### 1. Clone the repository

``` bash
git clone https://github.com/ReemaAlqahtani1/202280860-ReemaAlQahtani-assignment3.git
```

#### 2. Open the project folder
```bash
cd 202280860-ReemaAlQahtani-assignment3
```

#### 3.	Run a local server (recommended for JavaScript and API features):

Using Python:
```bash
python3 -m http.server 8080
```

#### 4.	Open your browser and visit:

```bash
http://localhost:8080
```

Alternatively, if using VS Code, you can:
-	Right click on index.html
-	Select Open with Live Server

This project does not require npm install or any external dependencies.

------------------------------------------------------------------------

## AI Usage Summary

AI tools were used to assist with:

-   Improving JavaScript logic and rendering systems
-   GitHub API integration guidance
-   UI/UX enhancement suggestions
-   Responsive design improvements
-   Debugging and optimization
-   Documentation formatting

A detailed explanation of AI assistance is provided in:

``` text
docs/ai-usage-report.md
```

------------------------------------------------------------------------

## Author

**Reema S. AlQahtani**\
Software Engineering Student
