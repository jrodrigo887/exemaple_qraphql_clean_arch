import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainView from '@/MainView.vue';
import { HomeRouter } from '../features/Home';


const routes: RouteRecordRaw[] = [
    // { path: '/', component: MainView },
    ...HomeRouter
]

export const RouterConfigs = createRouter({
    routes,
    history: createWebHistory()
})