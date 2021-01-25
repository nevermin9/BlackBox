import VueRouter, { Location, RouteConfig, Route } from 'vue-router';

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName "Home" */ '@/views/Home/Home.vue'),
        redirect: (to: Route): Location => {
            if (to) {
                return { name: 'join' };
            }

            return to;
        }
    },
    {
        path: '/join',
        name: 'join',
        component: () => import(/* webpackChunkName "Join" */ '@/views/Join/Join.vue'),
        children: [
            {
                path: 'signup',
                name: 'join.signup',
                component: () => import(/* webpackChunkName "Join" */ '@/views/Join/Children/SignUp.vue')
            },
            {
                path: '',
                name: 'join.signin',
                component: () => import(/* webpackChunkName "SignUp" */ '@/views/Join/Children/SignIn.vue')
            },
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router;
