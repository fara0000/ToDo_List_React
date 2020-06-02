import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App/App";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './root/rootReducer';

const store = createStore(rootReducer);

const root = document.getElementById('root');
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
root);