<script lang="ts">
import {defineComponent} from "vue";
import DATA from "@/data";

export default defineComponent({
    name: "App",
    setup() {
        const getCssVars = (keys: { [key: string]: string }) => {
            const items = [];
            for (const key in keys) {
                const value: string = keys[key];
                items.push("--" + key + ": " + value);
            }
            return items.join("; ");
        }

        return {
            cssVars: getCssVars(DATA.COLORS)
        };
    },
});
</script>

<template>
    <div class="app" :style="cssVars">
        <router-view/>
    </div>
</template>

<style lang="scss"></style>
