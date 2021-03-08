<script>
    import SearchResults from "./SearchResults.svelte";
    import {getFontsBySearch, search} from "store/index.js";

</script>


<div class="Search tool-box">
    <input
        placeholder="Search font..."
        bind:value={$search}/>
    {#if $getFontsBySearch.length > 0}
    <SearchResults
        fonts={$getFontsBySearch}/>
    {/if}
</div>


<style type="text/scss">
    .Search {
        position: relative;

        input {
            padding: 4px;
            width: 100%;
            height: 28px;
            outline: none;
        }
    }
</style>