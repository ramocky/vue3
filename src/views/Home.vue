<template>
  <button @click="inc">{{ userName }}</button>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    const userName = ref('无名')
    const inc = () => userName.value = '测试'
    return {
      userName,
      inc
    }
  }
}
</script>
