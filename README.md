# Words of Wisdom

**Words of Wisdom** is a simple, modern Jekyll-based website designed to help you memorize quotes. The site features a home page with a random quote (with a button for a new random quote), an index page with a searchable list of quotes, an interactive test page, and individual quote pages—all built using client‑side rendering.

## Running Locally with Docker

This project is containerized so you don’t need to install Ruby or Jekyll locally. To run the site in a Docker container:

1. **Build and start the container:**  
   Open a terminal in the project directory and run:

   ```bash
   docker compose up --build
   ```

2. **View the site:**  
   Open your browser and navigate to [http://localhost:4000](http://localhost:4000). Changes you make on your host will be tracked live inside the container.

## Deploying to GitHub Pages

Since this is a Jekyll site, you can deploy it on GitHub Pages by simply pushing your repository to GitHub. Then:

1. In your repository’s **Settings**, go to the **GitHub Pages** section.
2. Select the branch (typically `main`) as your source.
3. GitHub Pages will build and serve your site automatically.
