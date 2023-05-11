<template>
  <button @click="increment">{{ count }}</button>
  <button @click="ic">{{ c1 }}</button>
  <Cmp/>
</template>

<script setup lang="ts">
import Cmp from './components/Cmp.vue';
import {useCounterStore, useCounter} from './store/Setup'

import {isRef} from 'vue';

const store = useCounterStore();

const {increment, count} = store;


const {c1, ic} = useCounter();


</script>
<style scoped>
</style>

