import _base from './_base-module';
import Font from './../../../../../shared/classes/Font';
import {getFilteredFonts} from "../../../../react/src/store/selectors";

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
    },
    getBestMatch(state, getters, rootState) {
        let fonts, match, parameters;
        match = {};
        fonts = getters['getFilteredFonts'];
        parameters = rootState.parameters.all.filter(p => p.active);
        for (let font of fonts) {
            let score = 0;
            for (let parameter of parameters) {
                let diff;
                diff = Math.abs(parameter.value - font[parameter.key]);
                score += diff;
            }
            if (!match.font || score < match.score) {
                match.font = font;
                match.score = score;
            }
        }
        return match.font;
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
    },
    updatePropertyOfItem(state, payload) {
        return _base.mutations.updatePropertyOfItem(state, payload.item, payload.property, payload.value)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}