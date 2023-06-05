<template>
  <div>
    <input type="your email" v-model="email">
  </div>
  <div>
    <button @click="sendMagicLink">submit</button>
  </div>
</template>

<script lang="ts">
import { signInWithOtp } from '../../supe/auth';
export default {
  data() {
    return {
      email: '987346185@qq.com',
    }
  },
  methods: {
    sendMagicLink() {
      console.log('sendmagic')
      signInWithOtp(this.email, 'http://localhost:3000/' ).then(res => {
        const { data, error } = res;
        if (error) {
          console.error('error', error);
        } else {
          console.log('data', data);
        }
      }).catch(err => console.log(err));
    }
  }
}
</script>

<style scoped></style>