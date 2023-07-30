import "./App.css";
import TestMemo from "./component/dan/TestMemo";
import HookAndClass from "./component/dan/HookAndClass";
import TouchSelect from "./component/touch";

function App() {
  
  return (
    <div className="App">
      <TestMemo />
      <HookAndClass/>
      <TouchSelect />
    </div>
  );
}


export default App;