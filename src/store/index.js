import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: []
    },
    getters: {

    },
    mutations: {
        loadUsers(state, user) {
            state.users.push(user);
        }

    },
    actions: {
        loasUsers() {
            
        }
    }
});