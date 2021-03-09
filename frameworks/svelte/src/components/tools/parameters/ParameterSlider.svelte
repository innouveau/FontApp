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
    }

    :global {
        body {

            .rangeSlider {
                margin: 0;
                height: 2px;
                border-radius: 0;
                background: #6B6964;

                .rangeHandle {
                    width: 16px;
                    height: 16px;
                    top: 1px;
                    outline: none;

                    .rangeNub {
                        background: #F2F0E6;
                        border: 2px solid #6B6964;
                        opacity: 1;

                        &:before {
                            top: 5px;
                            left: 5px;
                        }
                    }
                }
            }
        }
    }
</style>