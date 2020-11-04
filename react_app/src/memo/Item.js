import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
  th = {
    fontSize: '14px',
    backgroundColor: 'blue',
  };
  td = {
    fontSize: '14px',
    backgroundColor: 'white',
  };
  date = {
    fontSize: '14px',
    backgroundColor: 'white',
  };

  render() {
    let d = this.props.value.created;
    let f = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
    return (
      <div>
        <tr>
          <th style={this.th}>NO, {this.props.index}</th>
          <td style={this.td}>{this.props.value.message}</td>
          <td style={this.td}>{this.date}</td>
        </tr>
      </div>
    );
  }
}

export default connect()(Item);
