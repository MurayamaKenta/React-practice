import React, { Component } from 'react';
import { connect } from 'react-redux';
// import '../App.css';
import Memo from './memo02/Memo';
import AddForm from './memo02/AddForm';
import FindForm from './memo02/FindForm';
import DelForm from './memo02/DelForm';
// import App from './components/App';

class App02 extends Component {
  td = {
    width: '250px',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>memo02</h1>
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

export default connect()(App02);
