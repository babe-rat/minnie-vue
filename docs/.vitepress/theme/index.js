import DefaultTheme from 'vitepress/theme'
import DemoBlock from '@ruabick/vitepress-demo-block'
import '@ruabick/vitepress-demo-block/dist/style.css'
import Minnie from '@baberat/minnie-vue'
import '@baberat/minnie-vue/style'
import './var.css'

export default {
    ...DefaultTheme,

    enhanceApp({ app, router, siteData }) {
        // app is the Vue 3 app instance from `createApp()`.
        // router is VitePress' custom router. `siteData` is
        // a `ref` of current site-level metadata.
        app.component('demo', DemoBlock)
        app.use(Minnie)
    },
}
