import "./App.css";
import { Routes, Route, Link, useRoutes, } from "react-router-dom";
// import LearnHook from "./components/hook-learn/index";
import Admin from "./components/admin/Index";
import UserList from "./components/admin/user/UserList";
import AddUser from "./components/admin/user/AddUser";
import ReduxUse from "./components/reduxUse/index";

// import Game from './components/Tictac/index';

const path = [
  // {
  //   path: "/", element: <LearnHook />,
  // },
  // {
  //   path: "vir", element: <Index />
  // },
  {
    path: "/admin",
    element: <Admin>
    </Admin>
    ,
    children: [
      {
        path: "user/list",
        element: <UserList />
      },
      {
        path: "user/add",
        element: <AddUser />
      }
    ]
  },
  {
    path: "use/redux", element: <ReduxUse />
  },
  // {
  //   path: 'tic-tac',  element: <Game/>
  // },
];

function App() {
  return useRoutes(path);
}

export default App;
