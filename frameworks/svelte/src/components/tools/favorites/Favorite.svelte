<script>
    export let favorite;

    const select = () => {

    };

    const isFavorite = () => {
        return true;
    };
</script>


<div
    on:click={select}
    class:Favorite--active={isFavorite()}
    class="Favorite">
    {favorite.title} ({favorite.weight})
</div>


<style type="text/scss">
    .Favorite {
        display: flex;
        align-items: center;
        height: 20px;
        background: #fff;
        border: 1px solid #000;
        border-radius: 4px;
        cursor: pointer;
        margin: 0 4px 4px 0;
        padding: 0 8px;

        &.Favorite--active {
            cursor: default;
        }


        &.Favorite--active,
        &:hover {
            background: #e6be00;
        }
    }
</style>