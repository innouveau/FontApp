<script>
    import {getCurrentFont, fonts, currentBox_id} from "store/index.js";
    import { updatePropertyOfItem } from 'store/store-tools.js';

    $: {
        let font = $getCurrentFont;
        if (font && !font.loaded && window.WebFont) {
            $fonts = updatePropertyOfItem($fonts, font, 'loaded', true);
            window.WebFont.load({
                google : {
                    families : [font.title + ":" + font.weight]
                },
                loading : function() {},
                active : function(response) {

                },
                inactive : function() {}
            });
        }
    }

</script>
{$currentBox_id}

<div class="FontFamily">
    {$getCurrentFont ? $getCurrentFont.title : '-'}
</div>


<style type="text/scss">
    .FontFamily {
        background: #e6be00;
        height: 24px;
        padding: 0 8px;
        display: flex;
        align-items: center;
        color: #fff;
        margin-bottom: 12px;
        font-weight: 700;
    }
</style>