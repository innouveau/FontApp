<script>
    import {parameters} from 'store/index.js'
    import Parameter from "./Parameter.svelte";
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