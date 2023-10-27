import "./App.css";
import TestMemo from "./component/dan/TestMemo";
import HookAndClass from "./component/dan/HookAndClass";
import SwipperCmp from './component/swiper/index';
import { Pages } from "./component/sort/test-pages/Pages";
import { Layout } from "./component/sort/test-pages/Page";
function App() {
  
  return (
    <div className="App">
      {/* <TestMemo /> */}
      {/* <HookAndClass/> */}
      {/* <SwipperCmp /> */}
      <Pages layout={Layout.Grid}></Pages>
    </div>
  );
}


export default App;