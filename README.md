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

   Open your browser to [http://localhost:3000](http://localhost:3000) (or the port indicated in your terminal). Changes will update live.

## Deploying to GitHub Pages

**1. Build Your App for Production**

First, build your app to optimize it and place all necessary files in the `dist` folder. Run this command in your project root:

```bash
npm run build
```

**2. Stage and Commit the Built Files**

After the build is complete, you'll have a `dist` folder in your project. Stage and commit this entire `dist` folder to your `main` branch. Git will recognize the new `dist` folder (or changes within it if you've deployed before).

```bash
git add dist
git commit -m "Deploy to GitHub Pages"
git push
```

**3. Configure GitHub Pages in Repository Settings**

Now, instruct GitHub Pages to serve your site from the `dist` folder within your `main` branch:

1.  Go to your GitHub repository for "words-of-wisdom".
2.  Click on **"Settings"** at the top of the page.
3.  In the left sidebar, click on **"Pages"**.
4.  Under the "Build and deployment" section:
    - For **"Source"**, choose **"Deploy from a branch"**.
    - For **"Branch"**, select **"main"**.
    - Crucially, for **"Folder"**, select **`/dist`**. This tells GitHub Pages to look inside the `dist` folder on your `main` branch for the website files.
5.  Click **"Save"**.
