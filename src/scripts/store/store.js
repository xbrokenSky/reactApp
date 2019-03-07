import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import appReducer from '../reducers';
import initialState from '../initialState';
import { receivePersonSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    appReducer,
    localStorage['redux-store'] ? JSON.parse(localStorage['redux-store']) : initialState,
    applyMiddleware(thunkMiddleware, sagaMiddleware)
);

sagaMiddleware.run(receivePersonSaga);

export const storageUnsubscribe = store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState());
    console.log(store.getState());
    return null;
});

export default store;
