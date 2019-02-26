import React from 'react';

global.React = React;
global.testState = {
    todoData: [
        {
            label: 'first test item',
            id: 1,
            important: false,
            done: false,
            shown: true,
        },
        {
            label: 'second test item',
            id: 2,
            important: false,
            done: false,
            shown: true,
        },
        {
            label: 'third test item',
            id: 3,
            important: false,
            done: false,
            shown: true,
        },
    ],
    searchValue: 'test',
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
};
