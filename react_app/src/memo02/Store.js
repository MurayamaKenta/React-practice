import { createStore } from 'redux';

const initData = {
  data: [{ message: 'sample data', created: new Date() }],
  message: 'please type message::',
  mode: 'default',
  fdata: [],
};

//レデュサー
export function memoReducer(state = initData, action) {
  switch (action.type) {
    case 'ADD':
      return addReducer(state, action);
    case 'DELETE':
      return deleteReduce(state, action);
    case 'FIND':
      return findReducer(state, action);
    default:
      console.log('defa');
      return state;
  }
}

//レデュースアクション

function addReducer(state, action) {
  let data = {
    message: action.message,
    created: new Date(),
  };
  let newdata = state.data.slice();
  newdata.unshift(data);
  return {
    data: newdata,
    message: 'Added!!',
    mode: 'default',
    fdata: [],
  };
}

function findReducer(state, action) {
  let f = action.find;
  let fdata = [];
  console.log(state.data);
  state.data.foreach((value) => {
    if (value.message.indexOf(f) >= 0) {
      fdata.push(value);
    }
  });
  return {
    data: state.data,
    message: `find ${f} ::`,
    mode: 'find',
    fdata: fdata,
  };
}

function deleteReduce(state, action) {
  let newdata = state.data.slice();
  newdata.slice(action.index, 1);
  return {
    data: newdata,
    message: `delete ${action.index} ::`,
    mode: 'delete',
    fdata: [],
  };
}

//アクションクリエーター (アクションを作成するための関数)
export function addMemo(text) {
  return {
    type: 'ADD',
    message: text,
  };
}

export function deleteMemo(num) {
  return {
    type: 'DELETE',
    index: num,
  };
}

export function findMemo(text) {
  return {
    type: 'FIND',
    find: text,
  };
}

//ストア作成
export default createStore(memoReducer);
