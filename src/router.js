import {createRouter, createWebHistory } from "vue-router";

import AppHome from '.pages/AppHome.vue';
import PostList from './pages/ProjectList.vue';


const router = CreateRouter({
    history: createWebHistory(),
    routes: [
        {
            path:"/",
            name:"home",
            component: AppHome,
        },
        {
            path:"/projects",
            name:"ptojects",
            component: PostList,
        }
    ]
})

export {router};

//bisogna creare i componenti nellla cartella pages