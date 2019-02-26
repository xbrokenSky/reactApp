const getId = () => {
    return Math.round(((Math.random() * 1000) / 15) * (Math.random() * 100));
};

const createTodoItem = (label, id) => {
    return {
        label,
        id,
        important: false,
        done: false,
        shown: true,
    };
};

const switchProps = (array, id, prop) => {
    return array.map((item) => {
        if (item.id === id) {
            return {
                ...item,
                [prop]: !item[prop],
            };
        }
        return item;
    });
};

const searchData = (data, value) => {
    return data.filter((item) => {
        return new RegExp(value, 'i').test(item.label);
    });
};

const filterData = (data, value) => {
    switch (value) {
        case 'all':
            return data;
        case 'done':
            return data.filter((item) => {
                return item.done;
            });
        case 'active':
            return data.filter((item) => {
                return !item.done;
            });
        default:
            return data;
    }
};

export {
    getId,
    createTodoItem,
    switchProps,
    searchData,
    filterData,
};
