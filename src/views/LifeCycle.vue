<template>
  <div>{{num}}</div>
  <button @click="num++">add</button>
</template>

<script setup>
import { onMounted, onUnmounted, onUpdated, ref } from "vue";

let num = ref(0)
onMounted(()=>{
    console.log('挂载')
})

onUpdated(()=>{
    console.log('更新')
})

onUnmounted(()=>{
    console.log('卸载')
})


</script>

<style>

</style>