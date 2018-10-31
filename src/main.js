import Vue from 'vue'
import ElementUi from 'element-ui'

import router from './router/index'


import App from './app'
Vue.use(ElementUi)


new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})