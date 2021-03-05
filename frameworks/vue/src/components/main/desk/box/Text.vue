<script>
    import Box from "../../../../../../../shared/classes/Box";

    export default {
        name: 'Box-text',
        components: {},
        props: {
            box: {
                type: Box,
                required: true
            }
        },
        computed: {
            font() {
                return this.$store.getters['fonts/getItemById'](this.box.font_id);
            },
            correctedFontSize() {
                return Math.round(this.box.fontSize * 400 / this.font.relativeFontSize);
            }
        },
        methods: {
            loadFont() {
                if (this.font && !this.font.loaded && window.WebFont) {
                    this.$store.commit('fonts/updatePropertyOfItem', {item: this.font, property: 'loaded', value: true});
                    window.WebFont.load({
                        google : {
                            families : [this.font.title + ":" + this.font.weight]
                        },
                        loading : function() {},
                        active : function(response) {

                        },
                        inactive : function() {}
                    });
                }
            }
        },
        watch: {
            font() {
                this.loadFont();
            }
        }
    }
</script>


<template>
    <div class="Text">
        <textarea
            :style="{
                'font-family': font.title,
                'font-size': correctedFontSize + 'px',
                'font-weight': font.weight,
                'text-align': box.textAlign,
                'color': box.color
            }"
            v-model="box.string"/>
    </div>
</template>


<style lang="scss">
    @import '../../shared/styles/variables.scss';

    .Text {

        textarea {
            outline: none;
        }
    }
</style>