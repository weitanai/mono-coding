<template>
    <div>
        <input v-model="modelValue" />
        <div> defineModel value{{ modelValue }}</div>
    </div>
</template> 

<script setup lang="ts"> 
const modelValue = defineModel()
console.log(modelValue.value)

</script> 

<style scoped>

</style>