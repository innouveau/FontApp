<script>
    import Identity from "./Identity";
    import FilterTool from "./filter/Filter";

    export default {
        name: 'tools',
        components: {
            FilterTool,
            Identity
        },
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="Tools">
        <Identity/>
        <FilterTool/>
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