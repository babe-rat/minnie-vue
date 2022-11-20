import { defineConfig } from 'vitepress'
import { applyPlugins } from '@ruabick/md-demo-plugins'
import { genTemp } from '@ruabick/vite-plugin-gen-temp'
import { resolve } from 'path'
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
        plugins: [genTemp('./packages/components/src')],
        resolve: {
            alias: {
                '@baberat/minnie-vue': resolve('./packages/components/src'),
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
