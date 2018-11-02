<template>
    <div class="p-blog">
        博客
    </div>
</template>
<script>
import Bus from '@Tool/bus'
export default {
    data() {
        return {

        }
    },
    beforeRouteEnter(to, from, next){
        Bus.setActivePath('/good/one');
        next();
    }
}
</script>

<style scoped>

</style>


