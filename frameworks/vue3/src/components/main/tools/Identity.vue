<script lang="ts">
import {defineComponent} from "vue";
import images from "@/shared/images";

export default defineComponent({
    name: 'Identity',
    components: {},
    props: {},
    setup() {
        return {
            image: images.logo
        }
    },
});
</script>

<template>
    <div class="Identity">
        <img :src="image" alt="Logo FontApp" />
    </div>
</template>


<style lang="scss" scoped>
.Identity {
    display: flex;
    height: 60px;
    margin-bottom: var(--GRID_SIZE_X2);

    .Identity__logo {
        height: 100%;
        width: auto;
        display: block;
    }
}
</style>
