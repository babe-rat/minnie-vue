# 快速上手

## 介绍

基于 element-plus 封装的 Vue3 组件库

## 安装

```cmd
pnpm add @baberat/minnie-vue -S
```

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```js
// main.ts
import { createApp } from 'vue'
import MinnieVue from '@baberat/minnie-vue'
import '@baberat/minnie-vue/es/style'
import App from './App.vue'

const app = createApp(App)

app.use(MinnieVue)
app.mount('#app')
```

### 按需加载

首先你需要安装 `unplugin-vue-components`, `unplugin-auto-import`, `@baberat/minnie-vue-resolver`

```shell
pnpm add -D unplugin-vue-components unplugin-auto-import @baberat/minnie-vue-resolver
```

然后把下列代码插入到你的 Vite 或 Webpack 的配置文件中

**Vite**

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { MinnieVueResolver } from '@baberat/minnie-vue-resolver'

export default defineConfig({
    // ...
    plugins: [
        // ...
        AutoImport({
            resolvers: [MinnieVueResolver()],
        }),
        Components({
            resolvers: [MinnieVueResolver()],
        }),
    ],
})
```

**Webpack**

```ts
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { MinnieVueResolver } = require('@baberat/minnie-vue-resolver')

module.exports = {
    // ...
    plugins: [
        AutoImport({
            resolvers: [MinnieVueResolver()],
        }),
        Components({
            resolvers: [MinnieVueResolver()],
        }),
    ],
}
```
