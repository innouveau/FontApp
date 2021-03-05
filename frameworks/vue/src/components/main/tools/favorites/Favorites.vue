<script>
    import Favorite from "./Favorite";

    export default {
        name: 'Favorites',
        components: {Favorite},
        props: {},
        computed: {
            favorites(){
                return this.$store.state.favorites.all;
            }
        },
        methods: {}
    }
</script>


<template>
    <div class="Favorites tool-box">
        <div class="tool-box__title">
            Favorites
        </div>
        <div class="Favorites__list">
            <Favorite
                v-for="favorite in favorites"
                :favorite="favorite"/>
        </div>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Favorites {

        .Favorites__list {
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>