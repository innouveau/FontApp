<script>
    import RangeSlider from "svelte-range-slider-pips";
    import {parameters} from 'store/index.js'
    import { addPropertyOfItem } from 'store/store-tools.js';

    export let parameter;

    const update = (e) => {
        $parameters = addPropertyOfItem($parameters, parameter, 'value', e.detail.value);
    }
</script>


<div class="ParameterSlider">
    <RangeSlider
            values={[parameter.value]}
            on:change={(e) => update(e)}/>
</div>


<style type="text/scss">
    .ParameterSlider {
        width: 140px;
        margin-right: 12px;
    }
</style>