import { defineStore } from "pinia";


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
      countryList: [],
      userInfo: {},
    };
  },
  getters: {
    unDoList(): any[] {
      return this.todos.filter(item => !item.state);
    },
    doList(): any[] {
      return this.todos.filter(item => item.state);
    },
    getCountList(): any[]{
      return this.countryList;
    },
    getUserInfo(): any{
      return this.userInfo;
    },
  },
  actions: {
    changeVaue(id: number) {
      const todo = this.todos.find((item)=> item.id = id);
      if(todo){
        todo.state = !todo.state;
      }
    },
    addTodoItem(item: any){
      this.todos.push(item);
    },
    delTodoItem(id: number) {
      this.todos = this.todos.filter(item => item.id !== id);
    },
    setUserInfo(userInfo: any){
      this.userInfo = userInfo;
    }
  }
});

export default useStore;