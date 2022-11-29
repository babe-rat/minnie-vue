# 国际化

`@baberat/minnie-vue` 采用中文作为默认语言，同时支持多语言切换，请按照下方教程进行国际化设置。

## 使用方法

### 多语言切换

@baberat/minnie-vue 通过 Locale 组件实现多语言支持，使用 Locale.use 方法可以切换当前使用的语言。

```ts
import { Locale } from '@baberat/minnie-vue'
import enUS from '@baberat/minnie-vue/es/locale/lang/en-US'

Locale.use('en-US', enUS)
```

### 覆盖语言包

通过 Locale.add 方法可以实现文案的修改和扩展，示例如下：

```ts
import { Locale } from '@baberat/minnie-vue'

const messages = {
    'zh-CN': {
        min: {
            modal: {
                cancelText: '取消',
                okText: '关闭', // 将'确认'修改为'关闭'
            },
        },
    },
}

Locale.add(messages)
```

## ConfigProvider

@baberat/minnie-vue 还提供了一个 Vue 组件 ConfigProvider 用于全局配置国际化的设置。

```vue
<template>
    <min-config-provider :locale="enUS">
        <app />
    </min-config-provider>
</template>

<script setup>
import { Locale } from '@baberat/minnie-vue'
import enUS from '@baberat/minnie-vue/es/locale/lang/en-US'
</script>
```

## 语言包

支持的语言列表

| 语言     | 文件名 |
| -------- | ------ |
| 英语     | en-US  |
| 简体中文 | zh-CN  |
