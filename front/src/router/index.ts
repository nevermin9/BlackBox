import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName "Home" */ '@/views/Home/Home.vue'),
        props: {
            foo: 'anton',
            number: 42,
            obj: {
                name: 'proval'
            }
        }
    },
    {
        path: '/join',
        name: 'join',
        component: () => import(/* webpackChunkName "Join" */ '@/views/Join/Join.vue'),
        children: [
            {
                path: '/',
                name: 'signin',
                component: () => import(/* webpackChunkName "Join" */ '@/views/Join/Children/SignIn.vue')
            },
            {
                path: '/join/signup',
                name: 'signup',
                component: () => import(/* webpackChunkName "Join" */ '@/views/Join/Children/SignUp.vue')
            },
        ]
    },
]

const router = createRouter({
    'history': createWebHistory(),
    routes,
});

export default router;