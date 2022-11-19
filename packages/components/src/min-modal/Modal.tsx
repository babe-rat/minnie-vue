import { defineComponent } from 'vue'
import { ElDialog } from 'element-plus/es/components/dialog/index'

export const modalProps = {
    modelValue: Boolean,
}

export default defineComponent({
    props: modalProps,

    emits: ['update:modelValue', 'close', 'closed'],

    setup(props, { emit }) {
        const onClose = () => {
            emit('update:modelValue', false)
            emit('close')
        }
        const onClosed = () => emit('closed')

        return () => (
            <ElDialog
                model-value={props.modelValue}
                onClose={onClose}
                onClosed={onClosed}
            ></ElDialog>
        )
    },
})
