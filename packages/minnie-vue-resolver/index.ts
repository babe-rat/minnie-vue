import kebabCase from 'lodash.kebabcase'
import type { ComponentResolver, SideEffectsInfo } from 'unplugin-vue-components'

export interface MinnieVueResolverOptions {
    /**
     * import style css or less along with components
     *
     * @default true
     */
    importStyle?: boolean | 'css' | 'scss'
}

function getSideEffects(
    dirName: string,
    options: MinnieVueResolverOptions,
): SideEffectsInfo | undefined {
    const { importStyle = true } = options

    if (!importStyle) return

    if (dirName === 'config-provider') return

    if (importStyle === 'scss') return `@baberat/minnie-vue/es/${dirName}/style/index`

    if (importStyle === 'css') return `@baberat/minnie-vue/es/${dirName}/style/css`

    return `@baberat/minnie-vue/es/${dirName}/style/css`
}

export function MinnieVueResolver(options: MinnieVueResolverOptions = {}): ComponentResolver {
    return {
        type: 'component',
        resolve: (name: string) => {
            if (name.startsWith('Min')) {
                const partialName = name.slice(3)
                return {
                    name: `Min${partialName}`,
                    from: '@baberat/minnie-vue/es',
                    sideEffects: getSideEffects(kebabCase(partialName), options),
                }
            }
        },
    }
}
