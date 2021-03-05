<script>
    import { Chrome } from 'vue-color'

    export default {
        name: 'Color',
        components: {
            'chrome-picker': Chrome,
        },
        props: {},
        data(){
            return {
                isOpen: false
            }
        },
        computed: {
            currentBox(){
                return this.$store.state.boxes.current;
            },
            color: {
                get() {
                    return this.currentBox ? this.currentBox.color : '#ddd';
                },
                set(value) {
                    this.$store.commit('boxes/updatePropertyOfItem', {item: this.currentBox, property: 'color', value: value.hex});
                }
            }
        },
        methods: {
            open() {
                console.log("a");
                this.isOpen = true;
            },
            close() {
                console.log("!");
                this.isOpen = false;
            }
        }
    }
</script>


<template>
    <div class="Color designer__row">
        <div class="designer__label">
            Font size
        </div>
        <div class="designer__content">
            <div
                @click="open()"
                class="Color__swatch">
                <div
                    :style="{'background-color': color}"
                    class="Color__swatch-inner"></div>
            </div>

            <div
                v-if="isOpen"
                class="Color__popup">
                <div
                    @click="close()"
                    class="Color__close"/>
                <chrome-picker
                        v-model="color"/>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Color {
        margin-bottom: 8px;
        position: relative;

        .Color__swatch {
            width: 24px;
            height: 34px;
            padding: 4px 0;
            cursor: pointer;
            border-bottom: 2px solid transparent;
            margin-top: 4px;

            .Color__swatch-inner {
                height: 100%;
                border-radius: 50%;
            }

            &:hover {
                border-bottom: 2px solid $theme-color-dark-1;
            }
        }

        .Color__popup {
            position: absolute;
            left: -2px;
            top: -2px;
            z-index: 1;
            padding: 24px 8px 8px 8px;
            background: #fff;
            box-shadow: 4px 4px 8px rgba(0,0,0,0.2);

            .vc-chrome {
                box-shadow: none!important;
            }

            .Color__close {
                position: absolute;
                right: 4px;
                top: 6px;
                width: 12px;
                height: 12px;
                cursor: pointer;

                &:before, &:after {
                    position: absolute;
                    left: 6px;
                    top: 1px;
                    content: ' ';
                    height: 12px;
                    width: 2px;
                    background-color: $theme-color-dark-1;
                }

                &:before {
                    transform: rotate(45deg);
                }

                &:after {
                    transform: rotate(-45deg);
                }
            }
        }
    }
</style>