import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
// import '../node_modules/font-awesome/font-awesome.css';

import '../node_modules/font-awesome/css/font-awesome.css'

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers((applyMiddleware(reduxThunk))));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'));

