import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainView from '@/MainView.vue';

const routes: RouteRecordRaw[] = [
    { path: '/', component: MainView }
]

export const RouterConfigs = createRouter({
    routes,
    history: createWebHistory()
})