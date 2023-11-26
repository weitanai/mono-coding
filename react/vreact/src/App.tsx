import "./App.css";
import TestMemo from "./component/dan/TestMemo";
import HookAndClass from "./component/dan/HookAndClass";
import SwipperCmp from './component/swiper/index';
import { SetStateSync } from "./setStateSync";
function App() {
  
  return (
    <div className="App">
      {/* <TestMemo /> */}
      {/* <HookAndClass/> */}
      {/* <SwipperCmp /> */}
      {/* <Pages layout={Layout.Grid}></Pages> */}
      <SetStateSync/>
    </div>
  );
}


export default App;