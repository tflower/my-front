<template>
        <el-container>
            <el-aside width="200px">
                <el-menu :default-active="activePath" class="el-menu-vertical-demo" @open="handleOpen" background-color="#262b33"
                    text-color="#c4c4d8" active-text-color="#ffd04b" :router="true" :unique-opened="true">
                    <el-submenu :index="item.title" v-for="(item,index) in menuInfo" :key="index" v-if="!item.hidden">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>{{ item.title }}</span>
                        </template>
                        <el-menu-item :index="item.path + subitem.path" v-for="(subitem,subindex) in item.childrenList"
                            :key="subindex" v-if="subitem.ismenu && !subitem.hidden">{{ subitem.title }}</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <router-view></router-view>
            </el-container>
        </el-container>
</template>
<script>
    import Bus from '@Tool/bus'
    import MENUJSON from '../menu.json'
    export default {
        data() {
            return {
                mes: 2,
                menuInfo: MENUJSON
            }
        },
        computed: {
            activePath() {
                return Bus.activePath || this.$route.path;
            }
        },
        methods: {
            handleOpen(key) {
                console.log(key)
            }
        }
    }
</script>

<style scoped>
    .el-aside{
        background: #262b33;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .el-main{
        height: 100vh;
    }
    .el-menu{
        border: none;
    }
    .submenu{
        background: #20242c;
    }
    .el-menu-item .is-active{
        background: #0B7FF7;
    }
</style>