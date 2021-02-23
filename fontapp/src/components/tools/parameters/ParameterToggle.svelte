<script>
    import {parameters} from 'store/index.js'
    import { addPropertyOfItem } from 'store/store-tools.js';

    export let parameter;

    const update = () => {
        $parameters = addPropertyOfItem($parameters, parameter, 'active', !parameter.active);
    }
</script>


<div
    on:click={update}
    class="ParameterToggle">

</div>


<style type="text/scss">
    .ParameterToggle {
        width: 6px;
        height: 6px;
        border: 2px solid #000;
        background: #fff;
        cursor: pointer;
    }

    :global(.Parameter--inactive) {

        .ParameterToggle {
            background: #000;
        }
    }
</style>