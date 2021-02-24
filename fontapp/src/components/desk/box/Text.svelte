<script>
    import {fonts} from 'store/index.js'

    export let box;

    const fontFamily = $fonts.find(font => font.id === box.font_id);

    const getCorrectedFontSize = () => {
        return Math.round(box.fontSize * 400 / fontFamily.relativeFontSize) + 'px';
    };

    const fontFamilyTitle = () => {
        if (fontFamily) {
            return fontFamily.title;
        } else {
            return '';
        }
    };
</script>


<div class="Text">
    <textarea
        style="
            font-size: {getCorrectedFontSize()};
            font-family: {fontFamilyTitle()};
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