<template>
  <div>
    <h1>==========改变class==========</h1>
    <div :class="[isActive ? 'active' : '', 'errorClass']">class</div>
    <button @click="isActive = !isActive">change</button>
    <h1>==========改变style==========</h1>
    <div :style="{color: isActive? 'red' : 'black'}">hhhhh</div>
    <div :style="styleObj">computed</div>
    <div :style="styleObj1">reactive不行</div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";

let isActive = ref(true)
let styleObj1 = reactive({
    color: isActive.value? 'red' : 'black'
})
let styleObj = computed(()=>{
    return {
        color: isActive.value? 'red' : 'black'
    }
})

</script>

<style>

</style>