<script>
    import Moveable from "svelte-moveable";
    import Text from "./Text.svelte";
    import {boxes, currentBox_id} from "store/index.js";
    import { updatePropertyOfItem } from 'store/store-tools.js';


    export let box;

    const frame = {
        translate: [0, 0],
    };

    let target, handle, initialLeft, initialTop;
    initialLeft = box.left;
    initialTop = box.top;

    const dragStart = (set) => {
        set(frame.translate)
    };

    const drag = (beforeTranslate) => {
        let left, top;
        frame.translate = beforeTranslate;
        target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
        left = initialLeft + beforeTranslate[0];
        top = initialTop + beforeTranslate[1];
        $boxes = updatePropertyOfItem($boxes, box, 'left', left);
        $boxes = updatePropertyOfItem($boxes, box, 'top', top);
    };

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



<div
    on:click={select}
    style="left: {initialLeft + 'px'}; top: {initialTop + 'px'}"
    class="target Box"
    bind:this={target}>
    <div
        class="Handle"
        bind:this={handle}>
        <div class="Handle__bar"></div>
        <div class="Handle__bar"></div>
        <div class="Handle__bar"></div>
    </div>

    <Text box={box}/>
</div>

<Moveable
    dragTarget={handle}
    target={target}

    draggable={true}
    throttleDrag={0}
    on:dragStart={({ detail: { set } }) => {dragStart(set);}}
    on:drag={({ detail: { target, beforeTranslate }}) => { drag(beforeTranslate) }}
    on:dragEnd={({ detail: { target, isDrag, clientX, clientY }}) => { }}

    resizable={true}
    throttleResize={0}
    on:resizeStart={({ detail: {target, set, setOrigin, dragStart }}) => { resizeStart(set, setOrigin, dragStart); }}
    on:resize={({ detail: { target, width, height, drag }}) => { resize(drag, width, height); }}
    on:resizeEnd={({ detail: { target, isDrag, clientX, clientY }}) => { }}/>



<style type="text/scss">
    .Box {
        position: absolute;
        background: #fff;
        z-index: 2;

        .Handle {
            cursor: move;
            position: absolute;
            z-index: 3;
            left: 0;
            top: -24px;
            width: 24px;
            height: 24px;
            background: #e6be00;
            padding: 7px 5px;

            .Handle__bar {
                height: 2px;
                background: #fff;
                margin-bottom: 2px;
            }
        }
    }

    :global {

        .moveable-origin {
            display: none;
        }

        .moveable-control {
            border-radius: 0!important;
            border: 1px solid #e6be00!important;
            background: #fff!important;
        }

        .moveable-line {
            background: #e6be00!important;
        }
    }
</style>