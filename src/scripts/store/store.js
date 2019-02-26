import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from '../reducers';
import initialState from '../initialState';
// import { requestWeather } from '../actions';
// import WeatherApiService from '../services';

// const { getData } = new WeatherApiService();

// const resp = getData('London,uk').then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// });

const store = createStore(
    appReducer,
    localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : initialState,
    applyMiddleware(thunkMiddleware)
);

export const storageUnsubscribe = store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState());
    console.log(store.getState());
    return null;
});
// store.dispatch(requestWeather('London')).then(() => {
//     console.log(store.getState());
// });
export default store;
