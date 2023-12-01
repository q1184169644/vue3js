<template>
  <div>孙子组件接收到参数：{{title}}</div>
  <button @click="changeTitle('222222222222222')">changec props</button>
</template>

<script setup>
import { inject } from 'vue'

const {title, changeTitle} = inject('title')
</script>

<style>

</style>