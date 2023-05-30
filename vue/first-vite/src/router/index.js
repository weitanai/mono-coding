import { createRouter, createWebHistory } from "vue-router";
import UserList from "../components/user/UserList.vue";
import Index from "../components/Index.vue";

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。

const routes = [
  { path: "/login", component: () => import("../components/Login.vue"), name: "Login" },
  { path: "/chat", component: () => import("../components/chat/Index.vue"), name: "chat" },
  {
    path: "/user",
    component: Index,
    children: [
      { path: "create", component: () => import("../components/comList/CreateUser.vue") },
      { path: "list", component: () => import("../components/comList/UserList.vue") },
    ]
  },
  // {
  //   path: '/userlist', component: UserList, name: 'UserList', meta: {
  //     deepth: 0.5
  //   }
  // },
  {
    path: "/post",
    component: Index,
    children: [
      { path: "create", component: () => import("../components/post/CreatePost.vue") },
      { path: "list", component: () => import("../components/post/PostList.vue") },
      { path: "edit/:id", component: () => import("../components/post/CreatePost.vue") },
      {
        path: ":id", component: () => import("../components/post/PostContent.vue"), props: true, name: "PostContent", meta: {
          deepth: 2,
          keepAlive: true
        }
      },
    ]
  },
  { path: "/composition/ref", component: () => import("../components/compostion/Index.vue") },
  { path: "/", redirect: "/post/list" },
  { path: "/:pathMatch(.*)*", component: () => import("../components/NotFound.vue") },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const base = process.env.NODE_ENV === "development" ? "/" : "/site";
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(base),
  routes, // `routes: routes` 的缩写v
});

let startTime = new Date();
router.beforeEach(async (to, from, next) => {
  // if (!store.getters.isAuth && to.path !== '/login') {
  //   next();
  // } else {
  //   next();
  // }
  const current = new Date();

  const standingTime = (current - startTime)/1000;
  startTime = current;
  console.log(standingTime, "standing------");
  next();
});
export default router;
