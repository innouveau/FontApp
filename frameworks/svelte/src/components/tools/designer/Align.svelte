<script>
    import AlignButton from "./AlignButton.svelte";

    const textAligns = ['left', 'center', 'right'];
</script>

<div class="Align designer__row">
    <div class="designer__label">
        Text align
    </div>
    <div class="designer__content">
        <div class="Align__set">
            {#each textAligns as textAlign}
                <AlignButton textAlign={textAlign}/>
            {/each}
        </div>

    </div>
</div>


<style type="text/scss">
    .Align {

        .Align__set {
            display: flex;
        }
    }
</style>