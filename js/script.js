// =========================
// Helper selector function
// Shorter way to use querySelector
// =========================
const $ = (sel) => document.querySelector(sel);

/* =========================
   DOM Elements References
========================= */
const themeBtn = $("#themeBtn");        // Theme toggle button
const greetingEl = $("#greeting");      // Dynamic greeting text
const yearEl = $("#year");              // Footer year
const form = $("#contactForm");         // Contact form
const statusEl = $("#formStatus");      // Form status message
const navToggle = $(".nav-toggle");     // Mobile menu button
const navMenu = $("#navMenu");          // Navigation menu container

const projectFilterEl = $("#projectFilter");        // Project filter dropdown
const projectSortEl = $("#projectSort");            // Project sort dropdown
const projectsListEl = $("#projectsList");          // Container for project items
const projectsFeedbackEl = $("#projectsFeedback");  // Feedback message showing number of filtered projects 
const viewToggleEl = $("#viewToggle");              // Button to toggle between grid and list view for projects

const loadReposBtn = $("#loadReposBtn");            // Button to load GitHub repositories
const githubStatus = $("#githubStatus");            // GitHub status message
const githubList = $("#githubList");                // Container for GitHub repositories
const backToTopBtn = $("#backToTopBtn");              // Button to scroll back to top

const GITHUB_USERNAME = "ReemaAlqahtani1";          // GitHub username for fetching repositories
/* =========================
   Skills Data (Static Data Source)
   This array contains all skills displayed
   Each skill has:
   - name
   - level
   - category (used for filtering)
========================= */
const SKILLS = [
  { name: "HTML", level: "Good", category: "frontend" },
  { name: "CSS", level: "Good", category: "frontend" },
  { name: "JavaScript", level: "Good", category: "frontend" },

  { name: "SQL", level: "Good", category: "backend" },
  { name: "Java", level: "Good", category: "backend" },
  { name: "Python", level: "Good", category: "backend" },
  { name: "C", level: "Good", category: "backend" },

  { name: "Git", level: "Good", category: "tools" },
  { name: "GitHub", level: "Good", category: "tools" },
  { name: "IntelliJ IDEA", level: "Good", category: "tools" },
  { name: "MySQL Workbench", level: "Good", category: "tools" },  
  { name: "Streamlit", level: "Good", category: "tools" },
];

/* =========================
   Projects array used for dynamic rendering
========================= */
const PROJECTS = [
  {
    title: "Pantrix: Smart Recipe Recommendation System",
    description: "A web application that recommends recipes based on available ingredients with smart filtering.",
    category: "web",
    date: "2026-02-01",
    image:"assets/images/project-placeholder-1.png",
    demo: null,
    github: "https://github.com/1Sara19/Pantrix.git"
  },
  {
    title: "Horse Riding Management System",
    description: "A database-driven system for managing horses, riders, and competitions.",
    category: "database",
    date: "2025-09-15",
    image: "assets/images/project-placeholder-2.png",
    demo: null,
    github: null
  },
  {
    title: "Shopping Cart Abandonment Prediction",
    description: "A machine learning project for predicting shopping cart abandonment.",
    category: "ai",
    date: "2024-09-01",
    image: "assets/images/project-placeholder-3.png",
    demo: null,
    github: null
  }
];

// State object stores saved user preferences
const state = {
  projectFilter: localStorage.getItem("projectFilter") || "all",
  projectSort: localStorage.getItem("projectSort") || "newest",
  projectView: localStorage.getItem("projectView") || "grid"
};

/* =========================
   Initialize After DOM Loaded
   Ensures elements exist before JS runs
========================= */
document.addEventListener("DOMContentLoaded", () => {

  // Set current year in footer
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize dynamic greeting
  setGreeting();

  // Initialize saved theme
  initTheme();

  // Attach event listeners (only if elements exist)
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
  if (navToggle) navToggle.addEventListener("click", toggleMobileNav);
  if (navMenu) navMenu.addEventListener("click", closeMobileNavOnLink);
  if (form) form.addEventListener("submit", handleContactSubmit);
  if (loadReposBtn) loadReposBtn.addEventListener("click", fetchGitHubRepos);

  // Initialize skills filtering system
  setupSkillsFilter();
  // Start projects system
  setupProjects();

  setupBackToTop();
});


/* =========================
   Dynamic Greeting Based on Time
========================= */
function setGreeting() {
  if (!greetingEl) return;

  const hour = new Date().getHours();
  let msg = "Hello!";

  if (hour < 12) msg = "Good morning 👋";
  else if (hour < 18) msg = "Good afternoon 👋";
  else msg = "Good evening 👋";

  greetingEl.textContent = msg;
}


/* =========================
   Theme Management
   Uses localStorage to save preference
========================= */
function initTheme() {
  const saved = localStorage.getItem("theme");

  // Apply saved theme if available
  if (saved === "light" || saved === "dark") {
    document.documentElement.setAttribute("data-theme", saved);
  }

  updateThemeIcon();
}

