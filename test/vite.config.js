import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { MinnieVueResolver } from '@baberat/minnie-vue-resolver'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "~/styles/element/index.scss" as *;`,
            },
        },
    },
    plugins: [
        vue(),
        vueJsx(),
        Components({
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass',
                }),
                MinnieVueResolver({
                    importStyle: 'scss',
                }),
            ],
        }),
        AutoImport({
            resolvers: [MinnieVueResolver()],
        }),
    ],
})
