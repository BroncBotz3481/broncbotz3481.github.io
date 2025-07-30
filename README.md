# Bronc Botz SPA Website

## Running Locally

### Prerequisites

* [Node.js](https://nodejs.org/) (v16 or newer recommended)
* [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps

1. Install dependencies:

```bash
npm install
```

2. Run the development server with hot reload:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. To build and start the production server locally:

```bash
npm run build
npm start
```

---

## Building and Exporting

Your project uses Next.js static export:

* Build and export the static site with:

```bash
npm run export
```

This outputs static files to the `out` directory.

---

## Deployment to GitHub Pages

This project deploys to the `gh-pages` branch on GitHub.

To deploy:

```bash
npm run deploy
```

This runs the `predeploy` script (`npm run build`) followed by deploying the `out` folder to the `gh-pages` branch using the `gh-pages` package.

---

## Repository and URL

* **GitHub repo:** [https://github.com/BroncBotz3481/broncbotz3481.github.io](https://github.com/BroncBotz3481/broncbotz3481.github.io)
* **Live site:** [https://broncbotz.org](https://broncbotz.org)
