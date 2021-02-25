<script>
    import {fonts} from 'store/index.js'

    export let box, fontFamilyTitle, correctedFontSize;

    $: {
        const getCorrectedFontSize = () => {
            return Math.round(box.fontSize * 400 / getFontFamily().relativeFontSize) + 'px';
        };

        const getFontFamily = () => {
            return $fonts.find(font => font.id === box.font_id);
        };

        const getFontFamilyTitle = () => {
            let fontFamily = $fonts.find(font => font.id === box.font_id);
            if (fontFamily) {
                return fontFamily.title;
            } else {
                return '';
            }
        };

        fontFamilyTitle = getFontFamilyTitle();
        correctedFontSize = getCorrectedFontSize();
    }
</script>

{box.font_id}
<div class="Text">
    <textarea
        style="
            font-size: {correctedFontSize};
            font-family: {fontFamilyTitle};
            text-align: {box.textAlign};
            color: {box.color}"
        value={box.string}/>
</div>


<style type="text/scss">
    .Text {
        textarea {
            width: 100%;
            height: 100%;
            border: 0;
            resize: none;
            outline: none;
            vertical-align: baseline;
            background: transparent;
        }
    }
</style>