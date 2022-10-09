<script setup lang="ts">
import { ref } from 'vue';
import {addCount, delCount} from './count';

defineProps<{ msg: string }>()

const count = ref(0)

function localAdd() {
  count.value = addCount(count.value, 1);
}

function localDel() {
  count.value = delCount(count.value, 1);
}

</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="localAdd">add </button> 
    <span>{{count}}</span>
  <button @click="localDel">del</button>
</template>

<style scoped>
</style>
