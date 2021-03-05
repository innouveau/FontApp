<script>
    import VueSlider from 'vue-slider-component'

    export default {
        name: 'FontSize',
        components: {
            VueSlider
        },
        props: {},
        computed: {
            currentBox(){
                return this.$store.state.boxes.current;
            },
            fontSize: {
                get() {
                    return this.currentBox ? this.currentBox.fontSize : 50;
                },
                set(value) {
                    this.$store.commit('boxes/updatePropertyOfItem', {item: this.currentBox, property: 'fontSize', value});
                }
            }
        },
        methods: {}
    }
</script>


<template>
    <div class="FontSize designer__row">
        <div class="designer__label">
            Font size
        </div>
        <div class="designer__content">
            <vue-slider
                v-model="fontSize"/>
        </div>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .FontSize {

    }
</style>