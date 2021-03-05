<script>
    import Parameter from "../../../../../../../shared/classes/Parameter";

    export default {
        name: 'ParameterToggle',
        components: {},
        props: {
            parameter: {
                type: Parameter,
                required: true
            }
        },
        computed: {},
        methods: {
            toggle(){
                this.$store.commit('parameters/updatePropertyOfItem', {item: this.parameter, property: 'active', value: !this.parameter.active});
            }
        }
    }
</script>


<template>
    <div
        @click="toggle()"
        class="ParameterToggle"></div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .ParameterToggle {
        width: 6px;
        height: 6px;
        border: 2px solid #000;
        background: #fff;
        cursor: pointer;
    }

    .Parameter--inactive {

        .ParameterToggle {
            background: #000;
        }
    }
</style>