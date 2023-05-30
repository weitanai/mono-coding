import "./login.css";
import { useState, useContext } from "react";
import { login } from "../../api/index";
import { SET_USER_INFO, GlobalContext } from "../hook-learn/UserInfoContext";
import {  Modal } from "antd";

function Login(props: { isShow: boolean, toggleShow: any }) {
    const [name, setName] = useState("wei");
    const [age, setAge] = useState(22);
    const { userInfo, dispatchUserInfo } = useContext(GlobalContext);
    const { isShow, toggleShow } = props;

    function handleName(e) {
        setName(e.target.value);
    }
    function handleAge(e) {
        setAge(e.target.value);
    }

    const handleSubmit = () => {
        console.log(userInfo, "--userinfo");
        // if (userInfo) return;
        console.log("excuting login");
        const params = {
            name,
            age
        };
        login("/login", params).then(res => {
            if (res) {
                console.log("sset recuse");
                dispatchUserInfo({ type: SET_USER_INFO, userInfo: res });
                toggleShow(!isShow);
            }
        }).catch(err => { console.error(err); });
    };
    return (
        <Modal open={isShow}  onOk={handleSubmit} onCancel={()=>toggleShow(false)} >
            <div>name: <input value={name} onChange={handleName} /></div>
            <div>age: <input value={age} onChange={handleAge} /></div>
        </Modal>
    );

}

export default Login;