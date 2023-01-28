import { defineConfig, configDefaults } from 'vitest/config'
import { fileURLToPath, URL } from "url";
import vue from '@vitejs/plugin-vue'
export default defineConfig({
    plugins: [vue()],
    test: {
        coverage: {
            provider: 'istanbul', // or 'c8'
            reportsDirectory: './tests/unit/coverage',
            reporter: ['text', 'json', 'html'],
        },
        alias: [
            { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
            { find: "@test", replacement: fileURLToPath(new URL("./test", import.meta.url)) },
        ],

        globals: true,
        environment: 'jsdom',
        exclude: [...configDefaults.exclude]
    },
})