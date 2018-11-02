<template>
    <div class="p-index">
        <div @click="goto">点击跳转到商品页2</div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        goto() {
            this.$router.push('/good/two')
        }
    }
}
</script>

<style scoped>
    .p-index{
        width: 50px;
        height: 80px;
        background: green;
        color:#fff;
    }
</style>


