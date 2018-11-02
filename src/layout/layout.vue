<template>
    <div id="layout">
        <!-- <div class="menu">
            <router-link :to="item.path" v-for="(item, index) in menuArr" :key="index">{{ item.meta.title }}</router-link>
        </div> -->
        <el-col :span="6">
            <el-menu :default-active="activePath" class="el-menu-vertical-demo" @open="handleOpen" 
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                :router="true"
                :unique-opened="true">
                <el-submenu :index="item.title" v-for="(item,index) in menuInfo" :key="index" v-if="!item.hidden">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{ item.title }}</span>
                    </template>
                    <el-menu-item :index="item.path + subitem.path" v-for="(subitem,subindex) in item.childrenList" :key="subindex" v-if="subitem.ismenu && !subitem.hidden">{{ subitem.title }}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
        <el-col :span="18"><router-view></router-view></el-col>
    </div>
</template>
<script>
    import Bus from '@Tool/bus'
    import MENUJSON from '../menu.json'
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