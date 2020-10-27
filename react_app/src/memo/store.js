import { createStore } from 'redux';

//ステートの定義
const initData = {
  data: [{ message: 'sample data', created: new Date() }],
  message: 'please type message: ',
  mode: 'default',
  fdata: [],
};

//レデューサー
export function memoReducer(state = initData, action) {
  switch (action.type) {
    case '追加':
      return addReducer(state, action);
    case '削除':
      return deleteReduce(state, action);
    case '検索':
      return findReducer(state, action);
    default:
      return state;
  }
}

//レデューサーアクション定義

/**
 * メモ追加レデューサー
 * @param {*} state
 * @param {*} action
 */
function addReducer(state, action) {
  let data = {
    message: action.message,
    created: new Date(),
  };
  console.log(data);
  let newData = state.data.slice();
  console.log(newData);
  newData.unshift(data);
  return {
    data: newData,
    message: '追加したよ！',
    mode: 'default',
    fdata: [],
  };
}

/**
 * メモ検索レデューサー
 * @param {*} state
 * @param {*} action
 */
function findReducer(state, action) {
  let f = action.find;
  let fdata = [];
  state.data.forEach((value) => {
    if (value.message.indexOf(f) >= 0) {
      fdata.push(value);
    }
  });
  return {
    data: state.data,
    message: `find!! ${f} !!`,
    mode: 'find',
    fdata: fdata,
  };
}

function deleteReduce(state, action) {
  let newData = state.data.slice();
  newData.splice(action.index, 1);
  return {
    data: newData,
    message: `delete ${action.index} :`,
    mode: 'delete',
    fdata: [],
  };
}

export function addMemo(text) {
  return {
    type: '追加',
    message: text,
  };
}
export function deleteMemo(num) {
  return {
    type: '削除',
    message: num,
  };
}
export function findMemo(text) {
  return {
    type: '検索',
    message: text,
  };
}

//ストア作成
export default createStore(memoReducer);
