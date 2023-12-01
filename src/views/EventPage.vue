<template>
  <div>
    <button @click="getNum('1111',$event)">事件</button>
    <button @click="(event)=>{getNum('2222',event)}">事件</button>
  </div>
</template>

<script setup>
function getNum(msg, e) {
    console.log(msg)
    console.log(e.target.tagName)
}
</script>

<style>

</style>