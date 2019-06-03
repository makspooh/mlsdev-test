import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: []
    },
    actions: {
        loadUsers({commit}) {
            let users = [];
            let ghNames = [
                'paulmillr',
                'mourner',
                'DavertMik',
                'dmytrodanylyk',
                'DmitrySikorsky',
                'bogdan'
            ];
            ghNames.forEach(name => {
                fetch(`https://api.github.com/users/${name}`)
                    .then(response => response.json())
                    .then(data => {
                        users.push(data);
                    })
            });
            commit('SET_USERS', users);
        },
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        }
    }
});