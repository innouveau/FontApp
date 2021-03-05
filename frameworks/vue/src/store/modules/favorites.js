import _base from './_base-module';
import Font from './../../../../../shared/classes/Font';

const Model = Font;

const state = {
    all: [],
    current: null
};

const getters = {
    ..._base.getters
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
    create(state, item){
        state.all.push(item);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}