<script>
    import Identity from "./Identity";
    import FilterTool from "./filter/Filter";
    import Parameters from "./parameters/Parameters";
    import Designer from "./designer/Designer";

    export default {
        name: 'tools',
        components: {
            Designer,
            Parameters,
            FilterTool,
            Identity
        },
        props: {},
        computed: {
            hasCurrentBox() {
                return this.$store.state.boxes.current !== null;
            }
        },
        methods: {}
    }
</script>


<template>
    <div
        :class="{'Tools--active': hasCurrentBox}"
        class="Tools">
        <Identity/>
        <FilterTool/>
        <Parameters/>
        <Designer/>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Tools {
        padding: $grid-size-x2;

        .tool-box {
            pointer-events: none;
            opacity: 0.5;

            &.tool-box--always-active {
                pointer-events: all;
                opacity: 1;
            }
        }

        select {
            margin-bottom: 8px;
        }



        &.Tools--active {

            .tool-box {
                pointer-events: all;
                opacity: 1;
            }
        }
    }
</style>