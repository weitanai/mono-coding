import { defineStore } from "pinia";
import { ref, onUnmounted, onMounted } from "vue";


const useStore = defineStore("storeId", {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      todos: [
        { id: 0, todo: "hiking", state: false },
        { id: 1, todo: "read book", state: false },
        { id: 2, todo: "photo", state: true },
      ],
    };
  },
  getters: {
    unDoList(): any[] {
      return this.todos.filter(item => !item.state);
    },
    doList(): any[] {
      return this.todos.filter(item => item.state);
    }
  },
  actions: {
    changeVaue(id) {
      const todo = this.todos.find((item)=> item.id = id);
      if(todo){
        todo.state = !todo.state;
      }
    },
    addTodoItem(item){
      this.todos.push(item);
    },
    delTodoItem(id) {
      this.todos = this.todos.filter(item => item.id !== id);
    }
  }
});

export default useStore;