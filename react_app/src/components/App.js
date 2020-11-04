import React from 'react';
// import logo from './logo.svg';
import '../App.css';
import Rect01 from '../Rect';

// ========================
//!①シンプルコンポーネント作成
// ========================
// function App(props) {
//   return (
//     <div className="App">
//       <h1>{props.title}</h1>
//       <p>{props.message} </p>
//     </div>
//   );
// }

// ========================
//! ②親子コンポーネント（同ファイル内）
// ========================
// function App(props) {
//   return (
//     <div className="App">
//       <h1>{props.title}</h1>
//       <Rect x="50" y="50" w="150" h="150" c="cyan" />
//       <Rect x="150" y="100" w="150" h="150" c="magenta" />
//       <Rect x="100" y="150" w="150" h="150" c="black" />
//     </div>
//   );
// }

// function Rect(props) {
//   const style = {
//     backgroundColor: props.c,
//     position: 'absolute',
//     top: `${props.x}px`,
//     left: `${props.y}px`,
//     width: `${props.w}px`,
//     height: `${props.h}px`,
//   };
//   return <div style={style}></div>;
// }

// ========================
//! ③別ファイルコンポーネント
// ========================
// function App(props) {
//   return (
//     <div className="App">
//       <h1>{props.title}</h1>
//       <Rect01 x="50" y="50" w="150" h="150" c="cyan" r="50" />
//       <Rect01 x="150" y="100" w="150" h="150" c="magenta" r="75" />
//       <Rect01 x="100" y="150" w="150" h="150" c="black" r="25" />
//     </div>
//   );
// }

// ========================
//! ④ステート使用(class型コンポーネント)
// ========================
// class App extends React.Component {
//   msgStyle = {
//     fontSize: '24px',
//     color: 'red',
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       msg: 'Hello State',
//     };
//     //5秒後にstate.msgに「GO!」が追加されていく
//     let timer = setInterval(() => {
//       this.setState((state) => ({
//         msg: `${state.msg} GO!`,
//       }));
//     }, 5000);
//   }

//   render() {
//     return (
//       <div>
//         <h1>React</h1>
//         <p style={this.msgStyle}>{this.state.msg}</p>
//         <p style={this.msgStyle}>{this.props.msg}</p>
//       </div>
//     );
//   }
// }

// ========================
//! ⑤クリックしたときにステートの中身変更
// ========================
// class App extends React.Component {
//   msgStyle = {
//     fontSize: '24px',
//     color: 'red',
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       msg: 'count start',
//       counter: 0,
//     };
//     this.doClick = this.doClick.bind(this);
//   }
//   //ボタンタップした時の挙動(数字が1++される)
//   doClick() {
//     this.setState((state) => ({
//       counter: state.counter + 1,
//       msg: `count: ${state.counter}`,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <h1>React</h1>
//         <Rect01 x="350" y="350" w="150" h="150" c="cyan" r="50" />
//         <p style={this.msgStyle}>{this.state.msg}</p>
//         <button onClick={this.doClick}>Click</button>
//       </div>
//     );
//   }
// }

// =============================
//! ⑥stateの値によって表示内容の
// =============================
// class App extends React.Component {
//   msgStyle = {
//     fontSize: '24px',
//     color: 'red',
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       msg: 'count start !!',
//       counter: 1,
//       flag: true,
//     };
//     this.doClick = this.doClick.bind(this);
//   }
//   //ボタンタップした時の挙動(数字が1++される)
//   doClick() {
//     this.setState((state) => ({
//       counter: state.counter + 1,
//       msg: state.counter,
//       flag: !state.flag, //trueからfalseへ、falseからtrueへ変更している。
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <h1>React</h1>
//         {/* //三項演算子での条件分岐 */}
//         {this.state.flag ? (
//           <p style={this.msgStyle}>count : {this.state.msg} 奇数</p>
//         ) : (
//           <p style={this.msgStyle}>{this.state.msg}です！ 偶数</p>
//         )}
//         <button onClick={this.doClick}>Click</button>
//       </div>
//     );
//   }
// }

