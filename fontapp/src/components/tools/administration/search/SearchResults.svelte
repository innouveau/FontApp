<script>
    import SearchResult from "./SearchResult.svelte";
    export let fonts;

</script>


<div class="SearchResults">
    {#each fonts as font}
        <SearchResult
            font={font}/>
    {/each}
</div>


<style type="text/scss">
    .SearchResults {
        height: 200px;
        background: #fff;
        position: absolute;
        top: 28px;
        left: 0;
        width: 100%;
        overflow: auto;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
    }
</style>