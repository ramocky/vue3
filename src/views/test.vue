<template>
  <div>我是父组件</div>
  <hello-world :msg=propsMsg @test="test"></hello-world>
</template>
<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import {ref} from "vue";
function test(val){
  console.log(val)
}
const propsMsg=ref('子组件')
</script>
<style></style>
