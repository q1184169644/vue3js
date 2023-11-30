// vue的模板语法
<template>
  <div :id="buttonId">
    {{msg}}
  </div>
</template>

<script setup>
import { ref } from "vue";

let msg = ref('message')
let buttonId = ref('buttonId')
</script>

<style>

</style>
