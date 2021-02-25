<script>
    import Identity from "./Identity.svelte";
    import Filter from "./filter/Filter.svelte";
    import Parameters from "./parameters/Parameters.svelte";
    import {currentBox_id} from "store/index.js";
    import Administration from "./administration/Administration.svelte";
    import Designer from "./designer/Designer.svelte";


</script>

<div
    class:Tools--active={$currentBox_id}
    class="Tools">
    <Identity/>
    <Filter/>
    <Parameters/>
    <Designer/>
    <Administration/>
</div>

<style type="text/scss">
    .Tools {
        width: 300px;
        overflow: auto;

        :global(.tool-box) {
            pointer-events: none;
            opacity: 0.5;
        }

        select {
            margin-bottom: 8px;
        }

        &.Tools--active {

            :global(.tool-box) {
                pointer-events: all;
                opacity: 1;
            }

        }
    }
</style>