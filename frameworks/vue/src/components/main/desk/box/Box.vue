<script>
    import Box from "./../../../../../../../shared/classes/Box";
    import BoxText from "./Text";
    import VueResizable from 'vue-resizable'

    export default {
        name: 'Box',
        components: {
            VueResizable,
            BoxText
        },
        props: {
            box: {
                type: Box,
                required: true
            }
        },
        computed: {
            isActive() {
                return this.$store.state.boxes.current === this.box;
            },
            handlers() {
                if (this.isActive) {
                    return ['r', 'rb', 'b', 'lb', 'l', 'lt', 't', 'rt'];
                } else {
                    return [];
                }
            }
        },
        methods: {
            select() {
                let zIndex = this.$store.getters['boxes/getMaxZIndex'];
                this.$store.commit('boxes/setCurrent', this.box);
                this.$store.commit('boxes/updatePropertyOfItem', {item: this.box, property: 'zIndex', value: zIndex});

            },
            eHandler(data) {
                this.$store.commit('boxes/updatePropertyOfItem', {item: this.box, property: 'width', value: data.width});
                this.$store.commit('boxes/updatePropertyOfItem', {item: this.box, property: 'height', value: data.height});
                this.$store.commit('boxes/updatePropertyOfItem', {item: this.box, property: 'left', value: data.left});
                this.$store.commit('boxes/updatePropertyOfItem', {item: this.box, property: 'top', value: data.top});
            }
        }
    }
</script>


<template>
    <vue-resizable
        class="Box"
        :class="{'Box--active': isActive}"
        :style="{'z-index': box.zIndex}"
        @mount="eHandler"
        @resize:move="eHandler"
        @resize:start="eHandler"
        @resize:end="eHandler"
        @drag:move="eHandler"
        @drag:start="eHandler"
        @drag:end="eHandler"
        :dragSelector="'.Handle'"
        :fit-parent="true"
        :width="box.width"
        :height="box.height"
        :left="box.left"
        :top="box.top"
        :active="handlers">
        <div
            v-show="isActive"
            class="Handle">
            <div class="Handle__bar"/>
            <div class="Handle__bar"/>
            <div class="Handle__bar"/>
        </div>
        <BoxText :box="box"/>
        <div
            @click="select()"
            v-if="!isActive"
            class="Box__inactive-area"/>
    </vue-resizable>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Box {
        z-index: 2;
        position: absolute!important;

        &.resizable-component {

            .resizable-r,
            .resizable-rb,
            .resizable-b,
            .resizable-lb,
            .resizable-l,
            .resizable-lt,
            .resizable-t,
            .resizable-rt {
                border: 1px solid $theme-color;
                height: 12px;
                width: 12px;
                background: #fff;
                cursor: default;
            }

            .resizable-t,
            .resizable-b {
                left: 50%;
            }

            .resizable-r,
            .resizable-l {
                top: 50%;
            }
        }

        &.Box--active {

            .Text {
                border: 1px solid $theme-color;
                background: #fff;
                box-shadow: 0 1px 8px rgba(0,0,0,0.2);
            }
        }

        .Handle {
            position: absolute;
            left: 0;
            top: -24px;
            padding: 7px 5px;
            background: $theme-color;
            width: 24px;
            height: 24px;
            cursor: move;

            .Handle__bar {
                height: 2px;
                background: #fff;
                margin-bottom: 2px;
            }
        }

        .Text {
            position: absolute;
            z-index: 2;
            border: 1px solid transparent;
        }

        .Box__inactive-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: transparent;
            z-index: 3;
        }
    }
</style>