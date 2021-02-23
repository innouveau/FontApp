<script>
    import Identity from "./Identity.svelte";
    import Filter from "./filter/Filter.svelte";
    import Parameters from "./parameters/Parameters.svelte";
    import BestMatch from "./BestMatch.svelte";

</script>

<div class="Tools">
    <Identity/>
    <Filter/>
    <Parameters/>
    <BestMatch/>
</div>

<style>
    .Tools {
        width: 300px;
        overflow: auto;
    }
</style>