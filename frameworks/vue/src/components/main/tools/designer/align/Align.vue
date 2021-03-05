<script>
    import AlignButton from "./AlignButton";
    export default {
        name: 'Align',
        components: {AlignButton},
        props: {},
        data() {
            return {
                textAligns: ['left', 'center', 'right']
            }
        },
        computed: {},
        methods: {}
    }
</script>


<template>
    <div class="Align designer__row">
        <div class="designer__label">
            Text align
        </div>
        <div class="designer__content">
            <div class="Align__set">
                <AlignButton
                        v-for="textAlign in textAligns"
                        :textAlign="textAlign"/>
            </div>

        </div>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Align {

        .Align__set {
            display: flex;
        }
    }
</style>