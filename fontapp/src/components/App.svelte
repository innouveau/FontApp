<script>
    import Tools from './tools/Tools.svelte'
    import Desk from './desk/Desk.svelte'
</script>

<div class="App page">
    <Tools/>
    <Desk/>
</div>


<style type="text/scss">
    .page {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
    }
</style>