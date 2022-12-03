# 主题

该组件库基于 element-plus 基础上二次封装，当你使用 element-plus 提供的自定义主题方式切换时，也适用于 minnie-vue。

## 通过 SCSS 变量

具体参考 element-plus [文档](https://element-plus.gitee.io/zh-CN/guide/theming.html#%E9%80%9A%E8%BF%87-scss-%E5%8F%98%E9%87%8F)

**如何覆盖它？**

如果您的项目也使用了 SCSS，可以直接修改 Element Plus 的样式变量。 新建一个样式文件，例如 styles/element/index.scss：

```scss
// styles/element/index.scss
/* 只需要重写你需要的即可 */
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
    $colors: (
        'primary': (
            'base': green,
        ),
    )
);
```

**按需导入时自定义主题**

```ts
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { MinnieVueResolver } from '@baberat/minnie-vue-resolver'

// vite.config.ts
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
    ],
})
```
