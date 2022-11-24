import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { MinnieVueResolver } from '@baberat/minnie-vue-resolver'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        AutoImport({
            resolvers: [MinnieVueResolver()],
        }),
        Components({
            resolvers: [MinnieVueResolver()],
        }),
    ],
})
