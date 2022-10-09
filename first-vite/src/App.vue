<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Swipper from './components/Swipper.vue';
import {getData, postData} from './api';

export default {
  data() {
    return {
      message: ''
    }
  },
  components: {
    Swipper
  },
  // methods: {
  //   get(url){
  //     getData(url);
  //   },
  //   post(url) {
  //     const mockParams = {
  //       mock: 'data',
  //       parmas: this.message
  //     };
  //     postData('/create' , mockParams);
  //   }
  // },
}


</script>

<template>
    <!-- <div>{{message}}</div>
    <button @click="get(`/get?msg=${ encodeURIComponent(message)}`)">get Data</button>
    <button @click="post">posts Data</button> -->
    <Swipper/>
    <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
