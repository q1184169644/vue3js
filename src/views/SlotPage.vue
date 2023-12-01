<template>
  <div>
    <h3>默认插槽</h3>
    <DefaultSlot>我是插槽</DefaultSlot>
    <hr>
    <!-- 具名插槽 -->
    <h3>居民插槽</h3>
    <NameSlot>
      <template #header>
        <h1>Here might be a page title</h1>
      </template>

      <p>内容默认1</p>

      <template #footer>
        <p>footer</p>
      </template>
      <p>内容默认2</p>
    </NameSlot>
    <!-- 作用域插槽 -->
    <hr>
    <h3>作用域插槽</h3>
    <p>作用域插槽可以拓展组件，让用户自己去配置想要的内容</p>
    <ScopedSlot :list="list">
        <template #text="slotProps">
            {{slotProps.item.content + '   特殊内容'}}
        </template>
    </ScopedSlot>
  </div>
</template>

<script setup>

import { ref } from "vue";
import DefaultSlot from "./component/DefaultSlot.vue";
import NameSlot from "./component/NameSlot.vue";
import ScopedSlot from './component/ScopedSlot.vue'
const list = ref([
    {
        id: 1,
        content: '11111111'
    },
    {
        id: 2,
        content: '22222222'
    },
    {
        id: 3,
        content: '3333333'
    },
])
</script>

<style>
</style>