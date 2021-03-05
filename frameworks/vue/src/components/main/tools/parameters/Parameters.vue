<script>
    import Parameter from "./Parameter";
    export default {
        name: 'Parameters',
        components: {Parameter},
        props: {},
        computed: {
            parameters() {
                return this.$store.state.parameters.all;
            },
            currentBox(){
                return this.$store.state.boxes.current;
            },
            font() {
                return this.$store.getters['fonts/getFontForCurrentBox'];
            }
        },
        methods: {
            updateParameters() {
                for (let parameter of this.parameters) {
                    let value;
                    if (this.currentBox) {
                        value = this.font[parameter.key];
                    } else {
                        value = 50;
                    }
                    this.$store.commit('parameters/updatePropertyOfItem', {item: parameter, property: 'value', value});
                }
            }
        },
        watch: {
            currentBox() {
                this.updateParameters();
            }
        }
    }
</script>


<template>
    <div class="Parameters tool-box">
        <Parameter
            v-for="parameter in parameters"
            :parameter="parameter"/>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Parameters {

    }
</style>