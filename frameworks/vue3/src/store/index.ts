import {createStore} from "vuex";
import {State, FONT} from "@/types";

const state: State = {
    search: "x",
    fonts: []
}

const getters = {
    filtered(state: State) {
        return state.fonts.filter((font: FONT) => {
            return state.search.length > 0 && font.title.toLowerCase().indexOf(state.search.toLowerCase()) > -1;
        })
    },
}

const mutations = {
    addFonts: (state: State, fonts: FONT[]) => {
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
