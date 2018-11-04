<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    import Bus from '@Tool/bus'
    import MENUJSON from './menu.json'
    export default {
        data() {
            return {
                mes: 2,
                menuInfo:MENUJSON
            }
        },
        computed: {
            activePath() {
                return Bus.activePath || this.$route.path;
            }
        },
        methods: {
            handleOpen(key){
                console.log(key)
            }
        }
    }
</script>

<style>

</style>