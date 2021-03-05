<script>
    import FontCategory from "./FontCategory";
    import NumberOfFonts from "./NumberOfFonts";

    export default {
        name: 'Filter-tool',
        components: {
            NumberOfFonts,
            FontCategory
        },
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="Filter tool-box">
        <FontCategory/>
        <NumberOfFonts/>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Filter {

    }
</style>