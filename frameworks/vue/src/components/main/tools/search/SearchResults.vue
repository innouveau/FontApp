<script>
    import SearchResult from "./SearchResult";
    export default {
        name: 'SearchResults',
        components: {SearchResult},
        props: {
            results: {
                type: Array,
                required: true
            }
        },
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="SearchResults">
        <SearchResult
            v-for="result in results"
            :font="result"/>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .SearchResults {
        height: 200px;
        background: #fff;
        position: absolute;
        top: 28px;
        left: 0;
        width: 100%;
        overflow: auto;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
    }
</style>