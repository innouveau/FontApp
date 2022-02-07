<script lang="ts">
import {defineComponent} from "vue";
import DATA from "@/data";
import Font from "./../../../shared/classes/Font";
import {useStore} from "vuex";

export default defineComponent({
    name: "App",
    setup() {
        const store = useStore();

        const getCssVars = (DATA: { [key: string]: any }) => {
            const items: string[] = [];

            const addItems = (keys: { [key: string]: string }) => {
                for (const key in keys) {
                    const value: string = keys[key];
                    items.push("--" + key + ": " + value);
                }
            }
            addItems(DATA.STYLES.COLORS);
            addItems(DATA.STYLES.SIZES);
            return items.join("; ");
        }
        store.commit("addFonts", DATA.FONTS);


        return {
            cssVars: getCssVars(DATA)
        };
    },
});
</script>

<template>
    <div class="app" :style="cssVars">
        <router-view/>
    </div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
}

input {
    border :0;
}
</style>
