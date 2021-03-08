<script>
    import RangeSlider from "svelte-range-slider-pips";

    const value = 50;

    const update = (e) => {
        console.log(e.detail.value);
    }

</script>


<div class="FontSize designer__row">
    <div class="designer__label">
        Font size
    </div>
    <div class="designer__content">
        <RangeSlider
            values={[value]}
            on:change={(e) => update(e)}/>
    </div>
</div>


<style type="text/scss">
    .FontSize {

    }
</style>