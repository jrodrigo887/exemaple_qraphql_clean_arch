import { RouteRecordRaw } from 'vue-router';
import HomeModule from './HomeModule.vue';
import HomeDetails from './views/HomeDetails.vue';

const routes: RouteRecordRaw[] = [
    { path: '/', component: HomeModule, 
        children: [
            { path: '', component: HomeDetails }
        ] 
    }
]

export default routes;

