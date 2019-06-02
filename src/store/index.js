import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
    },
    actions: {
        loadUsers({commit}) {
            let users = [];
            fetch('https://tanuhaua.github.io/datas-file-json/github_users.json')
                .then(response => response.json())
                .then(data => {
                    data.forEach(user => {
                        fetch(`https://api.github.com/users/${user.githubName}`)
                            .then(response => response.json())
                            .then(data => {
                                users.push(data);
                            })
                    });
                    commit('SET_USERS', users)
                })
                .catch(error => {
                    // eslint-disable-next-line
                    console.log(error)
                })
        },
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        }
    }
});