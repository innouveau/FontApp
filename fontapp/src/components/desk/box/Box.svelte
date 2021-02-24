<script>
    import Text from "./Text.svelte";
    import Handle from "./Handle.svelte";
    import { currentBox } from "store/index.js";

    export let box;

    const select = () => {
        currentBox.set(box);
    }
</script>


<div
    on:click={select}
    class="Box">
    <Text box={box}/>
<!--    <Handle box={box}/>-->
</div>


<style type="text/scss">
    .Box {
        position: relative;
        padding: 8px;
        z-index: 2;

        > .single-resizer {
            border: 1px dotted #e6be00;
            background: transparent;
            z-index: 1;

            .resizable-handler {
                cursor: default!important;
            }

            .square {
                border: 1px solid #e6be00;
            }
        }

        .Text {
            position: absolute;
            z-index: 2;
        }

        .Handle {
            position: absolute;
            z-index: 3;
        }
    }
</style>