<script>
    export default {
        name: 'FontCategory',
        components: {},
        props: {},
        data(){
            return {
                categories: [
                    'Sans Serif',
                    'Serif',
                    'Slab Serif',
                    'Monospace',
                    'Script',
                    'Fun'
                ]
            }
        },
        computed: {
            currentCategory: {
                get() {
                    return this.$store.state.currentCategory;
                },
                set(value) {
                    this.$store.commit('updateProperty', {key: 'currentCategory', value});
                }
            }
        },
        methods: {},
        mounted(){
            this.$store.commit('updateProperty', {key: 'currentCategory', value: this.categories[0]});
        }
    }
</script>


<template>
    <div class="FontCategory">
        <select
            v-model="currentCategory">
            <option
                v-for="category in categories"
                :value="category">{{category}}</option>
        </select>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .FontCategory {

    }
</style>