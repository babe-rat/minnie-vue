import type { App } from 'vue'
import { Locale } from './locale'
import * as components from './components'

export * from './components'

export const install = function (app: App) {
    Object.keys(components).forEach(key => {
        const component = components[key]
        if (component.install) {
            app.use(component)
        }
    })

    return app
}

export { Locale }

export default {
    install,
}
