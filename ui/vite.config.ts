import { defineConfig } from 'vite'
export default (async ()=> {
  const svelte = await import('@sveltejs/vite-plugin-svelte')
  return defineConfig({
      plugins: [svelte.svelte(),
    {
    name: 'nonce',
    transformIndexHtml(html:string) {
      return html.replace(
        /<script type="module" crossorigin src="(.*?)"><\/script>/g,
        `<script type="module" crossorigin src="__indexjs__" nonce="__nonce__"></script>`
      )
    },
  },],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // assetFileNames: (info) => {
        //   if (info.names.includes('.css')) {
        //     console.log(info)
        //     return 'styles.css'
        //   }
        //   return 'index.js'
        // },
        format: 'iife', // Immediately Invoked Function Expression for a single file
        inlineDynamicImports: true, // Forces all dynamic imports to be included in the same file
        entryFileNames: 'index.js', // Name of the final output file
      },
    },
    outDir: '../dist/html',
  },
  })
})()
