import { Component } from "react";
import Card from "react-bootstrap/Card";

class Header extends Component {
  state = {
    text: "Gallary of Horns",
  };

  Change = () => {
    this.setState({ text: "You clicked on the header" });
  };

  render() {
    return (
      <Card
        bg="dark"
        text="light"
        style={{ height: "5rem", textAlign: "center", fontSize: "30px" }}
        onClick={this.Change}
      >
        {this.state.text}
      </Card>
    );
  }
}

export default Header;
