# 202280860-ReemaAlQahtani-assignment4

# Personal Portfolio Website

**Assignment 4 — Final Personal Web Application**

---

## Project Description

This project represents the **final phase** of my personal portfolio website.

It combines all previous assignments into a complete, polished, and professional personal web application that showcases my academic background, technical skills, projects, and development experience.

The website is developed using **HTML, CSS, and JavaScript** and demonstrates responsive front-end development, dynamic rendering, API integration, real contact form functionality, accessibility, and professional UI/UX design.

This final version focuses on delivering a production-ready portfolio that reflects both technical skills and professional presentation.

The website contains the following main sections:

- **About Me** — Personal introduction with dynamic time-based greeting
- **Education** — Academic background with KFUPM details
- **Skills** — Searchable and filterable technical skills section
- **Projects** — Dynamic projects section with filtering, sorting, and view modes
- **GitHub Repositories** — Live GitHub API integration for public repositories
- **Contact** — Real contact form using Formspree with validation
- **Social Links** — GitHub, LinkedIn, and Email connections
- **CV Download** — Downloadable professional resume
- **Back to Top Button** — Improved user experience and navigation

Assignment 4 focuses on **professional quality, complete functionality, AI-assisted development, deployment, and presentation readiness**.

---

## Technologies Used

- **HTML5**
  - Semantic structure
  - Accessibility support
  - ARIA attributes

- **CSS3**
  - Flexbox
  - CSS Grid
  - Media Queries
  - CSS Variables
  - Responsive Design
  - Advanced UI Styling
  - Custom Dropdown Design
  - Glassmorphism-inspired UI elements

- **Vanilla JavaScript**
  - DOM Manipulation
  - Event Handling
  - LocalStorage API
  - Dynamic Content Rendering
  - Fetch API
  - Async/Await
  - Form Validation
  - State Management

- **GitHub REST API**

- **Formspree**
  - Real contact form submission without backend

- **GitHub Pages**
  - Live deployment and hosting

---

## Key Features

- Fully responsive layout (Desktop, Tablet, Mobile)
- Light/Dark theme toggle stored in `LocalStorage`
- Time-based dynamic greeting
- Mobile navigation menu with accessibility support
- Education section with KFUPM logo and academic details
- Downloadable CV button
- Attractive social links cards
- Searchable and filterable Skills section
- Dynamic Projects section with:
  - Category filtering
  - Sorting options
  - Grid/List view toggle
- GitHub API integration to load latest public repositories
- Real contact form with Formspree integration
- Client-side form validation
- Back to Top floating button
- Enhanced UI/UX with professional design improvements
- Accessibility improvements (ARIA attributes and keyboard navigation)

---

## Projects Section

A dynamic Projects section was implemented to showcase portfolio projects professionally.

### Features include:

- Category filtering (All, Web, Database, AI)

- Sorting options:
  - Newest First
  - Oldest First
  - Name (A-Z)
  - Name (Z-A)

- View mode toggle:
  - Grid View
  - List View

- Dynamic rendering using JavaScript

- User preferences saved using `LocalStorage`

Projects are stored as structured JavaScript objects and rendered dynamically into the DOM.

### Example

```javascript
const PROJECTS = [
  {
    title: "Pantrix: Smart Recipe Recommendation System",
    category: "web",
    date: "2026-02-01"
  }
];
```

This demonstrates advanced DOM rendering and frontend state management.

---

## GitHub API Integration

A GitHub section dynamically loads public repositories using the GitHub API.

### Features include:

- Fetching latest repositories using `Fetch API`

- Displaying:
  - Repository name
  - Description
  - Programming language
  - Star count
  - Repository link

- Error handling for failed API requests

- Loading and success status messages

### Example API endpoint used

```javascript
https://api.github.com/users/ReemaAlqahtani1/repos
```

This demonstrates practical API integration using JavaScript.

---

## Contact Form Integration

The Contact section includes a real working contact form using Formspree.

### Features include:

- Real message submission without backend development
- Name, Email, and Message validation
- Personalized success message using the user's name
- Error handling for invalid input
- Users remain on the same page after submission

This improves professionalism and real-world usability.

---

## Live Demo

The project is deployed using GitHub Pages and can be accessed here:

```text
https://reemaalqahtani1.github.io/202280860-ReemaAlQahtani-assignment4/```

The website is publicly accessible and requires no installation.

---

## How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/ReemaAlqahtani1/202280860-ReemaAlQahtani-assignment4.git
```

### 2. Open the project folder

```bash
cd 202280860-ReemaAlQahtani-assignment4
```

### 3. Run a local server

Using Python:

```bash
python3 -m http.server 8080
```

### 4. Open your browser and visit

```bash
http://localhost:8080
```

Or use VS Code Live Server by right clicking `index.html` and selecting **Open with Live Server**.

---

## AI Usage Summary

AI tools were used to assist with:

- Improving JavaScript logic and rendering systems
- GitHub API integration guidance
- Formspree contact form integration
- UI/UX enhancement suggestions
- Responsive design improvements
- Debugging and optimization
- Documentation writing and formatting

A detailed explanation of AI assistance is provided in:

```text
docs/ai-usage-report.md
```

---

## Technical Documentation

Detailed technical documentation is provided in:

```text
docs/technical-documentation.md
```

This includes:

- Project structure
- Features explanation
- Testing process
- Future improvements
- Technical implementation details

---

## Author

**Reema S. AlQahtani**  
Software Engineering Student  
King Fahd University of Petroleum & Minerals (KFUPM)
