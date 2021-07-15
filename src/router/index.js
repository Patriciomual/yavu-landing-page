import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Store from '../views/Store.vue'
import Construction from '../views/Construction.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/store',
        name: 'Store',
        component: Store
    },
    {
        path: '/construction',
        name: 'Construction',
        component: Construction

    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
