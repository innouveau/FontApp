<script>
    import Paper from "./Paper";
    export default {
        name: 'desk',
        components: {Paper},
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="Desk">
        <Paper/>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Desk {
        padding: 20px;
    }
</style>