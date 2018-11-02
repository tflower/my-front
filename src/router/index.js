

import Vue from 'vue'
import VueRouter from 'vue-router'
import Bus from '@Tool/bus'
import MENUJSON from '../menu.json'
import Login from '../layout/login'
import Layout from '../layout/layout'
import NotFound from '../layout/notfound'
import {geneRoute} from './generoute'
Vue.use(VueRouter)

const routes = geneRoute(MENUJSON)

Bus.setRoutesInfo(routes);


const router = new VueRouter({
        routes:[
            {
                path:'/login',
                component: Login
            }
        ]
        // mode: 'history'
});
router.addRoutes([
    {
        path:'/',
        component: Layout,
        children: routes
    },
    {
        path:'/*',
        component: NotFound
    }
]);
router.beforeEach((to, from, next) => {
    Bus.setRoutesInfo('');
    next()
})
export default router;