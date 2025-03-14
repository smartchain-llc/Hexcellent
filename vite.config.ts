import { defineConfig } from 'vite'
import path from 'path'

export default (async ()=>{
    const tsconfigPaths = await import('vite-tsconfig-paths')
    return defineConfig({
        plugins:[tsconfigPaths.default({skip: (dir)=>{return dir === path.resolve(__dirname, "ui")}})],
        build: {
            outDir: 'dist', // Output directory
            lib: {
            entry: path.resolve(__dirname, 'extension/main.ts'), // Your entry file
            formats: ['cjs'], // VSCode extensions require CommonJS format
            fileName: () => 'extension.js',
            },
            rollupOptions: {
            external: [
                'vscode', // Exclude VSCode API since it's provided at runtime,
                'crypto'
            ],
            output: {
                format: 'cjs', // CommonJS format
            },
            },
            minify: false, // Optional: disable minification for debugging
        },
        })
})()
