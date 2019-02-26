// 'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './store';
// import registerServiceWorker from './registerServiceWorker';
// import { store } from './store/configureStore';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// registerServiceWorker();