// =============================
//! ⑦クリックしたら四角形が増えていくコンポーネント
// ちゃんと動作していない泣
// =============================
// class App extends React.Component {
//   data = []; //クリックした位置の情報をまとめて保存するための配列用意
//   msgStyle = {
//     fontSize: '24px',
//     color: 'red',
//   };
//   area = {
//     width: '500px',
//     height: '500px',
//     border: '1px solid blue',
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       list: this.data,
//     };
//   }
//   //ボタンタップした時の挙動
//   doClick(e) {
//     //ページ上の座標取得
//     let x = e.pageX;
//     let y = e.pageY;
//     this.data.push({ x: x, y: y });
//     this.setState({
//       list: this.data,
//     });
//   }
//   draw(d) {
//     let s = {
//       position: 'absolute',
//       left: d.x - 25 + 'px',
//       top: d.y - 25 + 'px',
//       width: '50px',
//       height: '50px',
//       backgroundColor: '#66f3',
//     };
//     return <div style={s}></div>;
//   }

//   render() {
//     return (
//       <div>
//         <h1>React</h1>
//         <h2 style={this.msgStyle}>show rect .</h2>
//         <div style={this.area} onClick={this.doClick}>
//           {this.data.map((value) => {
//            return this.draw(value);
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// =============================
//! ⑧リスト表示コンポーネント
// =============================

/**
 * 表示のベースとなるコンポーネント
//  */
// class App extends React.Component {
//   data = ['this is list sample', 'リストサンプル', '配列サンプル'];
//   msgStyle = {
//     fontSize: '24px',
//     color: 'red',
//   };
//   area = {
//     width: '500px',
//     height: '500px',
//     border: '1px solid blue',
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       list: this.data,
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>React</h1>
//         <h2 style={this.msgStyle}>show List .</h2>
//         <List title="サンプル------" data={this.data} />
//       </div>
//     );
//   }
// }

// /**
//  * リスト全体をまとめて表示する。
//  */
// class List extends React.Component {
//   number = 1;

//   render() {
//     let data = this.props.data;
//     return (
//       <div>
//         <p>{this.props.title}</p>
//         <ul>
//           {data.map((item) => {
//             return (
//               <Item number={this.number++} value={item} key={this.number} />
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// /**
//  * リストの各項目を表示するコンポーネント
//  */
// class Item extends React.Component {
//   li = {
//     color: 'red',
//     margin: '0px',
//     padding: '0px',
//   };

//   render() {
//     return (
//       <li style={this.li}>
//         <span> [{this.props.number}]</span>
//         {this.props.value}
//       </li>
//     );
//   }
// }

// =============================
//! ⑨子エレメント使用
// =============================
//親コンポーネント
// class App extends React.Component {
//   input = '';
//   msgStyle = {
//     fontSize: '24px',
//     color: 'red',
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       msg: 'type your name: ',
//     };
//     this.doChange = this.doChange.bind(this);
//   }

//   doChange(event) {
//     this.setState({
//       msg: event.target.value,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>React</h1>
//         <p>{this.state.msg}</p>
//         <Message title="Children!!">
//           これはコンポーネント内のコンテンツです。
//           まるでテキストを分割してリストにして表示する。
//         </Message>
//         <button onClick={this.doChange} value="hey">
//           Click
//         </button>
//       </div>
//     );
//   }
// }

// /**
//  *子コンポーネント
//  */
// class Message extends React.Component {
//   render() {
//     let content = this.props.children;
//     let arr = content.split('。');
//     let arr02 = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].trim() != '') {
//         arr02.push(arr[i]);
//       }
//     }
//     let list = arr02.map((value, key) => {
//       return <li key={key}>{value}</li>;
//     });
//     return (
//       <div>
//         <h2>{this.props.title}</h2>
//         <ol>{list}</ol>
//       </div>
//     );
//   }
// }

