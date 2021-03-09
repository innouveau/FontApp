<script>
    import Favorite from "./Favorite.svelte";
    import {favorites} from 'store/index.js';


</script>


<div class="Favorites tool-box">
    <div class="tool-box__title">
        Favorites
    </div>
    <div class="Favorites__list">
        {#each $favorites as favorite}
        <Favorite
            favorite={favorite}/>
        {/each}
    </div>
</div>


<style type="text/scss">
    .Favorites {
        .Favorites__list {
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>