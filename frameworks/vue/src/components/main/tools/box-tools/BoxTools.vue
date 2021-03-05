<script>
    import AddBox from "./AddBox";
    export default {
        name: 'BoxTools',
        components: {AddBox},
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="BoxTools tool-box tool-box--always-active">
        <AddBox/>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .BoxTools {
        display: flex;
        flex-wrap: wrap;
    }
</style>