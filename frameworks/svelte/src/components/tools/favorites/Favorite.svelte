<script>
    export let favorite;
    import {boxes, getCurrentFont, currentBox} from 'store/index.js';
    import {updatePropertyOfItem} from 'store/store-tools.js';

    const select = () => {
        if ($getCurrentFont.id !== favorite.id) {
            $boxes = updatePropertyOfItem($boxes, $currentBox, 'font_id', favorite.id);
        }
    };

</script>


<div
    on:click={select}
    class:Favorite--active={$getCurrentFont.id === favorite.id}
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