// =============================
//! ⑨formの使用
// =============================
// class App extends React.Component {
//   input = '';
//   msgStyle = {
//     fontSize: '24px',
//     color: 'red',
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       msg: 'type your name: ',
//     };
//     this.doChange = this.doChange.bind(this);
//     this.doSubmit = this.doSubmit.bind(this);
//   }

//   doChange(event) {
//     this.input = event.target.value;
//   }
//   doSubmit(event) {
//     this.setState({
//       msg: `Hello ${this.input} !!`,
//     });
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <div>
//         <h1>React</h1>
//         <p>{this.state.msg}</p>
//         <form action="" onSubmit={this.doSubmit}>
//           <label htmlFor="">
//             <span style={this.msgStyle}>Message:</span>
//             <input
//               type="text"
//               onChange={this.doChange}
//               required //バリデーション(必須入力)
//               pattern="[A-Za-z _,.]+" //バリデーション(正規表現[アルファベット])
//             />
//           </label>
//           <input type="submit" value="Click" />
//         </form>
//       </div>
//     );
//   }
// }
// =============================
//! ⑩親コンポーネントの関数をpropsで->子コンポーネントに渡す（バリデーションルール）
// =============================
// class App extends React.Component {
//   input = '';
//   msgStyle = {
//     fontSize: '24px',
//     color: 'red',
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       msg: 'type your name: ',
//     };
//     this.doCheck = this.doCheck.bind(this);
//   }

//   doCheck(event) {
//     alert(`${event.target.value} は長すぎます（最大10文字）`);
//   }

//   render() {
//     return (
//       <div>
//         <h1>React</h1>
//         <h2>{this.state.msg}</h2>
//         <Message maxlength="10" onCheck={this.doCheck} />
//       </div>
//     );
//   }
// }

// class Message extends React.Component {
//   constructor(props) {
//     super(props);
//     this.doChange = this.doChange.bind(this);
//   }
//   doChange(e) {
//     if (e.target.value.length > this.props.maxlength) {
//       this.props.onCheck(e);

//       e.target.value = e.target.value.substr(0, this.props.maxlength); //これがあると何になるのか不明
//     }
//   }
//   render() {
//     return <input type="text" onChange={this.doChange} />;
//   }
// }

// =============================
//! ⑩コンテキスト作成（共通の値）
// =============================
// let data = { title: 'title', message: 'This is Context Message' };
// const SampleContext = React.createContext(data);

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>React Context</h1>
//         <Title />
//         <Message />
//       </div>
//     );
//   }
// }
// class Title extends React.Component {
//   static contextType = SampleContext;
//   render() {
//     return (
//       <div>
//         {console.log(this.context.title)}
//         <h2>{this.context.title}</h2>
//       </div>
//     );
//   }
// }

// class Message extends React.Component {
//   static contextType = SampleContext;
//   render() {
//     return (
//       <div>
//         <h2>{this.context.message}</h2>
//       </div>
//     );
//   }
// }

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
//! 11, コンテキストの中身を変更する場合(Providerを使用する)
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
let data = { title: 'title', message: 'This is Context Message' };
const SampleContext = React.createContext(data);
class App extends React.Component {
  newdata = {
    title: '新しいタイトル',
    message: '新しメッセージ',
  };
  render() {
    return (
      <div>
        <h1>React</h1>
        <Title />
        <Message />
        <SampleContext.Provider value={this.newdata}>
          <Title />
          <Message />
        </SampleContext.Provider>
        <Title />
        <Message />
      </div>
    );
  }
}

class Title extends React.Component {
  static contextType = SampleContext;
  render() {
    return (
      <div>
        <h2>{this.context.title}</h2>
      </div>
    );
  }
}

class Message extends React.Component {
  static contextType = SampleContext;
  render() {
    return (
      <div>
        <p>{this.context.message}</p>
      </div>
    );
  }
}
export default App;
