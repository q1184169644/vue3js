<template>
  <div>
    <div v-if="flag">显示1111111111111</div>
    <div v-else>显示2222222222222</div>
    <button @click="flag = !flag">change</button>
    <h1>=====渲染列表=============</h1>
    <ul>
        <li v-for="item in list" :key="item.num">{{item.num}}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

let flag = ref(true)

let list = ref([
    {
        num: 1
    },
    {
        num: 2
    },
    {
        num: 3
    }
])
</script>

<style>

</style>