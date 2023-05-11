<template>
    <div>
        <h1> created user</h1>
        <div>
            <div>
                name: <input type="text" :value="name" @input="name = $event.target.value">
            </div>
            <div>
                age: <input type="text" :value="age" @input="age = $event.target.value">
            </div>
            <div>
                <input @change="handleFileChange" type="file" name="avater" accept="imgage/png, image/jpg imgge/jpeg" />
            </div>
        </div>
        <button @click="handleCreate">
            create use
        </button>
    </div>
</template>
<script setup>
import {login} from '../../api'
import { ref } from 'vue';
import router from '../../router/index';

const name = ref('');
const age = ref(undefined);
const avatar = ref('');


function blobToBase64(blob) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => resolve(reader.result);
    });
}
function handleFileChange(e) {
    const blob = e.target.files[0];
    blobToBase64(blob).then(res => avatar.value = res).catch(err => console.error(err));

}

function handleCreate() {
    if (!name.value || !age.value || !avatar.value) {
        console.log('please input data');
        return;
    }
    const data = { name: name.value, age: age.value, avatar: avatar.value };
    login('/user/createUser', data).then(res => {
        console.log(res)
        cancel();
    }).catch(err => console.log(err)).finally(()=>{
        router.push('/user/list');

    });
    
}
</script>
<style scoped></style>