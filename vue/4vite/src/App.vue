<template>
  <button @click="increment">{{ count }}</button>
  <button @click="ic">{{ c1 }}</button>
  <V3Index />
</template>

<script setup lang="ts">
import {useCounterStore, useCounter} from './store/Setup'
import V3Index from './components/v3.3/Index.vue';


const store = useCounterStore();

const {increment, count} = store;


const {c1, ic} = useCounter();


</script>
<style scoped>
</style>

