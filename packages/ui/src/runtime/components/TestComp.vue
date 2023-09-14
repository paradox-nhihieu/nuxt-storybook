<script setup lang="ts">
import {ref } from 'vue'
const btnText = ref('test')
</script>

<template>
  <button class="test">{{ btnText }}</button>
</template>
