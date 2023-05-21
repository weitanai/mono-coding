import  './UserInfo.css'
import {useContext} from 'react';
import {GlobalContext} from '../hook-learn/UserInfoContext';


function UserInfo() {
    const {userInfo} = useContext(GlobalContext);
    if(userInfo && userInfo.name) {
        return (
            <div className="user-info-wrapper">
                <span className="user-info-name">{userInfo.name}</span>
                <img src={userInfo.avatar} alt="avatar" className="user-info-avatar"  />
            </div>
        )
    }
    return (
        <div></div>
    )
}
export default UserInfo;