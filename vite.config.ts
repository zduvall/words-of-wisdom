// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tsconfigPaths from 'vite-tsconfig-paths';

// export default defineConfig(({ command }) => {
//   return {
//     // Use "/" in dev mode and "/words-of-wisdom/" when building for GitHub Pages.
//     base: command === 'build' ? '/words-of-wisdom/' : '/',
//     plugins: [react(), tsconfigPaths()],
//   };
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/words-of-wisdom/' : '/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    // Helps vite resolve my JS configuration paths from my jsconfig.json, thus
    // allows absolute paths in imports (`import ... from 'components/...'`)
    tsconfigPaths(),
  ],
  server: {
    // open: true, // open browser on server start
    port: 3000,
  },
}));
