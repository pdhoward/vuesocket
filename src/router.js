import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ContentDynamic from './views/dynamic/ContentDynamic.vue'
import Test from './views/test/Test.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/static',
            name: 'static',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/static/ContentStatic.vue')
        },
        {
            path: '/dynamic',
            name: 'dynamic',            
            component: ContentDynamic
        },
        {
            path: '/test',
            name: 'test',            
            component: Test
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})