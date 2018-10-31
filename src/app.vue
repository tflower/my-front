<template>
    <div id="app">
        <div class="menu">
            <router-link to="/">首页</router-link>
            <router-link to="/blog">博客</router-link>
        </div>
        <div class="btn" @click="test">
            点击测试es6
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            mes:1
        }
    },
    methods: {
        test(){
            let arr = [1,2,3];
            let res = arr.forEach(item => item + 1)
            
        }
    }
}

async function nd() {
    let res = await Promise.resolve(2);
    console.log(res);
}
nd()

function helldofgj(){
    console.log(1)
}
let [first,secfirst] = [1,2];
console.log(first)
function* hello(){
    let res = yield 2;
    console.log(res)
}
hello()
</script>

<style>
    .box{
        width: 60px;
        height: 60px;
        background: red;
    }
</style>

