<template>
    <div>
        <h1>user List </h1>
        <div>
            <button @click="reset">reset all</button>
            <p>it is filter option</p>
            <button @click="filterAge">get age </button>
        </div>
        <table class="user-table">
            <tr>
                <th>name</th>
                <th>age</th>
                <th>avatar</th>
                <th>
                    operation
                </th>
            </tr>
            <tr v-for="(item, index) in list" :key="item.name + item.age">
                <td>{{ item.name }}</td>
                <td>{{ item.age }}</td>
                <td class="user-avatar-wrapper">
                    <img class="user-avatar" :src="item.avatar">
                </td>
                <td>
                    <button class="modify-btn" @click="modify(item)">
                        modify
                    </button>
                    <button @click="deluser(item.id)">
                        delete
                    </button>
                </td>
            </tr>
        </table>
    </div>
    <div v-if="isShow" class="back-cover">
        <div class="modify-user-wrapper">
            <h1>modeify User</h1>
            <div>
                name: <input type="text" :value="currentValue.name" @input="currentValue.name = $event.target.value">
            </div>
            <div>
                age: <input type="text" :value="currentValue.age" @input="currentValue.age = $event.target.value">
            </div>
            <div>
                <!-- <input @change="handleFileChange" type="file" name="avater" accept="imgage/png, image/jpg imgge/jpeg" /> -->
            </div>
            <div>
                <button @click="submtClick">ok</button>
                <button @click="isShow = false">cancel</button>
            </div>
        </div>
    </div>
    <div>
        <button>prev</button>
        <button @click="handlePageChange">next</button>

    </div>
</template>

<script setup lang="ts">

import { ref, Ref, reactive } from 'vue';
import { postBaseData, delUserList, modifyUser } from '../../api';
import useList from '../use/useList';

const userList = ref<Object[]>([]);
const isShow = ref(false);
let currentValue = reactive({
    name: '',
    id: undefined,
    age: undefined,
    avatar: ''
});
const page = ref(1);
const name = ref('');
const age = ref(0);
const filterOption = ref<{ name: Ref<string>, age: Ref<number> }>({ name, age });

const { list, curPage, loadData, reset } = useList(getList, { filterOption });


function handlePageChange() {
    curPage.value = curPage.value + 1;
    console.log('page change');
}

function getList(params: Object) {
    console.log('before fetch --')
    return postBaseData('cmp/user/list', params)
}

function filterAge() {
    const age = 22;
    loadData(1, { age });
}

function deluser(id) {
    if (!id) return;
    console.log('get id', id);
    delUserList('user/delete', { id })
        .then(() => {
            alert('delete user success');
            getList();
        })
        .catch(console.log);
}

function modify(user) {
    isShow.value = true;
    console.log(isShow.value, '--')
    currentValue.id = user.id;
    currentValue.age = user.age;
    currentValue.name = user.name;
    currentValue.avatar = user.avatar;
}
function submtClick() {
    modifyUser('/user/modify', currentValue)
        .then(res => {
            alert('modify success');
            console.log(res);
            isShow.value = false;

        })
        .catch(console.log)
        .finally(() => getList());
}

</script>

<style scoped>
.user-table {
    width: 100%;
    padding: 50px
}

.user-avatar {
    display: inline-block;
    height: 50px;
    width: 50px;
}

.modify-btn {
    margin-right: 20px;
}

.back-cover {
    height: 100%;
    width: 100%;
    background: gray;
}

.modify-user-wrapper {
    height: 400px;
    width: 400px;
    position: fixed;
    top: 50%;
    left: 50%;
}
</style>