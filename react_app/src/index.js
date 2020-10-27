import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
// import App from './components/App';
// import ReduxApp from './components/redux_app'; //Redux
import MemoApp from './components/MemoApp'; //Memo
import MemoStore from './memo/store'; //Memo
// import Button from './components/Button';

import * as serviceWorker from './serviceWorker';

let dom = document.getElementById('root');
// let el = (
//   <React.StrictMode>
//     <App title="Kenta" msg="state" />
//     {/* <Button value="value01" isDisabled={false} /> */}
//   </React.StrictMode>
// );

/**
 * Redux
 */
//ステートの値
// let state_value = {
//   counter: 0,
//   message: 'COUNTER',
// };

// //レデューザー
// function counter(state = state_value, action) {
//   switch (action.type) {
//     case '増える':
//       return {
//         counter: state.counter + 1,
//         message: '増えた',
//       };
//     case '減る':
//       return {
//         counter: state.counter - 1,
//         message: '減った',
//       };
//     default:
//       return state;
//   }
// }

// //ストア作成
// let store = createStore(counter);

// //表示をレンダリング
// let el = (
//   <Provider store={store}>
//     <ReduxApp />
//   </Provider>
// );

/**
 * !メモアプリ作成
 */
// let el = (
//   <Provider store={MemoStore}>
//     <MemoApp />
//   </Provider>
// );

ReactDOM.render(
  <Provider store={MemoStore}>
    <MemoApp />
  </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(el, dom);

// serviceWorker.unregister();
