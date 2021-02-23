<script>
    import ParameterSlider from "./ParameterSlider.svelte";
    import ParameterToggle from "./ParameterToggle.svelte";

    export let parameter;
</script>


<div
    class="Parameter"
    class:Parameter--inactive={!parameter.active}>
    <div class="Parameter__title">
        {parameter.title} ({parameter.value})
    </div>
    <ParameterSlider parameter={parameter}/>
    <ParameterToggle parameter={parameter}/>
</div>


<style type="text/scss">
    .Parameter {
        display: flex;
        align-items: center;
        height: 28px;

        .Parameter__title {
            width: calc(100% - 158px);
        }

        &.Parameter--inactive {
            opacity: 0.5;

            .ParameterSlider {
                pointer-events: none;
            }
        }
    }
</style>