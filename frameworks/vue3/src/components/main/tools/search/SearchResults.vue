<script lang="ts">
import {defineComponent, PropType} from "vue";
import { Font } from "@/shared/types";
import SearchResult from "@/components/main/tools/search/SearchResult.vue";

export default defineComponent({
    name: 'SearchResults',
    components: {SearchResult},
    props: {
        fonts: {
            type: Array as PropType<Font[]>
        }
    },
    setup() {
        return {}
    },
});
</script>


<template>
    <div class="SearchResults">
        <SearchResult
            v-for="(font, index) in fonts"
            :key="index"
            :font="font" />
    </div>
</template>


<style lang="scss" scoped>
.SearchResults {
    max-height: 200px;
    background: #fff;
    position: absolute;
    top: 28px;
    left: 0;
    width: 100%;
    overflow: auto;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
}
</style>
