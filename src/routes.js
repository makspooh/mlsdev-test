import VueRouter from 'vue-router'
import User from './pages/User'
import Users from './components/Users'

export default new VueRouter ({
    routes: [
        {
            path: '/',
            component: Users
        },
        {
            path: '/user/:id',
            component: User
        }
    ],
    mode: 'history'
})