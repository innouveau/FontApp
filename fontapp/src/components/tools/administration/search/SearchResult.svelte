<script>
    import {currentBox, boxes, search} from 'store/index.js';
    import { updatePropertyOfItem } from 'store/store-tools.js';

    export let font;

    const select = () => {
        $boxes = updatePropertyOfItem($boxes, $currentBox, 'font_id', font.id);
        search.set('');
    }
</script>


<div
    on:click={select}
    class="SearchResult">
    {font.title} ({font.weight}) ({font.style})
</div>


<style type="text/scss">
    .SearchResult {
        cursor: pointer;
        padding: 8px 12px;
        border-bottom: 1px solid #ddd;

        &:last-child {
            border-bottom: 0;
        }

        &:hover {
            background: #ddd;
        }
    }
</style>