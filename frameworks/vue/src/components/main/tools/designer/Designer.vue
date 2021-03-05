<script>
    import FontFamily from "./FontFamily";
    import FavoriteButton from "./FavoriteButton";
    import FontSize from "./FontSize";
    import Color from "./Color";
    import Align from "./align/Align";

    export default {
        name: 'Designer',
        components: {
            Align,
            Color,
            FontSize,
            FavoriteButton,
            FontFamily
        },
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="Designer tool-box">
        <div class="tool-box__row">
            <FontFamily/>
            <FavoriteButton/>
        </div>
        <FontSize/>
        <Color/>
        <Align/>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Designer {

        .designer__row {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #fff;
            padding: 6px 0;

            .designer__label {
                width: calc(100% - 158px)
            }

            .designer__content {
                width: 158px;
            }
        }
    }
</style>