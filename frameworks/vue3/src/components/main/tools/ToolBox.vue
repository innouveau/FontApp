<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: 'ToolBox',
    components: {},
    props: {},
    setup() {
        return {}
    },
});
</script>


<template>
    <div class="ToolBox">
        <slot />
    </div>
</template>


<style lang="scss" scoped>
.ToolBox {
    border: 1px dotted rgba(0,0,0,0.4);
    padding: var(--GRID_SIZE_X2);
    margin-bottom: var(--GRID_SIZE_X2);
}
</style>
