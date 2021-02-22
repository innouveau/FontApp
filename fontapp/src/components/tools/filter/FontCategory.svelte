<script>
    import { currentCategory } from 'store/index.js'
    let categories;

    categories = [
        'Sans Serif',
        'Serif',
        'Slab Serif',
        'Monospace',
        'Script',
        'Fun'
    ];


    const update = (value) => {
        currentCategory.update(v => value)
    };
</script>


<div class="FontCategory">
    <select
        on:change="{(e) => update(e.target.value)}">
        {#each categories as category}
            <option value={category}>
                {category}
            </option>
        {/each}
    </select>

</div>


<style>
    .FontCategory {

    }
</style>