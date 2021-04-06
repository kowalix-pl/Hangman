import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import defaultReducer from './reducers/index.js';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
const store= createStore(defaultReducer,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);
