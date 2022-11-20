import { defineComponent } from 'vue'
import { ElDialog } from 'element-plus/es/components/dialog/index'
import { ElButton } from 'element-plus/es/components/button/index'
import { ElSpace } from 'element-plus/es/components/space/index'

import { createNamespace } from '../utils'

const [name, bem] = createNamespace('modal')

export const modalProps = {
    modelValue: Boolean,
    title: String,
    width: {
        type: [String, Number],
        default: 416,
    },
    destroyOnClose: {
        type: Boolean,
        default: false,
    },
    footer: {
        type: Boolean,
        default: true,
    },
    confirmLoading: {
        type: Boolean,
        default: false,
    },
    cancelText: {
        type: String,
        default: '取消',
    },
    okText: {
        type: String,
        default: '确定',
    },
    okButton: {
        type: Boolean,
        default: true,
    },
    draggable: Boolean,
}

export default defineComponent({
    name,

    props: modalProps,

    emits: ['update:modelValue', 'close', 'closed', 'ok'],

    setup(props, { emit, slots }) {
        const onClose = () => {
            emit('update:modelValue', false)
            emit('close')
        }
        const onClosed = () => emit('closed')
        const onConfirm = () => emit('ok')

        const renderFooter = () => {
            if (!props.footer) {
                return undefined
            }
            if (slots.footer) {
                return <div class={bem('footer')}>{slots.footer()}</div>
            }

            return (
                <div class={bem('footer')}>
                    <ElSpace>
                        <ElButton onClick={onClose}>{props.cancelText}</ElButton>
                        {props.okButton && (
                            <ElButton
                                type="primary"
                                loading={props.confirmLoading}
                                onClick={onConfirm}
                            >
                                {props.okText}
                            </ElButton>
                        )}
                    </ElSpace>
                </div>
            )
        }

        return () => (
            <ElDialog
                class={bem()}
                model-value={props.modelValue}
                title={props.title}
                width={props.width}
                destroyOnClose={props.destroyOnClose}
                draggable={props.draggable}
                onClose={onClose}
                onClosed={onClosed}
                v-slots={{
                    footer: () => renderFooter(),
                }}
            >
                <div class={bem('content')}>{slots.default && slots.default()}</div>
            </ElDialog>
        )
    },
})