// Update icon depending on current theme
function updateThemeIcon() {
  if (!themeBtn) return;

  const current = document.documentElement.getAttribute("data-theme");
  themeBtn.textContent = current === "light" ? "🌙" : "☀️";
}

// Toggle between light and dark theme
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon();
}


/* =========================
   Mobile Navigation
   Handles opening & closing menu
========================= */
function toggleMobileNav() {
  if (!navMenu || !navToggle) return;

  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

// Close mobile menu when clicking a link
function closeMobileNavOnLink(e) {
  if (!navMenu || !navToggle) return;

  if (e.target.tagName === "A" && navMenu.classList.contains("is-open")) {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
}


/* =========================
   Contact Form Validation
========================= */
async function handleContactSubmit(e) {
  e.preventDefault();

  if (!statusEl || !form) return;

  const name = $("#name")?.value.trim() || "";
  const email = $("#email")?.value.trim() || "";
  const message = $("#message")?.value.trim() || "";

  if (!name || !email || !message) {
    showFormMessage("Please fill out all fields.", "error");
    return;
  }

  if (name.length < 2) {
    showFormMessage("Name must be at least 2 characters long.", "error");
    return;
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!emailOk) {
    showFormMessage("Please enter a valid email address.", "error");
    return;
  }

  if (message.length < 10) {
    showFormMessage("Message must be at least 10 characters long.", "error");
    return;
  }

  try {
    const response = await fetch("https://formspree.io/f/xdaybqqa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: "New Portfolio Contact Message"
      })
    });

    if (response.ok) {
      showFormMessage(
        `Thanks, ${name}! Your message has been sent successfully.`,
        "success"
      );
      form.reset();
    } else {
      showFormMessage(
        "Something went wrong. Please try again.",
        "error"
      );
    }

  } catch (error) {
    showFormMessage(
      "Unable to send message right now. Please try again later.",
      "error"
    );
    console.error(error);
  }
}

/* =========================
   Skills Filtering + Search System
   - Filters by category
   - Supports live typing search
   - Renders dynamically
   - Supports keyboard accessibility
   - Shows feedback / empty state message
========================= */
function setupSkillsFilter() {

  const filters = document.getElementById("skillsFilters");
  const list = document.getElementById("skillsList");
  const searchInput = document.getElementById("skillSearch");
  const feedback = document.getElementById("skillsFeedback");

  if (!filters || !list || !searchInput || !feedback) return;

  const buttons = Array.from(filters.querySelectorAll("button[data-filter]"));

  // Current active filter and search query
  let activeFilter = "all";
  let searchQuery = "";

  // Update active button styling
  const setActive = (filter) => {
    buttons.forEach((b) =>
      b.classList.toggle("is-active", b.dataset.filter === filter)
    );
  };

  // Render skills based on selected filter + search text
  const render = () => {

    let items = [...SKILLS];

    // Filter by category first
    if (activeFilter !== "all") {
      items = items.filter((s) => s.category === activeFilter);
    }

    // Then filter by search input
    if (searchQuery) {
      items = items.filter((s) =>
        s.name.toLowerCase().includes(searchQuery)
      );
    }

    // Show empty state if nothing matches
    if (items.length === 0) {
      list.innerHTML = "";
      feedback.textContent = "No skills found.";
      return;
    }

    // Show result count feedback
    feedback.textContent = `${items.length} skill${items.length > 1 ? "s" : ""} found.`;

    // Render the filtered skills
    list.innerHTML = items
      .map(
        (s) => `
          <div class="skill-pill">
            <span class="skill-name">${escapeHtml(s.name)}</span>
            <span class="skill-level">${escapeHtml(s.level)}</span>
          </div>
        `
      )
      .join("");
  };

  // Default filter (All)
  const defaultBtn =
    buttons.find((b) => b.classList.contains("is-active")) || buttons[0];

  const defaultFilter = defaultBtn?.dataset.filter || "all";
  activeFilter = defaultFilter;
  setActive(defaultFilter);
  render();

  // Click interaction for filter buttons
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-filter]");
    if (!btn) return;

    activeFilter = btn.dataset.filter;
    setActive(activeFilter);
    render();
  });

  // Keyboard accessibility (Enter / Space)
  filters.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;

    const btn = e.target.closest("button[data-filter]");
    if (!btn) return;

    e.preventDefault();
    activeFilter = btn.dataset.filter;
    setActive(activeFilter);
    render();
  });

  // Live search while typing
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    render();
  });
}

/* =========================
   Projects Section
========================= */

