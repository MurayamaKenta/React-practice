import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMemo } from './Store';

class AddForm extends Component {
  btn = {
    fontSize: '15px',
  };
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  doAction(e) {
    e.preventDefault();
    let action = addMemo(this.state.message);
    this.props.dispatch(action);
    this.setState({
      message: '',
    });
  }

  render() {
    // console.log('addForm');
    // console.log(this.props);
    return (
      <div>
        <p>{this.props.message}</p>
        <form action="" onSubmit={this.doAction}>
          <input
            type="text"
            onChange={this.doChange}
            value={this.state.message}
            required
          />
          <input type="submit" value="Add" style={this.btn} />
        </form>
      </div>
    );
  }
}

export default connect((state) => state)(AddForm);
