<template>
  <div>{{content}}</div>
  <button @click="change">子组件的button改变父组件船只</button>
</template>

<script setup>
const props = defineProps(['content', 'id'])
console.log(props.content,props.id)
const emit = defineEmits(['changeConent'])
function change() {
    emit('changeConent','msg')
}

</script>

<style>

</style>