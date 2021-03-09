<script>
    import { addToStore } from 'store/store-tools.js';
    import {favorites, getCurrentFont, isFavorite} from 'store/index.js';

    const createFavorite = () => {
        if (!$isFavorite) {
            $favorites = addToStore($favorites, $getCurrentFont);
        }
    };
</script>


<div
    on:click={createFavorite}
    class:FavoriteButton--inactive={$isFavorite}
    class="FavoriteButton"></div>


<style type="text/scss">
    :global {
        @import '../../shared/styles/variables.scss';
    }

    .FavoriteButton {
        background: #e6be00;
        height: 24px;
        width: 24px;
        margin-left: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        cursor: pointer;
        position: relative;


        &:after {
            position: absolute;
            z-index: 1;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0.7);
            content: '♥';
            transition: all 0.4s ease;
            font-size: 15px;
            line-height: 1;
        }

        &:hover:not(.FavoriteButton--inactive) {

            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }

        &.FavoriteButton--inactive {
            cursor: default;
            opacity: 0.5;
        }
    }
</style>