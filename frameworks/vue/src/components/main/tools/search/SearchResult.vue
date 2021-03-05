<script>
    import Font from "../../../../../../../shared/classes/Font";

    export default {
        name: 'SearchResult',
        components: {},
        props: {
            font: {
                type: Font,
                required: true
            }
        },
        computed: {
            currentBox(){
                return this.$store.state.boxes.current;
            }
        },
        methods: {
            select() {
                this.$store.commit('boxes/updatePropertyOfItem', {item: this.currentBox, property: 'font_id', value: this.font.id});
                this.$store.commit('updateProperty', {key: 'search', value: ''});
            }
        }
    }
</script>


<template>
    <div
        @click="select()"
        class="SearchResult">
        {{font.title}} ({{font.weight}}) ({{font.style}})
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .SearchResult {
        cursor: pointer;
        padding: 8px 12px;
        border-bottom: 1px solid #ddd;

        &:last-child {
            border-bottom: 0;
        }

        &:hover {
            background: #ddd;
        }
    }
</style>