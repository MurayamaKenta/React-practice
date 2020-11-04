import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findMemo } from './store';

class FindForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      find: '',
    };
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }
  doChange(e) {
    this.setState({
      find: e.target.value,
    });
  }
  doAction(e) {
    e.preventDefault();
    let action = findMemo(this.state.find);
    this.props.dispatch(action);
  }

  render() {
    return (
      <form action="" onSubmit={this.doAction}>
        <input
          type="text"
          size="10px"
          onChange={this.doChange}
          value={this.state.message}
        />
        <input type="submit" value="検索" />
      </form>
    );
  }
}

export default connect((state) => state)(FindForm);
