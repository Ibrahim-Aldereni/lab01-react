import { Component } from "react";

class Header extends Component {
  state = {
    text: "Gallary of Horns",
  };

  Change = () => {
    this.setState({ text: "You clicked on the header" });
  };

  render() {
    return (
      <p className="HeadFoot" onClick={this.Change}>
        {this.state.text}
      </p>
    );
  }
}

export default Header;
