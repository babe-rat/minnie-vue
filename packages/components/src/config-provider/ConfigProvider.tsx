import { defineComponent, renderSlot, provide } from 'vue'
import { createNamespace, definePropType } from '../utils'
import { Locale } from '../locale'
import type { InjectionKey, ExtractPropTypes } from 'vue'
import type { Language } from '../locale'

const [name] = createNamespace('config-provider')

export const configProviderProps = {
    locale: definePropType<Language>(Object),
}

export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>

const configProviderContextKey: InjectionKey<ConfigProviderProps> = Symbol(name)

export default defineComponent({
    name,

    props: configProviderProps,

    setup(props, { slots }) {
        provide(configProviderContextKey, props)

        if (props.locale) {
            Locale.use(props.locale.name, props.locale)
        }

        return () => renderSlot(slots, 'default', { config: props })
    },
})
