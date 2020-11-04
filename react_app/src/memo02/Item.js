import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
  th = {
    size: '14px',
    color: 'blue',
  };

  date = {
    color: 'red',
  };
  render() {
    console.log('tesst');
    console.log(this.props);
    let d = this.props.value.created;
    let f = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
    return (
      <tr>
        <th style={this.th}> NO .{this.props.index}</th>
        <td>{this.props.value.message}</td>
        <td>{f}</td>
      </tr>
    );
  }
}

export default connect()(Item);
