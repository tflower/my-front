import Vue from 'vue'
import ElementUi from 'element-ui'

import router from './router/index'

console.log(process.env.NODE_ENV)
import App from './app'
Vue.use(ElementUi)


new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})