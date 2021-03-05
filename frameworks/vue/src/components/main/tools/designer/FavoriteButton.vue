<script>
    export default {
        name: 'FavoriteButton',
        components: {},
        props: {},
        computed: {
            currentFont() {
                return this.$store.getters['fonts/getFontForCurrentBox'];
            },
            isFavorite() {
                return this.currentFont && this.$store.state.favorites.all.indexOf(this.currentFont) > -1;
            }
        },
        methods: {
            createFavorite() {
                if (!this.isFavorite) {
                    this.$store.commit('favorites/create', this.currentFont)
                }
            }
        }
    }
</script>


<template>
    <div
        @click="createFavorite()"
        :class="{'FavoriteButton--inactive': isFavorite}"
        class="FavoriteButton"></div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .FavoriteButton {
        background: $theme-color;
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