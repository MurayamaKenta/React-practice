import React from 'react';
import '../App.css';

// class Button extends React.Component {
//   constructor(props) {
//     super(props);
//     this.value = props.value;
//   }
//   render() {
//     return <button>{this.value}</button>;
//   }
// }

const Button = (props) => {
  const value = props.value;
  const disabled = props.isDisabled;

  return (
    <button disabled={disabled} className={disabled ? 'red' : 'blue'}>
      {value}
    </button>
  );
};

export default Button;
