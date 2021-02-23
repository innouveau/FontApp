<script>
    import Tools from './tools/Tools.svelte';
    import Desk from './desk/Desk.svelte';
    import {parameters} from 'store/index.js'
    import data_parameters from 'data/parameters.js';
    import Parameter from 'classes/Parameter.js';
    import { addToStore } from 'store/store-tools.js';

    function initParameters(set) {
        for (let item of set) {
            $parameters = addToStore($parameters, new Parameter(item));
        }
    }

    initParameters(data_parameters);
</script>

<div class="App page">
    <Tools/>
    <Desk/>
</div>


<style type="text/scss">
    @import "./../styles/index.scss";

    .page {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        background: #F2F0E6;
    }
</style>