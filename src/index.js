import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
//import {logger} from 'redux-logger';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from "./store/reducer";

const store = createStore(reducer, applyMiddleware());

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
