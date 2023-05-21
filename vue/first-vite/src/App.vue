<script>
import Header from './components/Header.vue';
import RenderEvent from './components/reactive/RenderEvent.vue';
export default {
  components: {
    Header,
    RenderEvent
  },
  data: () => {
    return {
      include: [],
      color: '',
    }
  },

  created(){
      const url = new URL('../favicon.ico', import.meta.url);
      this.url = url;
  },
  methods: {
    handleColor(color) {
      console.log(color, 'app');
      this.color = color;
    }
  },
  watch: {
    $route(to, from) {
      //如果 要 to(进入) 的页面是需要 keepAlive 缓存的，把 name push 进 include数组
      if (to.meta.keepAlive) {
        !this.include.includes(to.name) && this.include.push(to.name);
      }
      //如果 要 form(离开) 的页面是 keepAlive缓存的，
      //再根据 deepth 来判断是前进还是后退
      //如果是后退
      if (from.meta.keepAlive && to.meta.deepth < from.meta.deepth) {
        var index = this.include.indexOf(from.name);
        index !== -1 && this.include.splice(index, 1);
      }
    }
  }
}
</script>


<template>
  <div class="app" :style="{background: color}"> 
    <Header @changeColor="handleColor" ></Header>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
.app {
  text-align: center;
  color: #2c3e50;
  background: @bg-golor;
}

html body {
  width: 100%;
  height: 100%;
  margin: 0;
}

.login-logout-wrapper {
  display: flex;
  padding-right: 30px;
  justify-content: space-between;
  padding: 30px;
}

.user-avatar {
  height: 24px;
  width: 24px;
  border-radius: 50%;
}

.header-right-side {
  display: flex;
}

.header-right-side>button {
  margin-right: 20px;
}
</style>