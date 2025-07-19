# Optum LogAnalyzer SaaS Platform

A modern, multi-page SaaS web application for Optum, built with modular HTML, CSS, and JavaScript. The project features a visually rich landing page, dynamic "Get Started" page, animated backgrounds, user profile/logout, responsive design, and professional UI. All assets are organized for easy maintenance and future upgrades.

## Features
- Visually rich, responsive landing page
- Dynamic dropdowns and animated backgrounds
- User profile and logout functionality
- Header with logo and user profile
- Organized assets and modular code
- Clean, professional UI with card and shadow effects
- Favicon and watermark support
- Git/GitHub setup instructions

## Project Structure
```
public/
  index.html
  get-started.html
  get-started-bg.html
  img/
    optum.png
    uhg.png
    favicon.png
    bg.jpg
    ...
src/
  styles.css
  scripts.js
README.md
project_recreation_instructions.md
package.json
```

## Getting Started
### 1. Install Dependencies
No build dependencies required for static HTML/CSS/JS. For local server:
```bash
npm install -g serve
```

### 2. Run the Project
```bash
npx serve public
```
Or open `public/index.html` directly in your browser.

### 3. Stop the Server
Press `Ctrl+C` in the terminal.
