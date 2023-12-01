<template>
  <div>组件基础/进阶</div>
  <BlogPost :content="content" id="001" @changeConent="changeConent"></BlogPost>
</template>

<script setup>
import { ref } from 'vue'
import BlogPost from './component/BlogPost.vue'
let content = ref('第一篇博客')
function changeConent(val) {
    console.log(val)
    content.value = '改变之后的content'
}
</script>

<style>

</style>