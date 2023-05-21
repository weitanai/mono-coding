import Vuex from 'vuex';
import {login} from '../api/index';



const store = new Vuex.Store({
    state: {
        userInfo: null,
    },
    getters: {
        isAuth(state){
            return state.userInfo;
        }
    },
    mutations: {
        SET_USER_INFO(state, userInfo) {
            state.userInfo = userInfo;
        }
    },
});
export default store;
