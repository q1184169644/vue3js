<template>
  <div>
    <h1>题目是{{title}}</h1>
    <myChild v-model:title="title"></myChild>
  </div>
</template>

<script setup>
import { ref } from "vue";
import myChild from './component/MyChild.vue'

const title = ref('刘哥')
</script>

<style>

</style>