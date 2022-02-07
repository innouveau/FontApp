<script lang="ts">
import {defineComponent, computed, ref} from "vue";
import {useStore} from "vuex";
import SearchResults from "@/components/main/tools/search/SearchResults.vue";
import { FONT } from "@/types";

export default defineComponent({
    name: 'Search',
    components: {SearchResults},
    props: {},
    setup() {
        const store = useStore();

        const search = ref(store.state.search);

        return {
            search,
            results: computed(() => store.getters["filtered"]),
            update: () => store.commit("updateSearch", search.value)
        }
    },
});
</script>


<template>
    <div class="Search">
        <input
            v-model="search"
            @keyup="update"
            type="text"
            placeholder="Search..."/>
        <SearchResults
            v-if="results.length > 0"
            :fonts="results"/>
    </div>
</template>


<style lang="scss" scoped>
.Search {
    position: relative;

    input {
        padding: 4px;
        width: 100%;
        height: 28px;
        outline: none;
    }
}
</style>
