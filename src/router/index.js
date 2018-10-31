

import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@Page/index.vue'
import Blog from '@Page/blog.vue'

Vue.use(VueRouter)
const router = new VueRouter(
    {
        routes:[
            {
                path: '/',
                component: Index
            },
            {
                path: '/blog',
                component: Blog
            }
        ]
    }
);

export default router;