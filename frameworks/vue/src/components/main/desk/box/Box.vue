<script>
    import Box from "./../../../../../../../shared/classes/Box";
    import BoxText from "./Text";

    export default {
        name: 'Box',
        components: {
            BoxText
        },
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
        <BoxText :box="box"/>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Box {

    }
</style>