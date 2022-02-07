<script lang="ts">
import {defineComponent, PropType} from "vue";
import { FONT } from "@/types";
import {useStore} from "vuex";

export default defineComponent({
    name: 'SearchResult',
    components: {},
    props: {
        font: {
            type: Object as PropType<FONT>
        }
    },
    setup(props) {
        const store = useStore();

        const select = () => {
            //store.commit('boxes/updatePropertyOfItem', {item: this.currentBox, property: 'font_id', value: this.font.id});
            store.commit("updateSearch", "");
            console.log(props.font);
        }
        return {
            select
        }
    },
});
</script>


<template>
    <div
        @click="select()"
        class="SearchResult">
        {{font.title}} ({{font.weight}}) ({{font.style}})
    </div>
</template>


<style lang="scss" scoped>
.SearchResult {
    cursor: pointer;
    padding: 8px 12px;
    border-bottom: 1px solid #ddd;

    &:last-child {
        border-bottom: 0;
    }

    &:hover {
        background: #ddd;
    }
}
</style>
