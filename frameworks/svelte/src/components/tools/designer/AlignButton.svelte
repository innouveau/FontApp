<script>
    import {currentBox, boxes} from 'store/index.js';
    import {updatePropertyOfItem} from 'store/store-tools.js';
    export let textAlign;

    const update = () => {
        $boxes = updatePropertyOfItem($boxes, $currentBox, 'textAlign', textAlign);
    }
</script>

<div
    on:click={update}
    class="AlignButton"
    class:AlignButton--active={$currentBox !== null && $currentBox.textAlign === textAlign}>
    <img
        src="assets/img/icons/align-{textAlign}.svg"
        alt={textAlign}/>
</div>


<style type="text/scss">
    .AlignButton {
        width: 22px;
        padding: 2px;
        background: #888;
        cursor: pointer;
        margin-right: 6px;

        &.AlignButton--active {
            background: #e6be00;
            pointer-events: none;
        }

        img {
            width: 100%;
            display: block;
        }

        &:hover {
            background: #000;
        }

        &:last-child {
            margin-right: 0;
        }
    }
</style>