<script>
import { getUserPostList } from '../../api';
export default {
    name: 'UserPostList',
    data: () => {
        return {
            userPostList: [],
        }
    },
    watch: {
        $router(to) {
            console.log(to)
        }
    },
    created() {
        const { author_name } = this.$route.query;
        getUserPostList(`user/postlist?author_name=${author_name}`).then(res => {
            this.userPostList = res;
        });
    },
    methods: {
        goToPostContent(id) {
            this.$router.push(`/post/${id}`, { id });
        },
    }
}
</script>


<template>
    <h1>it is a user post list</h1>
    <ul>
        <li class="post-item" v-for="(item, index) in userPostList" :key="index" @click="goToPostContent(item.id)">
            <div>
                {{ item.title }}
            </div>
            <div>
                name: {{ item.author_name }}
            </div>
            <div>{{ item.content }}</div>
        </li>
    </ul>
</template>

<style>
ul {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
}

.post-item {
    list-style: none;
    width: 274px;
    height: 210px;
    box-shadow: 0px 5px 13px 0px rgba(0, 0, 0, 0.05);
    margin: 20px;
}
</style>