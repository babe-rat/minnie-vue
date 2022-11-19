import { defineConfig } from '@baberat/shuke'

export default defineConfig({
    esm: {
        ignores: ['demo'],
    },
    cjs: {
        ignores: ['demo'],
    },
})
