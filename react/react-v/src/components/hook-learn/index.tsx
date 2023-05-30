import SideEffect from "./SideEffect";
import UserInfoContext from "./UserInfoContext";
import TextInputWithFocusButton from "./CusRef";
import TestCallBack from "./callback";
import CountCard from "./Memo";
import ErrorBoundary from "../error-boundary/ErrorBoundary";
import ErrorCmp from "./ErrorCmp";


function LearnHook() {
    // state 
    return (
        <div className="Hook">
            <button onClick={()=>import("../hook/sum").then((module:any)=>alert(module.sum(1, 2)))} >add</button>
            <UserInfoContext>
                <SideEffect />
            </UserInfoContext>
            <TestCallBack/>
            <TextInputWithFocusButton />
            <CountCard/>
            {/* <ErrorBoundary>
                <ErrorCmp></ErrorCmp>
            </ErrorBoundary> */}
        </div>
    );
}

export default LearnHook;