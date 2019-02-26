import C from '../src/scripts/constants';
import {
    todoData,
    searchValue,
    sortedBy,
    weatherData,
    isDataLoading,
} from '../src/scripts/reducers';

describe('todoReducer', () => {
    it('Add item', () => {
        const state = [];
        const action = {
            type: C.ADD_ITEM,
            payload: {
                label: 'test_item',
                id: 13,
            },
        };
        const result = todoData(state, action);
        expect(result).toEqual([
            {
                label: 'test_item',
                id: 13,
                important: false,
                done: false,
                shown: true,
            },
        ],);
    });
    it('Delete item', () => {
        const state = [
            {
                label: 'test_item',
                id: 13,
                important: false,
                done: false,
                shown: true,
            },
        ];
        const action = {
            type: C.DELETE_ITEM,
            payload: 13,
        };
        const result = todoData(state, action).length;
        expect(result).toBe(0);
    });
    it('Mark item as "done"', () => {
        const state = [
            {
                label: 'test_item',
                id: 13,
                important: false,
                done: false,
                shown: true,
            },
        ];
        const action = {
            type: C.DONE_ITEM,
            payload: 13,
        };
        const result = todoData(state, action);
        expect(result).toEqual([
            {
                label: 'test_item',
                id: 13,
                important: false,
                done: true,
                shown: true,
            },
        ]);
    });
    it('Mark item as "important"', () => {
        const state = [
            {
                label: 'test_item',
                id: 13,
                important: false,
                done: false,
                shown: true,
            },
        ];
        const action = {
            type: C.IMPORTANT_ITEM,
            payload: 13,
        };
        const result = todoData(state, action)[0].important;
        expect(result).toBeTruthy();
    });
});
describe('searchValue', () => {
    it('Check search value', () => {
        const state = '';
        const action = {
            type: C.SEARCH_ITEM,
            payload: 'test',
        };
        const result = searchValue(state, action);
        expect(result).toMatch(/test/);
    });
});
describe('sortedBy', () => {
    it('Check sorting value', () => {
        const state = '';
        const action = {
            type: C.FILTER_ITEM,
            payload: 'done',
        };
        const result = sortedBy(state, action);
        expect(result).toHaveLength(4);
    });
});
describe('weatherData', () => {
    it('Check data fetching', () => {
        const state = {};
        const action = {
            type: C.RECEIVE_DATA,
            payload: {
                test: '',
            },
        };
        const result = weatherData(state, action);
        expect(result).toHaveProperty('test', '');
    });
});
describe('isDataLoading', () => {
    it('Check switching between data loads status', () => {
        const state = true;
        const action = {
            type: C.RECEIVE_DATA,
        };
        const result = isDataLoading(state, action);
        expect(result).toBeFalsy();
    });
});
