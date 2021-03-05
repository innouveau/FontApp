<script>
    import Parameter from "./Parameter";
    export default {
        name: 'Parameters',
        components: {Parameter},
        props: {},
        computed: {
            parameters() {
                return this.$store.state.parameters.all;
            }
        },
        methods: {}
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