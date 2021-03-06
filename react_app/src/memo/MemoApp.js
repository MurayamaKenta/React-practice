import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Memo from './memo';
import AddForm from './AddForm';
import FindForm from './FindForm';
import DelForm from './DelForm';

class MemoApp extends Component {
  td = {
    width: '250px',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Memo App</h1>
        <AddForm />
        <hr />
        <table>
          <tbody>
            <tr>
              <td style={this.td}>
                <FindForm />
              </td>
              <td style={this.td}>
                <DelForm />
              </td>
            </tr>
          </tbody>
        </table>
        <Memo />
      </div>
    );
  }
}
export default connect()(MemoApp);
