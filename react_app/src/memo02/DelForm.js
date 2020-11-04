import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMemo } from './Store';
class DelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    this.doAction = this.doAction.bind(this);
    this.doChange = this.doChange.bind(this);
  }
  doAction(e) {
    this.setState({
      number: e.target.value,
    });
  }
  doChange(e) {
    e.preventDefault();
    let action = deleteMemo(this.state.number);
    this.props.dispatch(action);
    this.setState({
      number: 0,
    });
  }

  render() {
    let n = 0;
    let item = this.props.data.map((value) => (
      <option key={n} value={n++}>
        {value.message.substring(0, 10)}
      </option>
    ));
    return (
      <div>
        <form action="" onSubmit={this.doAction}>
          <select name="" id="" defaultValue="-1">
            {item}
          </select>
          <input type="submit" value="Del" />
        </form>
      </div>
    );
  }
}

export default connect((state) => state)(DelForm);
