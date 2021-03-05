<script>
    export default {
        name: 'AddBox',
        components: {},
        props: {},
        computed: {
            maxZIndex() {
                return this.$store.getters['boxes/getMaxZIndex'];
            }
        },
        methods: {
            onClick() {
                const url = "http://www.randomtext.me/api/";
                fetch(url)
                    .then(response => response.json())
                    .then(result => {
                        let words, string;
                        words = result.text_out.split(' ');
                        string = [words[2], words[3], words[4], words[5], words[6]].join(' ');
                        string = string[0].toUpperCase() + string.substr(1, string.length - 1);
                        this.createBox(string);
                    });
            },
            createBox(string) {
                let box = {left: 100, top: 70, width: 300, height: 200, string, font_id: 294, zIndex: this.maxZIndex};
                this.$store.commit('boxes/create', box);
            }
        }
    }
</script>


<template>
    <div
        @click="onClick()"
        class="AddBox button">
        Add text element
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .AddBox {

    }
</style>