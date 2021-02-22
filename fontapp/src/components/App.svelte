<script>
    import Tools from './tools/Tools.svelte'
    import Desk from './desk/Desk.svelte'
    export let name;
</script>

<div class="App">
    <Tools/>
    <Desk/>
</div>


<style>
    .App {
        display: flex;
    }
</style>