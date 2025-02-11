# Words of Wisdom

**Words of Wisdom** is a React app built with TypeScript and Vite. It helps you memorize quotes by offering:

- A **Home** page that displays a random quote (with a “New Random Quote” button),
- An **Index** page with a searchable, sorted list of quotes,
- A **Test** page where you can toggle to reveal quote details and navigate through quotes in random order,
- And dedicated **Quote** pages (accessible via `/quote/:id`).

## Running Locally

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start the Dev Server**

   ```bash
   npm run dev
   ```

   Open your browser to [http://localhost:5173](http://localhost:5173) (or the port indicated in your terminal). Changes will update live.

## Deploying to GitHub Pages

This app is configured for GitHub Pages:

- The Vite config sets the base path to `/words-of-wisdom/`.
- To build the project, run:

  ```bash
  npm run build
  ```

- Deploy the contents of the generated `dist` folder to GitHub Pages (for example, using the [gh-pages](https://www.npmjs.com/package/gh-pages) package or your preferred method).
