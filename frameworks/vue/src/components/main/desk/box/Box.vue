<script>
    import Box from "./../../../../../../../shared/classes/Box";

    export default {
        name: 'Box',
        components: {},
        props: {
            box: {
                type: Box,
                required: true
            }
        },
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="Box">
        {{box.string}}
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Box {

    }
</style>