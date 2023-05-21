<template>
    <div @click="()=>handleFatherClick()">
        <button @click="handleChildClick">child</button>
    </div>
</template>


<script setup>
import { ref} from 'vue';

const bol = ref(false);

function handleChildClick() {
    console.log('---child click');
    bol.value = true;
}

function handleFatherClick() {
    if (bol.value) {
        console.log('father click');
    }
}

</script>