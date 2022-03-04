<template>
  <input
    type="text"
    v-model="myName"
    @click="handleEdit"
    class="search-input-border"
    @change="testEmit"
  />
  {{ user }}
  {{ msg }}
</template>
<script setup>
import { computed, defineEmits, defineProps, ref, toRefs } from "vue";
import { reactive } from "vue";
defineProps({
  msg: String,
});
const emit = defineEmits(["test"]);
const myName = ref("test");
const myObj = reactive({
  name: "sali",
  age: "18",
});
const { name, age } = toRefs(myObj);
const handleEdit = () => {
  age.value = "22";
  name.value = "测试";
};
const user = computed(() => {
  return `年龄${age.value},名字${myName.value}`;
});
const testEmit = () => {
  emit("test", "test-emit");
};
</script>
<style>
.search-input-border {
  border:1px solid red;
}
</style>
