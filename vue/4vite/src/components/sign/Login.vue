<template>
    <div class="login-wrapper">
        <div class="input-container"><span>email:</span> <input placeholder="user email" v-model="email"> </div>
        <div class="input-container"><span>password:</span> <input placeholder="user password" v-model="password"> </div>
        <div class="submit-confirm">
            <button @click='login' >submit</button>
        </div>
    </div>
</template>

<script  lang="ts">
import {signInWithEmail} from '../../supe/auth';
import useStore from '../../store';
export default {
        data() {
            return { 
                email: '987346185@qq.com',
                password: 'weitanai1Q',
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
                if (!this.email || !this.password ) {
                    return;
                }
                signInWithEmail(this.email, this.password ).then(res=> {
                    const {data, error} = res;

                    if (error) {
                        console.error('error', error);
                    } else {
                        const store = useStore();
                        store.setUserInfo(data);
                        this.$router.push('/');
                    }
                }).catch(err=> console.log(err));
            },
            
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