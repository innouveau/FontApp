<script>
    import Moveable from "svelte-moveable";
    import Text from "./Text.svelte";
    import {currentBox_id} from "store/index.js";
    import Handle from "./Handle.svelte";

    export let box;

    const frame = {
        translate: [0, 0],
    };
    let target, initialLeft, initialTop;
    initialLeft = box.left;
    initialTop = box.top;

    const resizeStart = (set, setOrigin, dragStart) => {
        select();
        // Set origin if transform-orgin use %.
        setOrigin(["%", "%"]);
        // If cssSize and offsetSize are different, set cssSize. (no box-sizing)
        const style = window.getComputedStyle(target);
        const cssWidth = parseFloat(style.width);
        const cssHeight = parseFloat(style.height);
        set([cssWidth, cssHeight]);
        // If a drag event has already occurred, there is no dragStart.
        dragStart && dragStart.set(frame.translate);
    };

    const resize = (drag, width, height) => {
        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        // get drag event
        frame.translate = drag.beforeTranslate;
        target.style.transform = `translate(${drag.beforeTranslate[0]}px, ${drag.beforeTranslate[1]}px)`;
    };

    const select = () => {
        currentBox_id.set(box.id);
    };

    $: {
        let left, top;
        left = box.left - initialLeft;
        top = box.top - initialTop;
        if (target) {

            //target.style.transform = `translate(${left}px, ${top}px)`;
        }
    }

</script>

<Handle box={box}/>

<div
    on:click={select}
    style="
        left: {box.left + 'px'};
        top: {box.top + 'px'};
        width: {box.width + 'px'};
        height: {box.height + 'px'};"
    class="target" bind:this={target}>
    <Text box={box}/>
</div>
<Moveable
    target={target}
    resizable={true}
    throttleResize={0}
    on:resizeStart={({ detail: {target, set, setOrigin, dragStart }}) => { resizeStart(set, setOrigin, dragStart); }}
    on:resize={({ detail: { target, width, height, drag }}) => { resize(drag, width, height); }}
    on:resizeEnd={({ detail: { target, isDrag, clientX, clientY }}) => { }}/>



<style type="text/scss">
    .target {
        position: absolute;
        background: #fff;
        z-index: 2;
    }

    :global(.moveable-origin) {
        display: none;
    }

    :global(.moveable-control) {
        border-radius: 0!important;
        border: 1px solid #e6be00!important;
        background: #fff!important;
    }

    :global(.moveable-line) {
        background: #e6be00!important;
    }
</style>