<template>
  <div class="create-post-wrapper">
    <div><button @click="handleCreatePost">post</button></div>
    <div class="content-wrapper">
      <input class="title" placeholder="title" v-model="title" max="30" />
      <input class="author" placeholder="author" v-model="authorName" max="30" />
      <textarea class="content" v-model="content" />
      <div>
        <label for="pet-select">Choose post category</label>
        <select class="select-wrapper" for="category-select" @change="handleChange">
          <option v-for="item in categoryList" :key="item.id" :value="item.id" :selected="category===item.id">
            {{ item.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { createPost, getPostContent, updatePost } from "../../api";
import { categoryList } from '../../common/data.js';

export default {
  data() {
    return {
      title: "",
      content: "",
      authorName: "",
      category: 0,
      isEdit: false,
      id: "",
      categoryList,
    };
  },
  created() {
    const isEdit = this.$route.href.includes("/post/edit");
    this.id = this.$route.params.id;
    this.isEdit = isEdit;
    if (isEdit) {
      const { id } = this.$route.params;
      getPostContent("/post/content", { id })
        .then((res) => {
          const data = res;
          console.log(data);
          this.title = data.title;
          this.content = data.content;
          this.authorName = data.author_name;
          this.category = data.category;
        })
        .catch((err) => console.log(err));
    }
  },
  methods: {
    handleChange(e) {
      this.category = e.target.value;
    },
    handleCreatePost() {
      if (!this.title || !this.content || !this.authorName) {
        alert("please input data");
        return;
      }
      const data = {
        title: this.title,
        content: this.content,
        authorName: this.authorName,
        category: this.category
      };
      if (this.isEdit) {
        updatePost("/post/update", {
          id: +this.id,
          data,
        }).then(res => {
          alert("udpate sucess");
          this.$router.push(`/post/${+this.id}`)
        });
      } else {
        createPost("/post/create", data)
          .then((res) => {
            alert('creat success');
            this.$router.push('/post/list')
          })
          .catch((err) => console.log(err));
      }
    },
  },
};
</script>
<style scoped>
.create-post-wrapper {
  height: 100%;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  padding: 0 20%;
}

.title {
  margin: 30px 0;
  height: 30px;
}

.author {
  margin: 30px 0;
  height: 30px;
}

.content {
  min-height: 100px;
}
.select-wrapper {
  width: 100%;
  height: 40px;
}
</style>