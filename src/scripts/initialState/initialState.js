import { createTodoItem, getId } from '../helpers';

const initialState = {
    todoData: [
        createTodoItem('Create react app', getId()),
        createTodoItem('Add redux and react-redux', getId()),
        createTodoItem('Add react-router', getId()),
    ],
    searchValue: '',
    sortedBy: 'all',
    weatherData: {
        name: 'Moscow',
        main: {
            temp: 10,
            temp_min: 5,
            pressure: 768,
        },
    },
    isDataLoading: false,
    // isFetchFailed: false,
};

export default initialState;
