<script lang="ts">
import {defineComponent} from "vue";
import Identity from "@/components/main/tools/Identity.vue";
import Search from "@/components/main/tools/search/Search.vue";
import ToolBox from "@/components/main/tools/ToolBox.vue";

export default defineComponent({
    name: "Tools",
    components: {ToolBox, Search, Identity},
    props: {},
    setup() {
        return {};
    },
});
</script>

<template>
    <div class="Tools">
        <Identity />
        <ToolBox>
            <Search />
        </ToolBox>
    </div>
</template>

<style lang="scss" scoped>
.Tools {
}
</style>
