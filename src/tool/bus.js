import Vue from 'vue'
let bus = new Vue({
    data: {
        routesInfo: null,
        activePath: ''
    },
    methods: {
        setRoutesInfo(routes) {
            this.routesInfo = routes;
        },
        setActivePath(path) {
            this.activePath = path;
        }
    }
})
export default bus;