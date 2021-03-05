const getters = {
    getAll(state) {
        return state.all;
    },
    getItemById: (state) => (id) => {
        let result = state.all.find(item => item.id === id);
        return result ? result : null;
    },
    getItemByProperty: (state) => (property, value, ignoreCase) => {
        if (ignoreCase) {
            return state.all.find(item => item[property].toLowerCase() === value.toLowerCase());
        } else {
            return state.all.find(item => item[property] === value);
        }
    },
    getSetByIds: (state) => (ids) => {
        // we cannot user array.filter here, which would not respect the order
        // or the ids, see #693
        let set = [];
        for (let id of ids) {
            let theItem = state.all.find(item => item.id === id);
            if (theItem) {
                set.push(theItem);
            }
        }
        return set;
    },
    getLastItem(state) {
        return state.all[state.all.length - 1];
    }
};

const actions = {};

const mutations = {
    init(state, set, Model) {
        state.all = [];
        for (let item of set) {
            if (item) {
                state.all.push(new Model(item));
            }
        }
    },
    setCurrent(state, item) {
        state.current = item;
    },
    unsetCurrent(state) {
        state.current = null;
    },
    create(state, item, Model) {
        state.all.push(new Model(item));
    },
    update(state, item) {
        state.all = state.all.map((theItem) => {
            if (theItem.id === item.id) {
                for (let key in theItem) {
                    theItem[key] = item[key];
                }
            }
            return theItem;
        });
    },
    updatePropertyOfItem(state, item, property, value) {
        state.all = state.all.map((theItem) => {
            if (theItem.id === item.id) {
                console.log("!");
                theItem[property] = value;
            }
            return theItem;
        });
    },
    delete(state, item) {
        state.all = state.all.filter(function(thisItem) {
            return thisItem.id !== item.id;
        });
    },
    updateProperty(state, payload) {
        state[payload.key] = payload.value;
    },
    reset(state) {
        state.all = [];
        state.current = null;
    }
};

export default {
    getters,
    actions,
    mutations
}