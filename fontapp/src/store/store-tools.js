export const addToStore = (set, item) => {
    return [...set, item];
};

export const addPropertyOfItem = (set, item, property, value) => {
    let newSet = [];
    for (let i of set) {
        if (i === item) {
            i[property] = value;
        }
        newSet.push(i);
    }
    return newSet;
};