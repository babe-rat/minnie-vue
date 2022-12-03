<template>
    <min-config-provider :locale="enUS">
        <a @click="visible = true" type="primary">打开</a>
        <a @click="switchLocale">国际化切换</a>
        <min-modal v-model="visible"></min-modal>
    </min-config-provider>
</template>

<script setup>
import { ref } from 'vue'
import { Locale } from '@baberat/minnie-vue'
import enUS from '@baberat/minnie-vue/es/locale/lang/en-US'
const visible = ref(false)

function switchLocale() {
    Locale.use('en-US', enUS)
}
</script>
