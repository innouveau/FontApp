<script>
    export default {
        name: 'FontFamily',
        components: {},
        props: {},
        computed: {
            font() {
                return this.$store.getters['fonts/getFontForCurrentBox'];
            },
            title() {
                return this.font ? this.font.title : '-';
            }
        },
        methods: {}
    }
</script>


<template>
    <div class="FontFamily">
        {{title}}
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .FontFamily {
        background: $theme-color;
        height: 24px;
        padding: 0 8px;
        display: flex;
        align-items: center;
        color: #fff;
        margin-bottom: $grid-size-x2;
        font-weight: 700;
        flex-grow: 1;
    }
</style>