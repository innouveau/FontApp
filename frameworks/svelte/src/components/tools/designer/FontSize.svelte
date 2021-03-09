<script>
    import RangeSlider from "svelte-range-slider-pips";
    import {boxes, currentBox, currentFontSize} from 'store/index.js';
    import {updatePropertyOfItem} from 'store/store-tools.js';

    const update = (e) => {
        $boxes = updatePropertyOfItem($boxes, $currentBox, 'fontSize', e.detail.value);
    }

</script>


<div class="FontSize designer__row">
    <div class="designer__label">
        Font size
    </div>
    <div class="designer__content">
        <RangeSlider
            values={[$currentFontSize]}
            on:change={(e) => update(e)}/>
    </div>
</div>


<style type="text/scss">
    .FontSize {

    }
</style>