import Login from "./Login";
import UserInfoContext from "../hook-learn/UserInfoContext";
import UserInfo from "./UserInfo";
import {useState} from "react";
import {Outlet} from "react-router-dom";
function Admin(props) {
    const [isShow, toggleShow] = useState(false);
    return (
        <div className="App">
            <UserInfoContext>
                <div>
                    <button onClick={()=>toggleShow(!isShow)} >login</button>
                </div>
                <UserInfo></UserInfo>
                <Login  isShow={isShow} toggleShow={toggleShow} />
                <Outlet/>
            </UserInfoContext>
        </div>
    );
}
export default Admin;