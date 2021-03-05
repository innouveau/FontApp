import _base from './_base-module';
import Font from './../../../../../shared/classes/Font';

const Model = Font;

const state = {
    all: [],
    current: null
};

const getters = {
    ..._base.getters,
    getFilteredFonts(state, getters, rootState) {
        return state.all.filter(font => {
            return font.category === rootState.currentCategory &&
                font.style === rootState.currentStyle &&
                font.source === 'google';
        })
    },
    getFontForCurrentBox(state, getters, rootState) {
        let box = rootState.boxes.current;
        if (!box) {
            return null;
        } else {
            return getters.getItemById(box.font_id);
        }
    }
};

const actions = {
    create(context, item){
        return _base.actions.create(context, item);
    },
    update(context, item){
        return _base.actions.update(context, item);
    },
    delete(context, item){
        return _base.actions.delete(context, item);
    }
};

const mutations = {
    init(state, set) {
        let newSet = set.map(item => {
            return {
                id: (set.indexOf(item) + 1),
                content: item
            }
        });
        return _base.mutations.init(state, newSet, Model);
    },
    setCurrent(state, item) {
        return _base.mutations.setCurrent(state, item)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}