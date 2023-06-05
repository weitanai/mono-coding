<template>
    <div v-if="isShow" class="login-wrapper">
        <div class="input-container"><span>name:</span> <input placeholder="user name" v-model="name"> </div>
        <div class="input-container"><span>age:</span> <input placeholder="user age" v-model="age"> </div>
        <input @change="handleFileChange" type="file"  name="avater" accept="imgage/png, image/jpg imgge/jpeg" />
        <div class="submit-confirm">
            <button @click='login' >submit</button>
            <button style="marginLeft: 10px" @click="cancel" >cancel</button>
        </div>
    </div>
</template>

<script>
import {login} from '../api'
    export default {
        data() {
            return { 
                name: '',
                avatar: '',
                age: '',
            }
        },
        props: {
            isShow: {
                type: Boolean,
                default: false,
            },
        },
        methods: {
            login() {
                if (!this.name || !this.age || !this.avatar) {
                    alert('please input data');
                    return;
                }
                const data = {name: this.name, age: this.age, avatar: this.avatar};
                login('/user/createUser', data ).then(res=> {
                    console.log(res)
                    this.cancel();
                }).catch(err=> console.log(err));
            },
            cancel() {
                this.$emit('cancelLogin');
            },
            handleFileChange(e){
                const blob = e.target.files[0];
                this.blobToBase64(blob).then(res=>this.avatar= res).catch(err=>console.error(err));

            },
            blobToBase64(blob) {
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = () => resolve(reader.result);
                });
             }
        }
    }
</script>

<style scoped>
.login-wrapper {
    height: 400px;
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    background: rgb(195, 191, 191);
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.input-container {
    margin: 10px;
}
.submit-confirm {
    margin-top: 30px;
}
</style>