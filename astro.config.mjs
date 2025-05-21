// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'static'
  },
  //Deploy
  base: '/project-000-950/',
  site: 'https://20essentials.github.io/project-000-950/'

  //Localhost
  // base: '.',
  // site: 'http://localhost:4321/'
});
