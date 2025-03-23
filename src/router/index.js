import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../pages/Dashboard.vue';
import Home from '../pages/Home.vue';
import Profile from '../pages/Profile.vue'
import HousingAdd from '../pages/HousingAdd.vue'
import Owner from '../pages/Owner.vue'
import Statistic from '../pages/Statistic.vue'

const routes = [

    {
        path: "/",
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        children: [
            {
                path: '',
                name: 'Statistic',
                component: Statistic,
            },
            {
                path: '/houses',
                name: 'Houses',
                component: HousingAdd,
            },
            {
                path: '/profile',
                name: 'Profile',
                component: Profile,
            },
            {
                path: '/owner',
                name: 'Owner',
                component: Owner,
            },
        ]
    },
   

]

const router = createRouter({
    history: createWebHistory(),
    routes

})

export default router;