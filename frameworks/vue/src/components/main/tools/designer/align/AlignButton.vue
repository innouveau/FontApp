<script>
    export default {
        name: 'AlignButton',
        components: {},
        props: {
            textAlign: {
                type: String,
                required: true
            }
        },
        computed: {
            currentBox(){
                return this.$store.state.boxes.current;
            },
            isActive() {
                return this.currentBox && this.currentBox.textAlign === this.textAlign;
            }
        },
        methods: {
            select() {
                if (!this.isActive) {
                    this.$store.commit('boxes/updatePropertyOfItem', {item: this.currentBox, property: 'textAlign', value: this.textAlign});
                }
            }
        }
    }
</script>


<template>
    <div
        @click="select()"
        :class="{'AlignButton--active': isActive}"
        class="AlignButton">
        <img :src="'assets/img/tools/align-' + textAlign + '.svg'"/>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .AlignButton {
        width: 24px;
        padding: 2px;
        background: #888;
        cursor: pointer;
        margin-right: 6px;

        &.AlignButton--active {
            background: $theme-color;
            pointer-events: none;
        }

        img {
            width: 100%;
            display: block;
        }

        &:hover {
            background: #000;
        }

        &:last-child {
            margin-right: 0;
        }
    }
</style>