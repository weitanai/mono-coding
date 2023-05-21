import { useState, useEffect, useContext } from 'react';
import  {SET_USER_INFO, GlobalContext} from './UserInfoContext';

 function SideEffect() {
  const [count, setCount] = useState(0);
  const {userInfo, dispatchUserInfo} = useContext(GlobalContext);
  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    console.log('count effect--------');
  }, [count]);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => {
          dispatchUserInfo({ type: SET_USER_INFO, userInfo: "red" });
        }}>
        change userInfo
      </button>
    </div>
  );
}

export default SideEffect;