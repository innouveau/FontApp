<script>
    export default {
        name: 'Identity',
        components: {},
        props: {},
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="Identity">
        <img
            class="Identity__logo" src="assets/img/logo_fontapp.jpg"
            alt="Logo FontApp"/>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Identity {
        display: flex;
        height: 60px;
        margin-bottom: $grid-size-x2;

        .Identity__logo {
            height: 100%;
            width: auto;
            display: block;
        }
    }
</style>