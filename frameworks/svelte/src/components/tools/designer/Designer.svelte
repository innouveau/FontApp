<script>
    import FontFamily from "./FontFamily.svelte";
    import Align from "./Align.svelte";
    import FavoriteButton from "./FavoriteButton.svelte";
    import FontSize from "./FontSize.svelte";
    import Color from "./Color.svelte";

</script>


<div class="Designer tool-box">
    <div class="tool-box__row">
        <FontFamily/>
        <FavoriteButton/>
    </div>
    <FontSize/>
    <Color/>
    <Align/>
</div>


<style type="text/scss" global>
    .Designer {

        .designer__row {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #fff;
            padding: 6px 0;

            .designer__label {
                width: calc(100% - 158px)
            }

            .designer__content {
                width: 158px;
                position: relative;
            }
        }
    }
</style>