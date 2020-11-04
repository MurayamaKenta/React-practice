import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import App from './App';

//ステートのマッピング
function mappingState(state) {
  console.log('state');
  console.log(state);
  return state;
}

//Appコンポーネント
class ReduxApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    );
  }
}
//ストアのコネクト
// ReduxApp = connect()(ReduxApp); //本来は必要ない

class Message extends Component {
  style = {
    fontSize: '20px',
    color: 'red',
  };
  render() {
    console.log('message');
    console.log(this.props);
    return (
      // ここのpropsはstoreの中の値
      //Message = connect(mappingState)(Message);のmappingStateでpropsを受け取ってるんだと思う
      <p style={this.style}>
        {this.props.message} : {this.props.counter}
      </p>
    );
  }
}
//ストアコネクト
Message = connect(mappingState)(Message);
// ↑を分解するとこうなる
// let wrapConnect = connect();
// Message = wrapConnect(Message)

class Button extends Component {
  constructor(props) {
    super(props);
    this.doAction = this.doAction.bind(this);
  }
  //ボタンクリックでディスパッチを実行(shift押しながらクリック or クリック)
  doAction(e) {
    console.log('action_button');
    console.log(this.props);

    if (e.shiftKey) {
      this.props.dispatch({ type: '増える' });
    } else {
      this.props.dispatch({ type: '減る' });
    }
  }
  render() {
    return (
      <div>
        {/* <p>{this.props.message}</p> */}
        <button onClick={this.doAction}>Click Come On:</button>
      </div>
    );
  }
}
//ストアのコネクト
Button = connect()(Button);
export default ReduxApp;
