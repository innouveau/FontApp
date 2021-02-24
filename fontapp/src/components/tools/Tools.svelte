<script>
    import Identity from "./Identity.svelte";
    import Filter from "./filter/Filter.svelte";
    import Parameters from "./parameters/Parameters.svelte";
    import BestMatch from "./BestMatch.svelte";
    import {currentBox} from "store/index.js";
    import Administration from "./administration/Administration.svelte";


</script>

<div
    class:Tools--active={$currentBox}
    class="Tools">
    <Identity/>
    <Filter/>
    <Parameters/>
    <Administration/>
    <BestMatch/>
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