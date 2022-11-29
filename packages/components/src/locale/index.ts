import { ref, reactive } from 'vue'
import defaultMessages from './lang/zh-CN'
import { deepAssign } from '../utils/deep-assign'

export type TranslatePair = {
    [key: string]: string | string[]
}

export type Language = {
    name: string
    min: TranslatePair
}

type Message = Record<string, any>
type Messages = Record<string, Message>

const lang = ref('zh-CN')
const messages = reactive<Messages>({
    'zh-CN': defaultMessages,
})

export const Locale = {
    messages(): Message {
        return messages[lang.value]
    },

    use(newLang: string, newMessages?: Message) {
        lang.value = newLang
        this.add({ [newLang]: newMessages })
    },

    add(newMessages: Message = {}) {
        deepAssign(messages, newMessages)
    },
}

export default Locale
