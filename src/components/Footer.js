import { Component } from "react";

class Footer extends Component {
  state = {
    text: "\u00A9 Rights reserved - Ibrahim Aldereni",
  };

  Change = () => {
    this.setState({ text: "You clicked on the footer" });
  };

  render() {
    return (
      <p className="HeadFoot" onClick={this.Change}>
        {this.state.text}
      </p>
    );
  }
}

export default Footer;
