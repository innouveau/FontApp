<script>
    import Parameter from "./../../../../../../../shared/classes/Parameter";
    import ParameterToggle from "./ParameterToggle";
    import ParameterSlider from "./ParameterSlider";

    export default {
        name: 'Parameter',
        components: {
            ParameterSlider,
            ParameterToggle},
        props: {
            parameter: {
                type: Parameter,
                required: true
            }
        },
        computed: {},
        methods: {}
    }
</script>


<template>
    <div
        :class="{'Parameter--inactive': !parameter.active}"
        class="Parameter">
        <div class="Paramater__title">
            {{parameter.title}}
        </div>
        <ParameterSlider
            :parameter="parameter"/>
        <ParameterToggle
            :parameter="parameter"/>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Parameter {
        display: flex;
        align-items: center;
        height: 28px;

        .Paramater__title {
            width: calc(100% - 158px);
        }

        .ParameterSlider {
            width: 140px;
            margin-right: 12px;
        }

        &.Parameter--inactive {
            opacity: 0.5;

            .ParameterSlider {
                pointer-events: none;
            }
        }
    }
</style>