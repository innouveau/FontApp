<script>
    export let font
</script>


<div class="SearchResult">
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