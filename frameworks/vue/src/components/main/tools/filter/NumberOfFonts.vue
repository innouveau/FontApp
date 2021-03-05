<script>
    export default {
        name: 'NumberOfFonts',
        components: {},
        props: {},
        computed: {
            filteredFonts() {
                return this.$store.getters['fonts/getFilteredFonts']
            }
        },
        methods: {}
    }
</script>


<template>
    <div class="NumberOfFonts">
        {{filteredFonts.length}} fonts found
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .NumberOfFonts {

    }
</style>