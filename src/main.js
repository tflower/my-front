import Vue from 'vue'
import App from './app.vue'

console.log(App)
new Vue({
    data:{
        mes:1
    },
    components: { App },
    render: h => h(App) 
}).$mount('#app')