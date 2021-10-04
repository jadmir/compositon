
export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "Auth Layout" */ '@/modules/auth/layouts/AuthLayout.vue'),
    children: [
        {
            path: '',
            name: 'Login',
            component: () => import(/* webpackChunkName: "Login" */ '@/modules/auth/views/Login.vue')
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import(/* webpackChunkName: "Register" */ '@/modules/auth/views/Register.vue')
        }
    ]
}