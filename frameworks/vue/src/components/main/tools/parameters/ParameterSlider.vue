<script>
    import Parameter from "../../../../../../../shared/classes/Parameter";
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'

    export default {
        name: 'ParameterSlider',
        components: {
            VueSlider
        },
        props: {
            parameter: {
                type: Parameter,
                required: true
            }
        },
        computed: {
            value: {
                get() {
                    return this.parameter.value;
                },
                set(value) {
                    this.$store.commit('parameters/updatePropertyOfItem', {item: this.parameter, property: 'value', value: value});
                    this.updateFont();
                }
            },
            currentBox(){
                return this.$store.state.boxes.current;
            },
            bestMatch() {
                return this.$store.getters['fonts/getBestMatch'];
            }
        },
        methods: {
            updateFont() {
                //console.log(this.bestMatch.id);
                this.$store.commit('boxes/updatePropertyOfItem', {item: this.currentBox, property: 'font_id', value: this.bestMatch.id});

            }
        }
    }
</script>


<template>
    <div class="ParameterSlider">
        <vue-slider
            v-model="value"
            :adsorb="true"/>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .ParameterSlider {

    }
</style>