<script>
    import RangeSlider from "svelte-range-slider-pips";
    import {parameters} from 'store/index.js'
    import { updatePropertyOfItem } from 'store/store-tools.js';

    export let parameter;

    const update = (e) => {
        $parameters = updatePropertyOfItem($parameters, parameter, 'value', e.detail.value);
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

        :global(.rangeSlider) {
            margin: 0;
            height: 2px;
            border-radius: 0;

            .rangeHandle {

                .rangeNub {
                }
            }
        }
    }
</style>