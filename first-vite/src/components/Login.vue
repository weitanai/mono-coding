<template>
    <div class="login-wrapper">
        <div class="input-container"><span>name:</span> <input placeholder="user name" v-model="name"> </div>
        <div class="input-container"><span>age:</span> <input placeholder="user age" v-model="age"> </div>
        <img v-if="avatar" :src="avatar" />
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
                name: 'hello',
                age: '123',
                avatar: '',
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
                if (!this.name || !this.age ) {
                    alert('please input data');
                    return;
                }
                const data = {name: this.name, age: this.age};
                login('/login', data ).then(res=> {
                    const userInfo = ({name: res.name, avatar: res.avatar, age: res.age})
                    this.$store.commit('SET_USER_INFO', userInfo);
                    this.cancel(res.name, res.avatar);
                    this.$router.push('/post/list')
                }).catch(err=> console.log(err));
            },
            cancel(name, avatar) {
                this.$emit('cancelLogin', {name, avatar});
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