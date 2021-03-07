<script>
    import Moveable from "svelte-moveable";
    import {boxes} from 'store/index.js';
    import { updatePropertyOfItem } from 'store/store-tools.js';

    export let box;

    const frame = {
        translate: [0, 0],
    };
    const size = 24;
    const initialLeft = box.left;
    const initialTop = box.top;
    let target;

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
</script>

<div
    style="
        left: {initialLeft + 'px'};
        top: {(initialTop - size) + 'px'};
        width: {size + 'px'};
        height: {size + 'px'};"
    class="Handle" bind:this={target}>
    <div class="Handle__icon">
        <div class="Handle__bar"></div>
        <div class="Handle__bar"></div>
        <div class="Handle__bar"></div>
    </div>
</div>

<Moveable
    target={target}
    draggable={true}
    throttleDrag={0}
    on:dragStart={({ detail: { set } }) => {dragStart(set);}}
    on:drag={({ detail: { target, beforeTranslate }}) => { drag(beforeTranslate) }}
    on:dragEnd={({ detail: { target, isDrag, clientX, clientY }}) => { }}/>


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
            height: 100%;
            width: 100%;

            .Handle__bar {
                height: 2px;
                background: #fff;
                margin-bottom: 2px;
            }
        }
    }
</style>