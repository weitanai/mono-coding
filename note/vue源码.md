# vue渲染步骤

- 组件mountComponent时， watch每一个属性，读取Object get方法， 每个watcher添加到， Dep数组里面。

- mountComponent，它会先执行 `vm._render()` 方法，因为之前分析过这个方法会生成 渲染 VNode，并且在这个过程中会对 `vm` 上的数据访问，这个时候就触发了数据对象的 getter。

  

- 更新时调用， 遍历dep数组，调用watcher的update方法

- 