import C from '../constants';
import { getId } from '../helpers';
import WeatherApiService from '../services';

const { getData } = new WeatherApiService();

const addItem = (label) => {
    return {
        type: C.ADD_ITEM,
        payload: {
            label,
            id: getId(),
        },
    };
};

const deleteItem = (id) => {
    return {
        type: C.DELETE_ITEM,
        payload: id,
    };
};

const onDone = (id) => {
    return {
        type: C.DONE_ITEM,
        payload: id,
    };
};

const onImportant = (id) => {
    return {
        type: C.IMPORTANT_ITEM,
        payload: id,
    };
};

const onSearch = (txt) => {
    return {
        type: C.SEARCH_ITEM,
        payload: txt,
    };
};

const onFilter = (category) => {
    return {
        type: C.FILTER_ITEM,
        payload: category,
    };
};

const fetchData = () => {
    return {
        type: C.FETCH_DATA,
        // payload: getData(cityName).then((response) => {
        //     return response;
        // }),
    };
};

const receiveData = (response) => {
    return {
        type: C.RECEIVE_DATA,
        payload: response,
    };
};

// const dataLoaded = () => {
//     return {
//         type: C.DATA_LOADED,
//     };
// };

const requestWeather = (cityName) => {
    return (dispatch) => {
        dispatch(fetchData);

        return getData(cityName).then((response) => {
            dispatch(receiveData(response));
        }).catch((error) => {
            console.log(error);
        });
    };
};

export {
    addItem,
    deleteItem,
    onSearch,
    onFilter,
    onDone,
    onImportant,
    fetchData,
    receiveData,
    // dataLoaded,
    requestWeather,
};
