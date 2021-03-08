<script>
    import Tools from './tools/Tools.svelte';
    import Desk from './desk/Desk.svelte';
    import {parameters, fonts, boxes} from 'store/index.js'
    import data_parameters from './../../../../shared/data/parameters.js';
    import data_fonts from './../../../../shared/data/fonts.js';
    import data_boxes from './../../../../shared/data/boxes.js';
    import Parameter from './../../../../shared/classes/Parameter.js';
    import Font from './../../../../shared/classes/Font.js';
    import Box from './../../../../shared/classes/Box.js';
    import { addToStore } from 'store/store-tools.js';

    function initParameters(set) {
        for (let item of set) {
            $parameters = addToStore($parameters, new Parameter(item));
        }
    }

    function initFonts(set) {
        for (let item of set) {
            let data = {
                id: set.indexOf(item) + 1,
                content: item
            };
            $fonts = addToStore($fonts, new Font(data));
        }
    }

    function initBoxes(set) {
        for (let item of set) {
            item.id = set.indexOf(item) + 1;
            $boxes = addToStore($boxes, new Box(item));
        }
    }

    initFonts(data_fonts);
    initParameters(data_parameters);
    initBoxes(data_boxes)
</script>

<div class="App page">
    <Tools/>
    <Desk/>
</div>


<style type="text/scss">

    :global {
        @import "./../../../../shared/styles/index.scss";
    }

    :global(*) {
        box-sizing: border-box;
    }

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