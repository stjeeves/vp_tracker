import React, { Component } from "react";

class PlayerOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 12,
    };
    this.addPrimaryVPs = this.addPrimaryVPs.bind(this);
  }

  addPrimaryVPs() {
    this.setState((prevState) => {
      return { total: prevState.total + 5 };
    });
  }

  render() {
    return (
      <div>
        <h2>Player One</h2>
        <table>
          <tbody>
            <tr>
              <td></td>
              <td>Turn 1</td>
              <td>Turn 2</td>
              <td>Turn 3</td>
              <td>Turn 4</td>
              <td>Turn 5</td>
            </tr>
            <tr>
              <td>Primary</td>
              <td>
                {this.state.total}{" "}
                <button onClick={this.addPrimaryVPs}>Click</button>
              </td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
            </tr>
            <tr>
              <td>Secondary 1</td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
            </tr>
            <tr>
              <td>Secondary 2</td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
            </tr>
            <tr>
              <td>Secondary 3</td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
            </tr>
            <tr>
              <td>Total</td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
              <td>
                <input></input>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PlayerOne;
