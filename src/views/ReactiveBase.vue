// vue的响应式基础
<template>
  <div>
    <div>数字是{{num}}</div>
    <button @click="add()">add</button>
    <div>state的值{{state}}</div>
    <button @click="state.count++">change</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { reactive } from 'vue'

// ref的使用
let num = ref(0)
function add() {
  num.value++
}

// reactive的使用
const state = reactive({ count: 3 })


</script>

<style>

</style>

