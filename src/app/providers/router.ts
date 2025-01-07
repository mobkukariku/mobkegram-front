import type {RouteRecordRaw} from "vue-router";
import {createRouter, createWebHistory} from "vue-router";
import {authGuard} from "@/shared/middleware/authGuard";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'landing',
        component: () => import('@/pages/landing/index.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/login/index.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/pages/register/index.vue'),
    },
    {
        path: '/main',
        name: 'Main',
        component: () => import('@/pages/main/index.vue'),
        meta: { layout: 'SideBarLayout' },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: () => import('@/pages/notFound/index.vue'),
    },
    {
        path: '/friends',
        name: 'Friends',
        component: () => import('@/pages/friends/index.vue'),
        meta: { layout: 'SideBarLayout' },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;