import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: 'src/main.tsx', // Adjust this path to your main entry file
        },
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom'], // Add other major dependencies here
    },
});
