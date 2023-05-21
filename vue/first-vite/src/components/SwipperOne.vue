<template>
  <p>swiper is postion use and index;</p>
  <div class="container">
    <div class="img-wrapper" id="imgWrapper">
      <img :src="first" id="first" />
      <img :src="second" id="second" />
      <img :src="third" id="third" />
    </div>
  </div>
  <ul>
    <li
      v-for="index in indexArr"
      :key="indexArr"
      @click="goToIndex(index)"
      :class="{ current: index === currentIndex + 1 }"
    >
      {{ index }}
    </li>
  </ul>
  <button @click="goToLeft">left</button>
  <button @click="goToRight">right</button>
</template>
<script>
import first from "../../../assets/first.jpeg";
import second from "../../../assets/second.jpeg";
import third from "../../../assets/third.jpeg";
export default {
  data() {
    return {
      first,
      second,
      third,
      currentIndex: 0,
      goToWidth: 224,
      indexArr: [1, 2, 3],
      imgLength: 3,
    };
  },
  mounted() {
    // const timer = setInterval(() =>{
    //     this.goToRight();
    // }, 2000)
  },
  beforeDestroy() {
    clearInterval(timer);
  },
  methods: {
    goToRight() {
      const currentIndex = (this.currentIndex + 1) % this.imgLength;
      const imgWrapper = document.getElementById("imgWrapper");
      imgWrapper.style.transform = "0.5s";
      const left = imgWrapper.style.left;
      imgWrapper.style.left = `-${currentIndex * 224}px`;
      this.currentIndex = currentIndex;
    },
    goToLeft() {
      let currentIndex = (this.currentIndex - 1) % this.imgLength;
      if (currentIndex < 0) {
        currentIndex = 2;
      }
      const imgWrapper = document.getElementById("imgWrapper");
      imgWrapper.style.transform = "0.5s";
      const left = imgWrapper.style.left;
      imgWrapper.style.left = `-${currentIndex * 224}px`;
      this.currentIndex = currentIndex;
    },
    goToIndex(index) {
      if (index === this.currentIndex + 1) return;
      console.log('goto index');
      const currentIndex = (index - 1) % this.imgLength;
      const imgWrapper = document.getElementById("imgWrapper");
      imgWrapper.style.transform = "0.5s";
      const left = imgWrapper.style.left;
      imgWrapper.style.left = `-${currentIndex * 224}px`;
      this.currentIndex = currentIndex;
    },
  },
};
</script>

<style scoped>
.container {
  height: 224px;
  width: 224px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
}
.img-wrapper {
  display: flex;
  height: 224px;
  position: absolute;
  left: 0;
}
img {
  height: 224px;
  width: 224px;
}
ul {
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 0;
}
li {
  width: 20px;
  background: gray;
  border-radius: 50%;
  margin: 10px;
}
.current {
  background: yellow;
}
</style>
