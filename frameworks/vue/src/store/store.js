import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import boxes from './modules/boxes';
import parameters from './modules/parameters';
import fonts from './modules/fonts';


const state = {
    currentCategory: ''
};
const mutations = {
    updateProperty(state, payload) {
        state[payload.key] = payload.value;
    }
};

const store = new Vuex.Store({
    state,
    mutations,
    actions: {},
    modules: {
        boxes, parameters, fonts
    }

});

window.store = store;

export default store