function setupProjects() {
  if (!projectFilterEl || !projectSortEl || !projectsListEl || !viewToggleEl) return;

  projectFilterEl.value = state.projectFilter;
  projectSortEl.value = state.projectSort;

  // Update active view button style
  updateViewButtons();
  // Render projects using saved settings
  renderProjects();

  projectFilterEl.addEventListener("change", (e) => {
    // Update state with selected filter
    state.projectFilter = e.target.value;
    localStorage.setItem("projectFilter", state.projectFilter);
    renderProjects();
  });

  projectSortEl.addEventListener("change", (e) => {
    // Update state with selected sort
    state.projectSort = e.target.value;
    localStorage.setItem("projectSort", state.projectSort);
    renderProjects();
  });

  viewToggleEl.addEventListener("click", (e) => {
    // Find clicked button
    const btn = e.target.closest("button[data-view]");
    // Stop if clicked item is not a view button
    if (!btn) return;
    state.projectView = btn.dataset.view;
    localStorage.setItem("projectView", state.projectView);
    updateViewButtons();
    renderProjects();
  });
}


function updateViewButtons() {
  // Get all view buttons
  const buttons = viewToggleEl.querySelectorAll("button[data-view]");
  // Loop through buttons
  buttons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.view === state.projectView);
  });
}

// Function that filters, sorts, and displays project cards
function renderProjects() {
  let items = [...PROJECTS];
  // Filter projects by category if selected filter is not "all"
  if (state.projectFilter !== "all") {
    items = items.filter((project) => project.category === state.projectFilter);
  }
  // Sort by newest first
  if (state.projectSort === "newest") {
    items.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  // Sort by oldest first
  else if (state.projectSort === "oldest") {
    items.sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  // Sort alphabetically A to Z
  else if (state.projectSort === "az") {
    items.sort((a, b) => a.title.localeCompare(b.title));
  }
  // Sort alphabetically Z to A
  else if (state.projectSort === "za") {
    items.sort((a, b) => b.title.localeCompare(a.title));
  }
  // Switch CSS class depending on selected view mode
  projectsListEl.className = state.projectView === "list" ? "cards list-view" : "cards";
  // Show message if no matching projects are found
  if (items.length === 0) {
    projectsListEl.innerHTML = "";
    if (projectsFeedbackEl) {
      projectsFeedbackEl.textContent = "No projects match the selected filter.";
    }
    return;
  }
  // Show number of displayed projects
  if (projectsFeedbackEl) {
    projectsFeedbackEl.textContent = `${items.length} project${items.length > 1 ? "s" : ""} shown.`;
  }
  // Render all matching project cards
  projectsListEl.innerHTML = items.map(projectCardTemplate).join("");
}

// Function that returns HTML for one project card
function projectCardTemplate(project) {
  return `
    <article class="card">
      <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} preview" />
      <div class="card-body">
        <div class="card-meta">
          <span class="tag">${escapeHtml(capitalize(project.category))}</span>
          <span class="project-date">${formatDate(project.date)}</span>
        </div>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.description)}</p>
        <div class="card-links">
          ${
            project.demo
              ? `<a href="${escapeHtml(project.demo)}" target="_blank" rel="noopener noreferrer">Demo</a>`
              : `<span class="unavailable-link">Demo not available</span>`
          }
          ${
            project.github
              ? `<a href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>`
              : `<span class="unavailable-link">GitHub not available</span>`
          }
        </div>
      </div>
    </article>
  `;
}

/* =========================
   GitHub API Section
========================= */

// Async function that fetches repositories from GitHub API
async function fetchGitHubRepos() {
  if (!githubStatus || !githubList) return;
  githubStatus.textContent = "Loading repositories...";
  // Clear old repository cards
  githubList.innerHTML = "";

  try {
    // Send request to GitHub API
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
    );
    // Throw error if response failed
    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }
    // Convert response to JSON
    const repos = await response.json();
    // Show message if no repositories are found
    if (!repos.length) {
      githubStatus.textContent = "No repositories found.";
      return;
    }
    // Show success message
    githubStatus.textContent = "Repositories loaded successfully.";
    // Render repository cards
    githubList.innerHTML = repos
      .map(
        (repo) => `
          <article class="repo-card">
            <h3>${escapeHtml(repo.name)}</h3>
            <p>${escapeHtml(repo.description || "No description available.")}</p>
            <div class="repo-meta">
              <span>⭐ ${repo.stargazers_count}</span>
              <span>${escapeHtml(repo.language || "N/A")}</span>
            </div>
            <a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener noreferrer">View Repository</a>
          </article>
        `
      )
      .join("");
  } catch (error) {
    // Show friendly error message to user
    githubStatus.textContent = "Sorry, something went wrong while loading GitHub data.";
    // Print technical error in console for debugging
    console.error(error);
  }
}

/* =========================
   Back To Top Button
========================= */
function setupBackToTop() {
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    backToTopBtn.classList.toggle("show", window.scrollY > 300);
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* =========================
  Helpers
========================= */
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short"
  });
}

function showFormMessage(message, type) {
  statusEl.textContent = message;
  statusEl.className = `form-status ${type}`;
}
