<script>
    import { boxes, currentBox_id } from 'store/index.js'
    import Box from "./box/Box.svelte";

    const clickOutside = () => {
        currentBox_id.set(null);
    };
</script>


<div class="Paper">
    <div
        on:click={clickOutside}
        class="Paper__outside"/>
    {#each $boxes as box}
        <Box box={box}/>
    {/each}
</div>


<style type="text/scss">
    .Paper {
        width: 100%;
        height: 100%;
        background: #fff;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
        position: relative;

        .Paper__outside {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 1;
        }
    }
</style>