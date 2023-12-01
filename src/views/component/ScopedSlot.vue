<template>
  <div v-for="item in list" :key="item.id">
    <slot name="text" :item="item">
        {{item.id}} {{item.content}}
    </slot>
  </div>
</template>

<script setup>
defineProps(['list'])
</script>

<style>

</style>