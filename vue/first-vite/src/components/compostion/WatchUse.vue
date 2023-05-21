<script setup>
import { reactive, watch, ref } from 'vue';

let count = 2;
const loadData = (data) =>
  new Promise((resolve) => {
    count--;
    setTimeout(() => {
      resolve(`返回的数据为${data}`);
    }, count * 1000);
  });

const state = reactive({
  name: '张三',
});

const data = ref('');

watch(
  () => state.name,
  (newValue) => {
    loadData(newValue).then((res) => {
      data.value = res;
    });
  }
);

setTimeout(() => {
  state.name = '李四';
}, 100);
setTimeout(() => {
  state.name = '王五';
}, 200);
</script>

<template>
  <div>{{ data }}</div>
</template>