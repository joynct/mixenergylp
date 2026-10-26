import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { SEO_ROUTES, SITE_URL } from './src/seoRoutes';

// Gera, no build, um HTML por página legal com título, descrição e canonical
// próprios. O Netlify serve esses arquivos pelas regras de public/_redirects.
// Assim o Google lê o canonical correto direto no HTML, sem depender de JavaScript.
function routePages(): Plugin {
  let outDir = 'dist';
  let root = process.cwd();

  const setTag = (html: string, pattern: RegExp, replacement: string) => html.replace(pattern, replacement);

  return {
    name: 'route-pages',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir;
      root = config.root;
    },
    closeBundle() {
      const dist = join(root, outDir);
      const base = readFileSync(join(dist, 'index.html'), 'utf-8');
      mkdirSync(join(dist, 'route-pages'), { recursive: true });

      for (const route of SEO_ROUTES) {
        const url = `${SITE_URL}${route.path}`;
        let html = base;
        html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`);
        html = setTag(html, /(<meta name="description" content=")[^"]*(")/, `$1${route.description}$2`);
        html = setTag(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${route.description}$2`);
        html = setTag(html, /(<meta property="twitter:description" content=")[^"]*(")/, `$1${route.description}$2`);
        html = setTag(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${route.title}$2`);
        html = setTag(html, /(<meta property="twitter:title" content=")[^"]*(")/, `$1${route.title}$2`);
        html = setTag(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
        html = setTag(html, /(<meta property="twitter:url" content=")[^"]*(")/, `$1${url}$2`);
        html = setTag(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
        writeFileSync(join(dist, 'route-pages', `${route.path.slice(1)}.html`), html);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), routePages()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
