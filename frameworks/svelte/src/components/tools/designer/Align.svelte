<script>
    import AlignButton from "./AlignButton.svelte";

    const textAligns = ['left', 'center', 'right'];
</script>


<div class="Align">
    {#each textAligns as textAlign}
        <AlignButton textAlign={textAlign}/>
    {/each}
</div>


<style type="text/scss">
    .Align {
        display: flex;
        margin-bottom: 12px;
    }
</style>