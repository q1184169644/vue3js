<template>
  <div>简单变量{{num}}</div>
  <button @click="num++">change</button>
  <hr>
  <div>复杂变量{{obj.count}}</div>
  <button @click="obj.count++">change</button>
  <hr>
  <h3>watcheffect的理解</h3>
</template>

<script setup>
import { reactive, ref, watch } from "vue";

let num = ref(0)

let obj = reactive({
    count: 0
})

watch(obj,(newVal,oldVal)=>{
    console.log(newVal.count,oldVal.count)
})

watch(num,(newVal,oldVal)=>{
    console.log(newVal,oldVal)
})
</script>

<style>

</style>