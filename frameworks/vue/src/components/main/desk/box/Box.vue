<script>
    import Box from "./../../../../../../../shared/classes/Box";
    import BoxText from "./Text";

    export default {
        name: 'Box',
        components: {
            BoxText
        },
        props: {
            box: {
                type: Box,
                required: true
            }
        },
        computed: {},
        methods: {
            select() {
                this.$store.commit('boxes/setCurrent', this.box);
            }
        }
    }
</script>


<template>
    <div
        @click="select()"
        class="Box">
        <BoxText :box="box"/>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Box {
        position: relative;
        z-index: 2;

        > .single-resizer {
            border: 1px dotted $theme-color;
            background: #fff;
            z-index: 1;

            .resizable-handler {
                cursor: default!important;
            }

            .square {
                border: 1px solid $theme-color;
            }
        }

        .Text {
            position: absolute;
            z-index: 2;
        }
    }
</style>