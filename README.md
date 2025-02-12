# Words of Wisdom

**Words of Wisdom** is a React app built with TypeScript and Vite. It helps you memorize quotes by offering:

- A **Home** page that displays a random quote (with a “New Random Quote” button),
- An **Quotes** page with a searchable, sorted list of quotes, with an option of looking at one at a time
- A **Test** page where you can toggle to reveal quote details and navigate through quotes in random order

## Running Locally

1. **Install Dependencies**

```bash
npm install
```

2. **Start the Dev Server**

```bash
npm run dev
```

Open your browser to [http://localhost:3000](http://localhost:3000) (or the port indicated in your terminal). Changes will update live.

## Deploying to GitHub Pages

**1. Configure GitHub Pages Settings (One-Time Setup)**

- Go to your GitHub repository for "words-of-wisdom".
- Click on "Settings" -> "Pages".
- Under "Build and deployment", set:
  - "Source": "Deploy from a branch".
  - "Branch": "gh-pages".
  - "Folder": / (root) (as the files will be in the root of the gh-pages branch).
- Click "Save".

**2. Build Your App for Production**

Run this command in project root:

```bash
npm run deploy
```

This command:

- Builds the React app for production, creating an optimized `dist` folder.
- Prepares for GitHub Pages deployment by creating a `404.html` file (necessary for handling client-side routing in single-page apps on GitHub Pages, ensuring proper navigation even for non-root paths). See also [this article](https://dev.to/lico/handling-404-error-in-spa-deployed-on-github-pages-246p).
- Deploys the contents of the `dist` folder to the gh-pages branch of your repository, making your app live on GitHub Pages.
