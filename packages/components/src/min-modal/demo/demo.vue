<template>
    <el-button type="primary" @click="showModal">Open Modal</el-button>
    <min-modal v-model="visible"></min-modal>
</template>

<script setup>
import { ref } from 'vue'
import { MinModal } from '@baberat/minnie-vue'

const visible = ref(false)

function showModal() {
    visible.value = true
}
</script>
