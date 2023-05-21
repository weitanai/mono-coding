<template>
  <div>
    <VirtualScroll :total="total" :itemHeight="itemHeight" :listHeight="listHeight" @updatePosition="handlePostion">
      <Post :list="subList"></Post>
    </VirtualScroll>
  </div>

  <div class="post-list-footer" v-if="!isMobile">
    <button @click="handlePage(-1)">prev</button>
    {{ pageIndex }}
    <button @click="handlePage(1)">next</button>
  </div>
</template>

<script>
import { getPostLists } from "../../api";
import { getCategoryName } from '../../common/util';
import { isMobile } from '../../utils/tool';
import VirtualScroll from './VirtualScroll.vue';
import Post from './Post.vue';
export default {
  components: {
    VirtualScroll,
    Post
  },
  data() {
    return {
      postList: [],
      pageIndex: 1,
      category: 0, // post category
      total: 0,
      isMobile: false,
      itemHeight: 210,
      start: 0,
      end: 0
    };
  },
  created() {
    this.isMobile = isMobile(navigator.userAgent);
    this.pageIndex = this.$route.query.pageIndex || 1;
    const params = { pageIndex: this.pageIndex, categoryId: this.category, isMobile: this.isMobile }
    this.getPostList(params);
  },
  computed: {
    listHeight() {
      return this.total * this.itemHeight;
    },
    subList() {
      return this.postList.slice(this.start, this.end);
    }
  },
  watch: {

    $route(newVal) {
      const category = newVal.query.category;
      this.pageIndex = 1;
      this.category = category;
      const params = { categoryId: +category, pageIndex: 0, isMobile: this.isMobile }
      this.getPostList(params);
    },


  },
  methods: {
    getCategoryName,
    handlePostion(arg) {
      this.start = arg.start;
      this.end = arg.end;
    },
    getPostList(params) {
      const queryUrl = '/post/list';
      getPostLists(queryUrl, params)
        .then((res) => {
          this.postList = res.list;
          this.total = res.total;
        })
        .catch((err) => console.log(err));
    },
    goToPostContent(id) {
      this.$router.push(`/post/${id}`, { id });
    },

    handlePage(playload) {
      if (Math.ceil(this.total / 6) <= this.pageIndex) {
        return;
      }
      if (this.pageIndex <= 1 && playload < 0) {
        return;
      } else {
        this.pageIndex += playload;
      }
      const params = { categoryId: +this.category, pageIndex: this.pageIndex }
      this.getPostList(params);
    }
  },
};
</script>

<style scoped>
.post-list-wrapper {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  font-size: 14px;
}

.post-wraaper {
  width: 274px;
  height: 210px;
  box-shadow: 0px 5px 13px 0px rgba(0, 0, 0, 0.05);
  margin: 20px;
}

.post-list-footer {
  left: 0;
  bottom: 20px;
  width: 100%;
}
</style>