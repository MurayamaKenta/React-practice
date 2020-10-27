import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from '../components/App';

//ステートの値
let state_value = {
  counter: 0,
  message: 'COUNTER',
};

//レデューザー
function counter(state = state_value, action) {
  switch (action.type) {
    case '増える':
      return {
        counter: state.counter + 1,
        message: '増えた',
      };
    case '減る':
      return {
        counter: (state.counter = 1),
        message: '減った',
      };
    default:
      return state;
  }
}

//ストア作成
let store = createStore(counter);

//表示をレンダリング
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
