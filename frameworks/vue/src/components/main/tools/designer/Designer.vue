<script>
    import FontFamily from "./FontFamily";
    import FavoriteButton from "./FavoriteButton";
    export default {
        name: 'Designer',
        components: {
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
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Designer {

    }
</style>