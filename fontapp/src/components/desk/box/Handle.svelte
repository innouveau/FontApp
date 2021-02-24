<script>
    import Moveable from "svelte-moveable";

    export let box;
    let target;

    const frame = {
        translate: [0, 0],
    };

    const size = 24;
</script>


<div
    bind:this={target}
    style=""
    class="Handle">

    <div
        style="
            left: {box.left - size}px;
            top: {box.top - size}px;
            width: {size}px;
            height: {size}px;"
        class="Handle__icon">
        <div class="Handle__bar"></div>
        <div class="Handle__bar"></div>
        <div class="Handle__bar"></div>
    </div>
</div>


<style type="text/scss">
    .Handle {
        cursor: move;
        position: absolute;
        z-index: 3;

        .Handle__icon {
            background: #e6be00;
            position: absolute;
            pointer-events: none;
            padding: 7px 5px;

            .Handle__bar {
                height: 2px;
                background: #fff;
                margin-bottom: 2px;
            }
        }
    }
</style>