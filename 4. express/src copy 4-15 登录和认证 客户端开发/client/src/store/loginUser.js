import * as loginServ from '../service/loginService';
export default {
    namespaced: true,
    state: {
        data: null,
        isLoading: false
    },
    mutations: {
        setData(state, payload) {
            state.data = payload;
        },
        setIsLoading(state, payload) {
            state.isLoading = payload;
        }
    },
    actions: {
        async login({ commit }, { loginId, loginPwd }) {
            commit('setIsLoading', true);
            const resp = await loginServ.login(loginId, loginPwd);
            commit('setData', resp);
            commit('setIsLoading', false);
            return resp;
        },
        loginOut({ commit }) {
            commit('setData', null);
            loginServ.loginOut();
        },
        async whoAmI({ commit }) {
            commit('setIsLoading', true);
            try {
                const resp = await loginServ.whoAmI();
                commit('setData', resp.data);
            } catch (error) {
                commit('setData', null);
            }
            commit('setIsLoading', false);
        }
    }
}