import './App.css';
import { Routes, Route, Link, useRoutes, } from "react-router-dom"
import LearnHook from './components/hook-learn/index';
import Admin from './components/admin/Index';
import UserList from './components/admin/user/UserList';
import AddUser from './components/admin/user/AddUser';
import Index from './components/virual/index';
import ReduxUse from './components/reduxUse/index';

// import Game from './components/Tictac/index';

const path = [
  {
    path: '/', element: <LearnHook />,


  },
  {
    path: 'vir', element: <Index />
  },
  {
    path: '/admin',
    element: <Admin>
    </Admin>
    ,
    children: [
      {
        path: 'user/list',
        element: <UserList />
      },
      {
        path: 'user/add',
        element: <AddUser />
      }
    ]
  },
  {
    path: 'use/redux', element: <ReduxUse />
  },
  // {
  //   path: 'tic-tac',  element: <Game/>
  // },
]

function App() {
  if (window.performance) {
    let pf = window.performance;
    let pfEntries = pf.getEntriesByType('paint');
    console.log(pfEntries, '--list')
    let fp = pfEntries.find(each => each.name === 'first-contentful-paint')
    console.log('first paint time: ', fp , fp.startTime);
  }

  return useRoutes(path);
}

export default App;
