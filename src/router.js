import {createRouter, createWebHistory } from "vue-router";

import AppHome from '.pages/AppHome.vue';
import PostList from './pages/ProjectsView.vue';


const router = CreateRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView
        },
        {
            path: '/project/:slug',
            name: 'single_project',
            component: SingleProjectView
        },
       
    ]
})

export {router};

//bisogna creare i componenti nellla cartella pages