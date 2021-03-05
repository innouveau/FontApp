<script>
    import Font from "../../../../../../../shared/classes/Font";

    export default {
        name: 'Favorite',
        components: {},
        props: {
            favorite: {
                type: Font,
                required: true
            }
        },
        computed: {
            currentBox(){
                return this.$store.state.boxes.current;
            },
            currentFont() {
                return this.currentBox ? this.$store.getters['fonts/getItemById'](this.currentBox.font_id) : null;
            },
            isActive() {
                return this.currentFont && this.currentFont === this.favorite;
            }
        },
        methods: {
            select() {
                if (!this.isActive) {
                    this.$store.commit('boxes/updatePropertyOfItem', {item: this.currentBox, property: 'font_id', value: this.favorite.id});
                }
            }
        }
    }
</script>


<template>
    <div
        @click="select()"
        :class="{'Favorite--active': isActive}"
        class="Favorite">
        {{favorite.title}} ({{favorite.weight}})
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

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
            background: $theme-color;
        }
    }
</style>