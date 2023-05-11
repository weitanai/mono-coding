<script setup>
import { ref, computed, onMounted, reactive } from 'vue'

// 响应式状态
const count = ref(0)

// 用来修改状态、触发更新的函数
function increment() {
  count.value++
}

const plusOne = computed(()=> count.value + 1);

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="plusOne">Count is: {{ count }}</button>
</template>
