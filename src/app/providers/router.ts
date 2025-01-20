import type {RouteRecordRaw} from "vue-router";
import {createRouter, createWebHistory} from "vue-router";
import {authRouteGuard} from "@/app/middlewares/authRouteGuard";
import {mainRouteGuard} from "@/app/middlewares/mainRouteGuard";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'landing',
        component: () => import('@/pages/landing/index.vue'),
        beforeEnter: mainRouteGuard,
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/login/index.vue'),
        beforeEnter: mainRouteGuard,
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('@/pages/register/index.vue'),
        beforeEnter: mainRouteGuard,
    },
    {
        path: '/main',
        name: 'Main',
        component: () => import('@/pages/main/index.vue'),
        meta: { layout: 'SideBarLayout' },
        beforeEnter: authRouteGuard,
    },
    {
        path: '/friends',
        name: 'Friends',
        component: () => import('@/pages/friends/index.vue'),
        meta: { layout: 'SideBarLayout' },
        beforeEnter: authRouteGuard,
    },
    {
        path: '/sendRequests',
        name: 'SendRequests',
        component: () => import('@/pages/sendRequests/index.vue'),
        beforeEnter: authRouteGuard,
    },
    {
        path: '/receivedRequests',
        name: 'ReceivedRequests',
        component: () => import('@/pages/receivedRequests/index.vue'),
        beforeEnter: authRouteGuard,
    },
    {
        path: '/chat',
        name: 'Chat',
        component: () => import('@/pages/chat/index.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: () => import('@/pages/notFound/index.vue'),
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;