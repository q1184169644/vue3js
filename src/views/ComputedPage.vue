<template>
    <div>
        作者的全名是 {{fullName}}
        <button @click="author.firstName='刘'">change</button>
    </div>
</template>

<script setup>
// 计算属性具有缓存属性
import { computed, ref } from "vue";

let author = ref({
    firstName: 'liu',
    lastName: 'Wanli'
})

let fullName = computed(()=>{
    return author.value.firstName + author.value.lastName
})


</script>

<style>

</style>