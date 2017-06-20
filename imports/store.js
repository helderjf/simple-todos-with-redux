import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/allReducers.js'
import App from './ui/App.jsx';
import todosReducer from './reducers/todosReducer.js';
import logger from 'redux-logger';


const middleware = applyMiddleware(logger());

export const store = createStore(todosReducer, { hideCompleted: true }, middleware);




Meteor.startup(() => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('render-target')
    );
});


// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('render-target')
// );
