<script>
import { getPostUserList } from '../../api';
export default {
    data: () => {
        return {
            userList: [],
        }
    },
    created() {
        getPostUserList('user/list').then(res => {
            this.userList = res;
        });
    },
    methods: {
        handleUser(userName) {
            this.$router.push(`user/postlist?author_name=${userName}`);
        },
    }
}
</script>


<template>
    <h1>it is a user list</h1>
    <ul class="user-list-wrapper">
        <li class="user-list-item" v-for="(item, index) in userList" :key="index" @click="handleUser(item)">
            name: {{ item }}
        </li>
    </ul>
</template>

<style>
.user-list-wrapper {
    display: flex;
    flex-wrap: wrap;
}

.user-list-item {
    list-style: none;
    width: 274px;
    line-height: 210px;
    height: 210px;
    box-shadow: 0px 5px 13px 0px rgba(0, 0, 0, 0.05);
    margin: 20px;
}
</style>