import _base from './_base-module';
import Box from './../../../../../shared/classes/Box';

const Model = Box;

const state = {
    all: [],
    current: null
};

const getters = {
    ..._base.getters,
    getMaxZIndex(state) {
        return state.all.length > 0 ? (Math.max.apply(Math, state.all.map(function(b) { return b.zIndex; })) + 1) : 1;
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
        return _base.mutations.init(state, set, Model);
    },
    setCurrent(state, item) {
        return _base.mutations.setCurrent(state, item)
    },
    updatePropertyOfItem(state, payload) {
        return _base.mutations.updatePropertyOfItem(state, payload.item, payload.property, payload.value)
    },
    create(state, item){
        return _base.mutations.create(state, item, Model);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}