import Home from './views/home/Home.vue'
import Login from './views/login/Login.vue'
import NotFound from './views/404/404.vue'
import Table from '@/views/table/Table.vue'
import Register from '@/views/register/Register.vue'
import Deom from '@/deom/Deom.vue'
/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {title: 'Home'},
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/table',
        name: 'Table',
        component: Table,
    },
    // {
    //     path: '/about',
    //     meta: {title: 'About'},
    //     component: About,
    //     // example of route level code-splitting
    //     // this generates a separate chunk (About.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     // component: () => import('./views/About.vue')
    // },
    {
        path: '/:path(.*)',
        component: NotFound
    }
]


