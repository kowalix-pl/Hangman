import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import defaultReducer from './reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store= createStore(defaultReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);
