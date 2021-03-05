<script>
    import Desk from "./desk/Desk";
    import Tools from "./tools/Tools";
    import boxes from "./../../../../../shared/data/boxes";
    import parameters from "./../../../../../shared/data/parameters";
    import fonts from "./../../../../../shared/data/fonts";

    export default {
        name: 'Main-page',
        components: {
            Tools,
            Desk
        },
        props: {},
        computed: {},
        methods: {
            init(){
                this.$store.commit('boxes/init', boxes);
                this.$store.commit('parameters/init', parameters);
                this.$store.commit('fonts/init', fonts);
            }
        },
        mounted(){
            this.init();
        }
    }
</script>


<template>
    <div class="main page">
        <Tools/>
        <Desk/>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .main {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: $background-color;
        display: flex;
        color: $main-text-color;

        .Tools {
            width: 300px;
            overflow: auto;
        }

        .Desk {
            width: calc(100% - 300px);
            overflow: hidden;
        }
    }
</style>