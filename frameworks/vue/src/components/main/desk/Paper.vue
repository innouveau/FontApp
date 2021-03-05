<script>
    import Box from "./box/Box";
    export default {
        name: 'Paper',
        components: {Box},
        props: {},
        computed: {
            boxes() {
                return this.$store.state.boxes.all;
            }
        },
        methods: {
            clickOutside() {
                this.$store.commit('boxes/setCurrent', null);
            }
        }
    }
</script>


<template>
    <div class="Paper">
        <div
            @click="clickOutside()"
            class="Paper__outside"></div>
        <Box
            v-for="box in boxes"
            :box="box"/>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Paper {
        width: 100%;
        height: 100%;
        background: #fff;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
        position: relative;

        .Paper__outside {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 1;
        }
    }
</style>