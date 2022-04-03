const replaceItemAtIndex = (arr, index, value) => {
    return [...arr.slice(0, index), value, ...arr.slice(index + 1)];
};

const replaceArrayItem = (arr, value, finderCallBack) => {
    const i = arr.findIndex(finderCallBack)
    if (i < 0) {
        return arr
    }
    return replaceItemAtIndex(arr, i, value)
};

const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export { replaceItemAtIndex, replaceArrayItem, removeItemAtIndex }
