import VueRouter from 'vue-router'
import User from './pages/User'
import Repos from './pages/Repos'
import Users from './components/Users'
import Commits from './pages/Commits'

export default new VueRouter ({
    routes: [
        {
            path: '/',
            component: Users
        },
        {
            path: '/user/:id',
            component: User
        },
        {
            path: '/user/:id/repos',
            component: Repos
        },
        {
            path: '/user/:id/repos/:repo',
            component: Commits
        }
    ],
    mode: 'history'
})