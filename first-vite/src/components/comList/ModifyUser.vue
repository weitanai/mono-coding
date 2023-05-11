<template>
    <div class="back-cover">
        <div  class="modify-user-wrapper">
        <h1>modeify User</h1>
        <div>
            name: <input type="text" :value="props.name" @input="name = $event.target.value">
        </div>
        <div>
            age: <input type="text" :value="props.age" @input="age = $event.target.value">
        </div>
        <div>
            <input @change="handleFileChange" type="file" name="avater" accept="imgage/png, image/jpg imgge/jpeg" />
        </div>
    </div>
    </div>
  
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    name: String,
    age: Number,
    avatar: String,
    id: Number,
})


</script>

<style scoped>
.back-cover {
    height: 100%;
    width:100%;
    background: gray;
}
.modify-user-wrapper {
    height: 400px;
    width: 400px;
    position: fixed;
    top: 50%;
    left: 50%;
}
</style>