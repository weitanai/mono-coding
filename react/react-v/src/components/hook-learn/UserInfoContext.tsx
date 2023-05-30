import {createContext, useReducer} from "react";

export const GlobalContext = createContext({});

export const SET_USER_INFO = "SET_USER_INFO";

const reducer = (state: any, action: any)=> {
    switch (action.type) {
        case SET_USER_INFO:
            return action.userInfo;
        default:
            return state;
    }
};


function UserInfoContext(props: any) {
    const [userInfo, dispatchUserInfo] = useReducer(reducer, "");
    return (
      <div>
            <GlobalContext.Provider value={{userInfo, dispatchUserInfo}}>
                {props.children}
            </GlobalContext.Provider>
      </div>
    );
  }
  
  export default UserInfoContext;