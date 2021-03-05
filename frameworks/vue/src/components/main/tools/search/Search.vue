<script>
    import SearchResults from "./SearchResults";
    export default {
        name: 'Search',
        components: {SearchResults},
        props: {},
        computed: {
            search: {
                get() {
                    return this.$store.state.search;
                },
                set(value) {
                    this.$store.commit('updateProperty', {key: 'search', value});
                }
            },
            results(){
                if (this.search === '') {
                    return [];
                } else {
                    return this.$store.state.fonts.all.filter(font => {
                        return font.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
                    })
                }
            }
        },
        methods: {}
    }
</script>


<template>
    <div class="Search tool-box">
        <div class="Search__container">
            <input
                v-model="search"
                placeholder="Search..."/>
            <SearchResults
                    v-if="results.length > 0"
                    :results="results"/>
        </div>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Search {

        .Search__container {
            position: relative;

            input {
                padding: 4px;
                width: 100%;
                height: 28px;
                outline: none;
            }
        }
    }
</style>