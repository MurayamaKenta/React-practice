import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Rect01 from './Rect';

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
//! ②親子コンポーネント
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
function App01(props) {
  return (
    <div className="App">
      <h1>{props.title}</h1>
      <Rect01 x="50" y="50" w="150" h="150" c="cyan" r="50" />
      <Rect01 x="150" y="100" w="150" h="150" c="magenta" r="75" />
      <Rect01 x="100" y="150" w="150" h="150" c="black" r="25" />
    </div>
  );
}

// export default App;
export default App01;
