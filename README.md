# Daybook – My Daily To-Do List

A simple, responsive to-do list website built with plain **HTML, CSS and JavaScript**. No frameworks or libraries are used.

## Features

- Add new tasks (with the Add button or the Enter key)
- Mark tasks as done and delete tasks
- Filter tasks: All, To do, Done
- Progress bar and a counter showing how many tasks are done
- Tasks are saved in the browser, so they stay after a refresh
- Shows today's date and a greeting based on the time of day
- Works on mobile and desktop, with automatic dark mode

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure of the page |
| CSS3 | Styling, layout and dark mode |
| JavaScript (ES6) | Behaviour and saving data |

## Project Structure

```
todo-site/
├── index.html   → page structure
├── style.css    → design and layout
├── script.js    → logic and interactivity
└── README.md    → project documentation
```

## How to Run

1. Download or copy the project folder.
2. Make sure `index.html`, `style.css` and `script.js` are in the same folder.
3. Double-click `index.html` to open it in any browser.

An internet connection is only needed for the Google Fonts. Without it, the page uses a fallback font.

## HTML Tags Used

| Tag | Use in this project |
|-----|---------------------|
| `<!DOCTYPE html>` | Declares an HTML5 document |
| `<html>` | Root element of the page |
| `<head>` | Page information (not shown on screen) |
| `<meta>` | Character encoding and mobile-friendly viewport |
| `<title>` | Text on the browser tab |
| `<link>` | Connects the CSS file and Google Fonts |
| `<body>` | Everything visible on the page |
| `<header>` | Top section with brand name and menu |
| `<nav>` | Group of navigation links |
| `<a>` | Links (jump to sections) |
| `<main>` | Main content of the page |
| `<section>` | About and Tasks sections |
| `<div>` | Generic container for grouping elements |
| `<span>` | Inline container for small pieces of text |
| `<h1>`, `<h2>` | Headings |
| `<p>` | Paragraphs |
| `<input>` | Text box for typing a task |
| `<button>` | Add, filter, tick and delete buttons |
| `<ul>` and `<li>` | List of tasks |
| `<footer>` | Bottom section |
| `<script>` | Connects the JavaScript file |

## CSS Concepts Used

- Selectors: tag, class (`.panel`) and id (`#tasks`)
- CSS variables (`:root` and `var()`) for colours and fonts
- Flexbox (`display: flex`) for layouts
- Box model: `margin`, `padding`, `border`, `border-radius`
- Media queries for mobile screens and dark mode (`prefers-color-scheme`)
- Transitions for the progress bar animation
- `:hover`, `:focus` and `:focus-visible` for interaction states

## JavaScript Concepts Used

- DOM selection: `getElementById()`, `querySelectorAll()`
- Creating elements: `createElement()`, `appendChild()`
- Event handling: `addEventListener()` for click and keydown
- Arrays and objects to store tasks
- Array methods: `filter()`, `forEach()`, `push()`
- `localStorage` with `JSON.stringify()` and `JSON.parse()` to save data
- `Date()` object for the date and greeting
- Conditions (`if / else`) and functions

## How It Works

1. When the page loads, saved tasks are read from `localStorage` and drawn on screen.
2. When the user adds a task, it is stored in the `tasks` array, saved, and the list is redrawn.
3. Clicking the tick button changes a task's `done` value, and clicking Delete removes it from the array.
4. The filter buttons change which tasks are shown without deleting anything.
5. The counter and progress bar are updated every time the list is redrawn.

## Future Improvements

- Edit an existing task
- Add due dates and categories
- Drag and drop to reorder tasks
- A "Clear completed" button

## Author

Made by **Vishmitha .A**, IT Departmentwhat to do
