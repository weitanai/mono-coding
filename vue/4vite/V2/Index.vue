<script setup lang="ts">
import { ref } from 'vue';

import useStore from '../../store/index';
const store = useStore();
let list = ref(store.todos);

function handleChange(id: any) {
  store.changeVaue(id);
}
function handleTodo() {
  console.log('--- todo get')
  list.value = store.doList;
}

function handleUndo() {
  list.value = store.unDoList;
}

function handleDel(id) {
   store.delTodoItem(id);
}
</script>

<template>
  <div>
    <button @click="handleTodo">todo</button>
    <button @click="handleUndo">undo</button>
  </div>
  <div>
    <button @click="store.addTodoItem({id: store.todos.length, todo: Math.random()*100, state: Math.random() > 0.5})"> add item</button>
  </div>
  <table>
    <tbody>
      <tr v-for="(item, index) in list" :key="index">
        <td>{{ item.todo }}</td>
        <td  @click="handleChange(item)">{{ item.state }}</td>
        <td @click="handleDel(item.id)">del</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
