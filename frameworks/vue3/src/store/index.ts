import { createStore } from "vuex";
import { State, Font } from "@/shared/types";

const state: State = {
    search: "",
    fonts: []
}

const getters = {
    filtered(state: State) {
        return state.fonts.filter((font: Font) => {
            return state.search.length > 0 && font.title.toLowerCase().indexOf(state.search.toLowerCase()) > -1;
        })
    },
}

const mutations = {
    addFonts: (state: State, fonts: Font[]) => {
        state.fonts = fonts;
    },
    updateSearch: (state: State, search: string) => {
        state.search = search;
    }
}

export default createStore({
    state,
    getters,
    mutations,
    actions: {},
    modules: {},
});
