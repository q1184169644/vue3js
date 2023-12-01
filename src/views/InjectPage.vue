<template>
  <div>
    爷爷组件
    <MySon></MySon>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import MySon from './component/MySon.vue'

const count = ref(0)
const title = ref('刘哥')
function changeTitle(val) {
    title.value = val
}
provide('key', count)
provide('title', {
    title,
    changeTitle
})
</script>

<style>

</style>