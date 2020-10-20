import React, { Component } from "react";

class PlayerTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primary1: 0,
      primary2: 0,
      primary3: 0,
      primary4: 0,
      primary5: 0,

      secondaryA1: 0,
      secondaryA2: 0,
      secondaryA3: 0,
      secondaryA4: 0,
      secondaryA5: 0,

      secondaryB1: 0,
      secondaryB2: 0,
      secondaryB3: 0,
      secondaryB4: 0,
      secondaryB5: 0,

      secondaryC1: 0,
      secondaryC2: 0,
      secondaryC3: 0,
      secondaryC4: 0,
      secondaryC5: 0,

      total1: 0,
      total2: 0,
      total3: 0,
      total4: 0,
      total5: 0,
    };
    this.addPrimaryVPs1 = this.addPrimaryVPs1.bind(this);
    this.removePrimaryVPs1 = this.removePrimaryVPs1.bind(this);

    this.addPrimaryVPs2 = this.addPrimaryVPs2.bind(this);
    this.removePrimaryVPs2 = this.removePrimaryVPs2.bind(this);

    this.addPrimaryVPs3 = this.addPrimaryVPs3.bind(this);
    this.removePrimaryVPs3 = this.removePrimaryVPs3.bind(this);

    this.addPrimaryVPs4 = this.addPrimaryVPs4.bind(this);
    this.removePrimaryVPs4 = this.removePrimaryVPs4.bind(this);

    this.addPrimaryVPs5 = this.addPrimaryVPs5.bind(this);
    this.removePrimaryVPs5 = this.removePrimaryVPs5.bind(this);

    this.addSecondaryVPsA1 = this.addSecondaryVPsA1.bind(this);
    this.removeSecondaryVPsA1 = this.removeSecondaryVPsA1.bind(this);

    this.addSecondaryVPsA2 = this.addSecondaryVPsA2.bind(this);
    this.removeSecondaryVPsA2 = this.removeSecondaryVPsA2.bind(this);

    this.addSecondaryVPsA3 = this.addSecondaryVPsA3.bind(this);
    this.removeSecondaryVPsA3 = this.removeSecondaryVPsA3.bind(this);

    this.addSecondaryVPsA4 = this.addSecondaryVPsA4.bind(this);
    this.removeSecondaryVPsA4 = this.removeSecondaryVPsA4.bind(this);

    this.addSecondaryVPsA5 = this.addSecondaryVPsA5.bind(this);
    this.removeSecondaryVPsA5 = this.removeSecondaryVPsA5.bind(this);

    this.addSecondaryVPsB1 = this.addSecondaryVPsB1.bind(this);
    this.removeSecondaryVPsB1 = this.removeSecondaryVPsB1.bind(this);

    this.addSecondaryVPsB2 = this.addSecondaryVPsB2.bind(this);
    this.removeSecondaryVPsB2 = this.removeSecondaryVPsB2.bind(this);

    this.addSecondaryVPsB3 = this.addSecondaryVPsB3.bind(this);
    this.removeSecondaryVPsB3 = this.removeSecondaryVPsB3.bind(this);

    this.addSecondaryVPsB4 = this.addSecondaryVPsB4.bind(this);
    this.removeSecondaryVPsB4 = this.removeSecondaryVPsB4.bind(this);

    this.addSecondaryVPsB5 = this.addSecondaryVPsB5.bind(this);
    this.removeSecondaryVPsB5 = this.removeSecondaryVPsB5.bind(this);

    this.addSecondaryVPsC1 = this.addSecondaryVPsC1.bind(this);
    this.removeSecondaryVPsC1 = this.removeSecondaryVPsC1.bind(this);

    this.addSecondaryVPsC2 = this.addSecondaryVPsC2.bind(this);
    this.removeSecondaryVPsC2 = this.removeSecondaryVPsC2.bind(this);

    this.addSecondaryVPsC3 = this.addSecondaryVPsC3.bind(this);
    this.removeSecondaryVPsC3 = this.removeSecondaryVPsC3.bind(this);

    this.addSecondaryVPsC4 = this.addSecondaryVPsC4.bind(this);
    this.removeSecondaryVPsC4 = this.removeSecondaryVPsC4.bind(this);

    this.addSecondaryVPsC5 = this.addSecondaryVPsC5.bind(this);
    this.removeSecondaryVPsC5 = this.removeSecondaryVPsC5.bind(this);
  }

  //Primary VP functions
  addPrimaryVPs1() {
    this.setState((prevState) => {
      return { primary1: prevState.primary1 + 5, total1: prevState.total1 + 5 };
    });
  }

  removePrimaryVPs1() {
    this.setState((prevState) => {
      return { primary1: prevState.primary1 - 5, total1: prevState.total1 - 5 };
    });
  }

  addPrimaryVPs2() {
    this.setState((prevState) => {
      return { primary2: prevState.primary2 + 5, total2: prevState.total2 + 5 };
    });
  }

  removePrimaryVPs2() {
    this.setState((prevState) => {
      return { primary2: prevState.primary2 - 5, total2: prevState.total2 - 5 };
    });
  }

  addPrimaryVPs3() {
    this.setState((prevState) => {
      return { primary3: prevState.primary3 + 5, total3: prevState.total3 + 5 };
    });
  }

  removePrimaryVPs3() {
    this.setState((prevState) => {
      return { primary3: prevState.primary3 - 5, total3: prevState.total3 - 5 };
    });
  }

  addPrimaryVPs4() {
    this.setState((prevState) => {
      return { primary4: prevState.primary4 + 5, total4: prevState.total4 + 5 };
    });
  }

  removePrimaryVPs4() {
    this.setState((prevState) => {
      return { primary4: prevState.primary4 - 5, total4: prevState.total4 - 5 };
    });
  }

  addPrimaryVPs5() {
    this.setState((prevState) => {
      return { primary5: prevState.primary5 + 5, total5: prevState.total5 + 5 };
    });
  }

  removePrimaryVPs5() {
    this.setState((prevState) => {
      return { primary5: prevState.primary5 - 5, total5: prevState.total5 - 5 };
    });
  }

  //Secondary A functions
  addSecondaryVPsA1() {
    this.setState((prevState) => {
      return {
        secondaryA1: prevState.secondaryA1 + 1,
        total1: prevState.total1 + 1,
      };
    });
  }

  removeSecondaryVPsA1() {
    this.setState((prevState) => {
      return {
        secondaryA1: prevState.secondaryA1 - 1,
        total1: prevState.total1 - 1,
      };
    });
  }

  addSecondaryVPsA2() {
    this.setState((prevState) => {
      return {
        secondaryA2: prevState.secondaryA2 + 1,
        total2: prevState.total2 + 1,
      };
    });
  }

  removeSecondaryVPsA2() {
    this.setState((prevState) => {
      return {
        secondaryA2: prevState.secondaryA2 - 1,
        total2: prevState.total2 - 1,
      };
    });
  }

  addSecondaryVPsA3() {
    this.setState((prevState) => {
      return {
        secondaryA3: prevState.secondaryA3 + 1,
        total3: prevState.total3 + 1,
      };
    });
  }

  removeSecondaryVPsA3() {
    this.setState((prevState) => {
      return {
        secondaryA3: prevState.secondaryA3 - 1,
        total3: prevState.total3 - 1,
      };
    });
  }

  addSecondaryVPsA4() {
    this.setState((prevState) => {
      return {
        secondaryA4: prevState.secondaryA4 + 1,
        total4: prevState.total4 + 1,
      };
    });
  }

  removeSecondaryVPsA4() {
    this.setState((prevState) => {
      return {
        secondaryA4: prevState.secondaryA4 - 1,
        total4: prevState.total4 - 1,
      };
    });
  }

  addSecondaryVPsA5() {
    this.setState((prevState) => {
      return {
        secondaryA5: prevState.secondaryA5 + 1,
        total5: prevState.total5 + 1,
      };
    });
  }

  removeSecondaryVPsA5() {
    this.setState((prevState) => {
      return {
        secondaryA5: prevState.secondaryA5 - 1,
        total5: prevState.total5 - 1,
      };
    });
  }

  //Secondary B functions
  addSecondaryVPsB1() {
    this.setState((prevState) => {
      return {
        secondaryB1: prevState.secondaryB1 + 1,
        total1: prevState.total1 + 1,
      };
    });
  }

  removeSecondaryVPsB1() {
    this.setState((prevState) => {
      return {
        secondaryB1: prevState.secondaryB1 - 1,
        total1: prevState.total1 - 1,
      };
    });
  }

  addSecondaryVPsB2() {
    this.setState((prevState) => {
      return {
        secondaryB2: prevState.secondaryB2 + 1,
        total2: prevState.total2 + 1,
      };
    });
  }

  removeSecondaryVPsB2() {
    this.setState((prevState) => {
      return {
        secondaryB2: prevState.secondaryB2 - 1,
        total2: prevState.total2 - 1,
      };
    });
  }

  addSecondaryVPsB3() {
    this.setState((prevState) => {
      return {
        secondaryB3: prevState.secondaryB3 + 1,
        total3: prevState.total3 + 1,
      };
    });
  }

  removeSecondaryVPsB3() {
    this.setState((prevState) => {
      return {
        secondaryB3: prevState.secondaryB3 - 1,
        total3: prevState.total3 - 1,
      };
    });
  }

  addSecondaryVPsB4() {
    this.setState((prevState) => {
      return {
        secondaryB4: prevState.secondaryB4 + 1,
        total4: prevState.total4 + 1,
      };
    });
  }

  removeSecondaryVPsB4() {
    this.setState((prevState) => {
      return {
        secondaryB4: prevState.secondaryB4 - 1,
        total4: prevState.total4 - 1,
      };
    });
  }

  addSecondaryVPsB5() {
    this.setState((prevState) => {
      return {
        secondaryB5: prevState.secondaryB5 + 1,
        total5: prevState.total5 + 1,
      };
    });
  }

  removeSecondaryVPsB5() {
    this.setState((prevState) => {
      return {
        secondaryB5: prevState.secondaryB5 - 1,
        total5: prevState.total5 - 1,
      };
    });
  }

  //Secondary C functions
  addSecondaryVPsC1() {
    this.setState((prevState) => {
      return {
        secondaryC1: prevState.secondaryC1 + 1,
        total1: prevState.total1 + 1,
      };
    });
  }

  removeSecondaryVPsC1() {
    this.setState((prevState) => {
      return {
        secondaryC1: prevState.secondaryC1 - 1,
        total1: prevState.total1 - 1,
      };
    });
  }

  addSecondaryVPsC2() {
    this.setState((prevState) => {
      return {
        secondaryC2: prevState.secondaryC2 + 1,
        total2: prevState.total2 + 1,
      };
    });
  }

  removeSecondaryVPsC2() {
    this.setState((prevState) => {
      return {
        secondaryC2: prevState.secondaryC2 - 1,
        total2: prevState.total2 - 1,
      };
    });
  }

  addSecondaryVPsC3() {
    this.setState((prevState) => {
      return {
        secondaryC3: prevState.secondaryC3 + 1,
        total3: prevState.total3 + 1,
      };
    });
  }

  removeSecondaryVPsC3() {
    this.setState((prevState) => {
      return {
        secondaryC3: prevState.secondaryC3 - 1,
        total3: prevState.total3 - 1,
      };
    });
  }

  addSecondaryVPsC4() {
    this.setState((prevState) => {
      return {
        secondaryC4: prevState.secondaryC4 + 1,
        total4: prevState.total4 + 1,
      };
    });
  }

  removeSecondaryVPsC4() {
    this.setState((prevState) => {
      return {
        secondaryC4: prevState.secondaryC4 - 1,
        total4: prevState.total4 - 1,
      };
    });
  }

  addSecondaryVPsC5() {
    this.setState((prevState) => {
      return {
        secondaryC5: prevState.secondaryC5 + 1,
        total5: prevState.total5 + 1,
      };
    });
  }

  removeSecondaryVPsC5() {
    this.setState((prevState) => {
      return {
        secondaryC5: prevState.secondaryC5 - 1,
        total5: prevState.total5 - 1,
      };
    });
  }

  render() {
    return (
      <div className="playerOneBox">
        <div className="titleBox">
          Player Two
        </div>
        <div className="titleBox">Turn 1</div>
        <div className="titleBox">Turn 2</div>
        <div className="titleBox">Turn 3</div>
        <div className="titleBox">Turn 4</div>
        <div className="titleBox">Turn 5</div>

        <div className="titleBox">Primary</div>
        <div className="primaryOneBox">
          {this.state.primary1}{" "}
          
        </div>
        <div className="pointBox">
          {this.state.primary2}<br></br> <button className="button" onClick={this.addPrimaryVPs2}>+</button>
          <button className="button" onClick={this.removePrimaryVPs2}>-</button>
        </div>
        <div className="pointBox">
          {this.state.primary3}<br></br> <button  className="button" onClick={this.addPrimaryVPs3}>+</button>
          <button className="button" onClick={this.removePrimaryVPs3}>-</button>
        </div>
        <div className="pointBox">
          {this.state.primary4} <br></br><button  className="button" onClick={this.addPrimaryVPs4}>+</button>
          <button className="button" onClick={this.removePrimaryVPs4}>-</button>
        </div>
        <div className="pointBox">
          {this.state.primary5}<br></br> <button className="button" onClick={this.addPrimaryVPs5}>+</button>
          <button className="button" onClick={this.removePrimaryVPs5}>-</button>
        </div>

        <div className="dropdownBox">
          <select className="dropdown">
            <option selected disabled>
              Choose Your Secondary
            </option>
            <option disabled>--Battlefield Supremacy--</option>
            <option>Engage On All Fronts</option>
            <option>Linebreaker</option>
            <option>Domination</option>
            <option disabled>--No Mercy, No Respite--</option>
            <option>Thin Their Ranks</option>
            <option>Grind Them Down</option>
            <option>While We Stand, We Fight</option>
            <option disabled>--Purge The Enemy--</option>
            <option>Titan Hunter</option>
            <option>Bring It Down</option>
            <option>Cut Off The Head</option>
            <option>Assassinate</option>
            <option disabled>--Shadow Operations--</option>
            <option>Raise The Banners High</option>
            <option>Investigate Sites</option>
            <option>Deply Scramblers</option>
            <option>Teleport Homer</option>
            <option disabled>--Warpcraft--</option>
            <option>Abhor The Witch</option>
            <option>Mental Interrogation</option>
            <option>Psychic Ritual</option>
            <option>Pierce The Veil</option>
          </select>
        </div>
        <div className="pointBox">
          {this.state.secondaryA1}{" "}<br></br>
          <button className="button" onClick={this.addSecondaryVPsA1}>+</button>
          <button className="button" onClick={this.removeSecondaryVPsA1}>-</button>
        </div>
        <div className="pointBox">
          {this.state.secondaryA2}{" "}<br></br>
          <button className="button" onClick={this.addSecondaryVPsA2}>+</button>
          <button className="button" onClick={this.removeSecondaryVPsA2}>-</button>
        </div>
        <div className="pointBox">
          {this.state.secondaryA3}{" "}<br></br>
          <button className="button" onClick={this.addSecondaryVPsA3}>+</button>
          <button className="button" onClick={this.removeSecondaryVPsA3}>-</button>
        </div>
        <div className="pointBox">
          {this.state.secondaryA4}{" "}<br></br>
          <button className="button" onClick={this.addSecondaryVPsA4}>+</button>
          <button className="button" onClick={this.removeSecondaryVPsA4}>-</button>
        </div>
        <div className="pointBox">
          {this.state.secondaryA5}{" "}<br></br>
          <button className="button" onClick={this.addSecondaryVPsA5}>+</button>
          <button className="button" onClick={this.removeSecondaryVPsA5}>-</button>
        </div>

        <div className="dropdownBox">
          <select className="dropdown">
            <option selected disabled>
              Choose Your Secondary
            </option>
            <option disabled>--Battlefield Supremacy--</option>
            <option>Engage On All Fronts</option>
            <option>Linebreaker</option>
            <option>Domination</option>
            <option disabled>--No Mercy, No Respite--</option>
            <option>Thin Their Ranks</option>
            <option>Grind Them Down</option>
            <option>While We Stand, We Fight</option>
            <option disabled>--Purge The Enemy--</option>
            <option>Titan Hunter</option>
            <option>Bring It Down</option>
            <option>Cut Off The Head</option>
            <option>Assassinate</option>
            <option disabled>--Shadow Operations--</option>
            <option>Raise The Banners High</option>
            <option>Investigate Sites</option>
            <option>Deply Scramblers</option>
            <option>Teleport Homer</option>
            <option disabled>--Warpcraft--</option>
            <option>Abhor The Witch</option>
            <option>Mental Interrogation</option>
            <option>Psychic Ritual</option>
            <option>Pierce The Veil</option>
          </select>
        </div>
        <div className="pointBox">
          {this.state.secondaryB1}{" "}<br></br>
          <button className="button" onClick={this.addSecondaryVPsB1}>+</button>
          <button className="button" onClick={this.removeSecondaryVPsB1}>-</button>
        </div>
        <div className="pointBox">
          {this.state.secondaryB2}{" "}<br></br>
          <button className="button" onClick={this.addSecondaryVPsB2}>+</button>
          <button className="button" onClick={this.removeSecondaryVPsB2}>-</button>
        </div>
        <div className="pointBox">
          {this.state.secondaryB3}{" "}<br></br>
          <button className="button" onClick={this.addSecondaryVPsB3}>+</button>
          <button className="button" onClick={this.removeSecondaryVPsB3}>-</button>
        </div>
        <div className="pointBox">
          {this.state.secondaryB4}{" "}<br></br>
          <button className="button" onClick={this.addSecondaryVPsB4}>+</button>
          <button className="button" onClick={this.removeSecondaryVPsB4}>-</button>
        </div>
        <div className="pointBox">
          {this.state.secondaryB5}{" "}<br></br>
          <button className="button" onClick={this.addSecondaryVPsB5}>+</button>
          <button className="button" onClick={this.removeSecondaryVPsB5}>-</button>
        </div>

        <div className="dropdownBox">
          <select className="dropdown">
            <option selected disabled>
              Choose Your Secondary
            </option>
            <option disabled>--Battlefield Supremacy--</option>
            <option>Engage On All Fronts</option>
            <option>Linebreaker</option>
            <option>Domination</option>
            <option disabled>--No Mercy, No Respite--</option>
            <option>Thin Their Ranks</option>
            <option>Grind Them Down</option>
            <option>While We Stand, We Fight</option>
            <option disabled>--Purge The Enemy--</option>
            <option>Titan Hunter</option>
            <option>Bring It Down</option>
            <option>Cut Off The Head</option>
            <option>Assassinate</option>
            <option disabled>--Shadow Operations--</option>
            <option>Raise The Banners High</option>
            <option>Investigate Sites</option>
            <option>Deply Scramblers</option>
            <option>Teleport Homer</option>
            <option disabled>--Warpcraft--</option>
            <option>Abhor The Witch</option>
            <option>Mental Interrogation</option>
            <option>Psychic Ritual</option>
            <option>Pierce The Veil</option>
          </select>
        </div>
        <div className="pointBox">
          {this.state.secondaryC1}{" "}<br></br>
          <button className="button" onClick={this.addSecondaryVPsC1}>+</button>
          <button className="button" onClick={this.removeSecondaryVPsC1}>-</button>
        </div>
        <div className="pointBox">
          {this.state.secondaryC2}{" "}<br></br>
          <button className="button" onClick={this.addSecondaryVPsC2}>+</button>
          <button className="button" onClick={this.removeSecondaryVPsC2}>-</button>
        </div>
        <div className="pointBox">
          {this.state.secondaryC3}{" "}<br></br>
          <button className="button" onClick={this.addSecondaryVPsC3}>+</button>
          <button className="button" onClick={this.removeSecondaryVPsC3}>-</button>
        </div>
        <div className="pointBox">
          {this.state.secondaryC4}{" "}<br></br>
          <button className="button" onClick={this.addSecondaryVPsC4}>+</button>
          <button className="button" onClick={this.removeSecondaryVPsC4}>-</button>
        </div>
        <div className="pointBox">
          {this.state.secondaryC5}{" "}<br></br>
          <button className="button" onClick={this.addSecondaryVPsC5}>+</button>
          <button className="button" onClick={this.removeSecondaryVPsC5}>-</button>
        </div>

        <div className="totalBox">Total</div>
        <div className="totalBox">{this.state.total1}</div>
        <div className="totalBox">{this.state.total2}</div>
        <div className="totalBox">{this.state.total3}</div>
        <div className="totalBox">{this.state.total4}</div>
        <div className="totalBox">{this.state.total5}</div>
      </div>
    );
  }
}
export default PlayerTwo;
