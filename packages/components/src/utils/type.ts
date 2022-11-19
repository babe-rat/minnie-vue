import type { App, Component } from 'vue'

export type WithInstall<T> = T & {
    install(app: App): void
}

export const withInstall = <T extends Component>(comp: T) => {
    const c = comp as any

    c.install = function (app: App) {
        app.component(c.displayName || c.name, comp)
    }
    return comp as WithInstall<T>
}
