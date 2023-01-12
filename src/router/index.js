import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import NotFound from '../views/NotFound'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView

    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: Jobs

    },
    {
        path: '/jobs/:id',
        name: 'JobDetails',
        component: JobDetails,
        props: true

    },

    //route redirects go here
    {
        path: '/all-jobs',
        redirect: '/jobs',


    },

    //catch all 404
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound


    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router