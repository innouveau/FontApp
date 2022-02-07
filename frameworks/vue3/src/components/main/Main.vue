<script lang="ts">
import {defineComponent} from "vue";
import Tools from "@/components/main/tools/Tools.vue";
import Desk from "@/components/main/desk/Desk.vue";

export default defineComponent({
    name: "Main",
    components: {Desk, Tools},
    setup() {
        return {};
    },
});
</script>

<template>
    <div class="Main">
        <Tools/>
        <Desk/>
    </div>
</template>

<style lang="scss" scoped>
.Main {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: var(--BACKGROUND);;
    display: flex;
    color: var(--MAIN_TEXT);

    .Tools {
        width: 300px;
        overflow: auto;
    }

    .Desk {
        width: calc(100% - 300px);
        overflow: hidden;
    }
}
</style>
