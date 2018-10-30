<template>
    <div id="app">
        <div class="box">{{ mes }}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            mes:1
        }
    }
}
</script>

<style>
    .box{
        width: 60px;
        height: 60px;
        background: red;
    }
</style>

