import { combineReducers } from 'redux';
import { createTodoItem, switchProps } from '../helpers';
import C from '../constants';

export const todoData = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case C.ADD_ITEM:
            return [
                ...state,
                createTodoItem(payload.label, payload.id),
            ];
        case C.DELETE_ITEM:
            return state.filter((item) => {
                return item.id !== payload;
            });
        case C.DONE_ITEM:
            return switchProps(state, payload, 'done');
        case C.IMPORTANT_ITEM:
            return switchProps(state, payload, 'important');
        default:
            return state;
    }
};

export const searchValue = (state = '', action) => {
    const { type, payload } = action;

    switch (type) {
        case C.SEARCH_ITEM:
            return payload;
        default:
            return state;
    }
};

export const sortedBy = (state = 'all', action) => {
    const { type, payload } = action;

    switch (type) {
        case C.FILTER_ITEM:
            return payload;
        default:
            return state;
    }
};

export const weatherData = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case C.RECEIVE_DATA:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};

export const isDataLoading = (state = false, action) => {
    const { type } = action;

    switch (type) {
        case C.FETCH_DATA:
            return true;
        case C.RECEIVE_DATA:
            return false;
        default:
            return state;
    }
};

const appReducer = combineReducers({
    todoData,
    searchValue,
    sortedBy,
    weatherData,
    isDataLoading,
});

export default appReducer;
