<script setup>
const data = 'inside of slot';

</script>

<template>
  <div class="slot-wrapper">
    <slot>default value of slot</slot>
  </div>
</template>

<style scoped>
.slot-wrapper {
    
}
</style>
