---
map:
    path: /component/modal
---

# Modal 对话框

模态对话框。

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

## 基础用法

<demo src="./demo/demo.vue"
  title="基本"
  desc="第一个对话框。">
</demo>

## 属性

| 属性名                | 说明                            | 类型                 | 可选值 | 默认值 |
| --------------------- | ------------------------------- | -------------------- | ------ | ------ |
| model-value / v-model | 是否显示对话框                  | `boolean`            | -      | -      |
| title                 | 标题                            | `string`             | -      | -      |
| width                 | 宽度                            | `string` \| `number` | -      | 416    |
| destroyOnClose        | 当关闭 Modal 时，销毁其中的元素 | `boolean`            | -      | false  |
| footer                | 是否显示底部内容                | `boolean`            | -      | true   |
| confirmLoading        | 确定按钮 loading                | `boolean`            | -      | false  |
| cancelText            | 取消按钮文字                    | `string`             | -      | 取消   |
| okText                | 确认按钮文字                    | `string`             | -      | 确认   |
| okButton              | 是否显示确认按钮                | `boolean`            | -      | true   |
| draggable             | 是否可拖拽                      | `boolean`            | -      | false  |

## 事件

| 事件名 | 说明                       | 参数 |
| ------ | -------------------------- | ---- |
| close  | 对话框关闭的回调           | -    |
| closed | 对话框关闭动画结束时的回调 | -    |
| ok     | 点击确定回调               | -    |
