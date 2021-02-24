<script>
    import {parameters, currentBox, getCurrentFont} from 'store/index.js'
    import Parameter from "./Parameter.svelte";
    import { updatePropertyOfItem } from 'store/store-tools.js';

    // probably not the best way to create a watch on $currentBox
    let lastBoxId = null;
    $: {
        if ($currentBox) {
            if ($currentBox.id !== lastBoxId) {
                updateParameters();
                lastBoxId = $currentBox.id;
            }

        } else {
            unsetParameters();
        }
    }

    function updateParameters() {
        for (let parameter of $parameters) {
            let value = $getCurrentFont[parameter.key];
            $parameters = updatePropertyOfItem($parameters, parameter, 'value', value);
        }
    }

    function unsetParameters() {
        for (let parameter of $parameters) {
            $parameters = updatePropertyOfItem($parameters, parameter, 'value', 50);
        }
    }
</script>


<div class="Parameters tool-box">
    {#each $parameters as parameter}
        <Parameter parameter={parameter}/>
    {/each}
</div>


<style>
    .Parameters {

    }
</style>