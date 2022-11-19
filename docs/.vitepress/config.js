import { defineConfig } from 'vitepress'
import { applyPlugins } from '@ruabick/md-demo-plugins'
import { genTemp } from '@ruabick/vite-plugin-gen-temp'
import { resolve } from 'path'
import vitePluginImp from 'vite-plugin-imp'
import { sidebar } from './sidebar.js'

export default defineConfig({
    lang: 'zh-CN',
    lastUpdated: true,
    base: process.env.NODE_ENV === 'production' ? '/minnie-vue' : '/',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Minnie-Vue',
            description: '',
        },
        '/en/': {
            lang: 'en-US',
            title: 'ruabick-project',
            description: '',
        },
    },
    themeConfig: {
        logo: '/logo.svg',
        // localeLinks: {
        //     text: '',
        //     items: [
        //         { text: '简体中文', link: '/' },
        //         { text: 'English', link: '/en/' },
        //     ],
        // },
        sidebar,
        algolia: {},
        socialLinks: [{ icon: 'github', link: 'https://github.com/babe-rat/minnie-vue' }],
    },
    vue: {},
    vite: {
        plugins: [
            vitePluginImp({
                libList: [
                    {
                        libName: '@baberat/minnie-vue',
                        style(name) {
                            return resolve(`./packages/components/src/${name}/style/index.ts`)
                        },
                    },
                ],
            }),
            genTemp('./packages/components/src'),
        ],
        resolve: {
            alias: {
                '@baberat/minnie-vue': resolve('./packages/components/src/index.ts'),
            },
        },
    },
    markdown: {
        config: md => {
            applyPlugins(md)
        },
        theme: {
            light: 'github-light',
            dark: 'github-dark',
        },
    },
})
