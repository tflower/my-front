<template>
    <div class="p-blog">
        博客
    </div>
</template>
<script>
export default {
    
}
let res = new Promise((resolve, reject) => {
    resolve(2);
})
console.log(res)
</script>

<style scoped>
    .p-blog{
        width: 50px;
        height: 50px;
        background: red;
        background: url('../asset/pic.png');
        background-size: contain;
    }
</style>


