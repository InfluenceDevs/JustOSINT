# JustOSINT

A curated, interactive OSINT resource navigator built as a static web app.

## Overview

JustOSINT presents a category-based intelligence toolkit with:

- Interactive category tree and flow views
- Search across nodes, tools, and tags
- 220 curated tools across major OSINT domains (including relatives and dating-focused discovery)
- Light and dark theme toggle
- Zoom and expand/collapse controls for easier navigation
- Workspace mode for creating local cards and storing text pastes

## Project Structure

- `index.html`: Application layout and UI shell
- `styles.css`: Theme and component styling
- `script.js`: Data model and interaction logic

## Run Locally

Open `index.html` in your browser.

For best consistency, you can also use a local static server:

```bash
# Node.js
npx serve .

# Python
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy With GitHub Pages

This repository includes a GitHub Actions workflow that publishes the site from the repository root.

1. Push this project to your GitHub repository.
2. In GitHub, open **Settings -> Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to the `main` branch to trigger deployment.

After deployment, your site will be available at:

- `https://influencedevs.github.io/JustOSINT/`

## Notes

- This project links to third-party OSINT tools. Validate legality, policy, and operational security requirements before use.
- External tools can change over time; links may require periodic updates.
