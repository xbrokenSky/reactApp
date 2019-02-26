import {
    getId,
    createTodoItem,
    switchProps,
    searchData,
    filterData,
} from '../src/scripts/helpers';

test('Check item\'s ID generation', () => {
    const result = getId();
    expect(result).toBeGreaterThan(0);
});
test('Check creating todo Item', () => {
    const result = createTodoItem('test', 13);
    expect(result).toEqual({
        label: 'test',
        id: 13,
        important: false,
        done: false,
        shown: true,
    });
});
test('Check for correct switching props in items', () => {
    const array = [
        {
            id: 13,
            test: false,
        },
    ];
    const result = switchProps(array, 13, 'test')[0].test;
    expect(result).toBeTruthy();
});
test('Check for correct searching values', () => {
    const array = [
        {
            label: 'test',
            id: 13,
            test: false,
        },
        {
            label: 'holdInArray',
            id: 19,
            test: false,
        },
    ];
    const result = searchData(array, 'test').length;
    expect(result).toBe(1);
});
test('Check for correct items filtering', () => {
    const array = [
        {
            label: 'test',
            id: 13,
            done: false,
        },
        {
            label: 'holdInArray',
            id: 19,
            done: true,
        },
    ];
    const result = filterData(array, 'done');
    expect(result).toEqual([
        {
            label: 'holdInArray',
            id: 19,
            done: true,
        },
    ]);
});
