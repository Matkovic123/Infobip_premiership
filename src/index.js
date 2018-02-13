import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import registerServiceWorker from './registerServiceWorker';


// const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
