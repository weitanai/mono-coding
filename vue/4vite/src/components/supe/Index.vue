
<template>
    <ul class="country-container">
      <li class="country-item" v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
  </template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import supabase from '../../supe'

const countries = ref<any[]>([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data || []
}

onMounted(() => {
  getCountries()
})
</script>
<style scoped>
.country-container {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.country-item {
  list-style: none;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
  flex: 0 0 20%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 0 16px 16px 0;
}

</style>