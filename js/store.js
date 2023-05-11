class Store{
    constructor(options = {}){
       this._actions = Object.create(null);
    // bind commit and dispatch to self
        // 给自己 绑定 commit 和 dispatch
        const store = this
        const { dispatch, commit } = this
        // 为何要这样绑定 ?
        // 说明调用commit和dispach 的 this 不一定是 store 实例
        // 这是确保这两个函数里的this是store实例
        this.dispatch = function boundDispatch (type, payload) {
            console.log('what is this ')
            return dispatch.call(store, type, payload)
        }
        this.commit = function boundCommit (type, payload, options) {
          return commit.call(store, type, payload, options)
        }
    }
    dispatch(){
       console.log('dispatch', this);
    }
    commit(){
       console.log('commit', this);
    }
  }
  const store = new Store();
  store.dispatch(); // 输出结果 this 是什么呢？
  
//   const { dispatch, commit } = store;
//   dispatch(); // 输出结果 this 是什么呢？
//   commit();  // 输出结果 this 是什么呢？
  
  
