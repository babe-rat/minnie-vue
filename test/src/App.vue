<script setup>
import { ref } from 'vue'
const visible = ref(true)
</script>

<template>
    <div><min-modal v-model="visible"></min-modal></div>
</template>
