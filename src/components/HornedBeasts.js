import { Component } from "react";
import Card from "react-bootstrap/Card";

class HornedBeasts extends Component {
  state = {
    vote: 0,
  };

  IncrementVote = () => {
    this.setState({ vote: this.state.vote + 1 });
  };

  render() {
    return (
      <Card style={{ width: "18rem" }} bg="dark" text="light">
        <Card.Img
          variant="top"
          src={this.props.image_url}
          onClick={this.IncrementVote}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>❤️ = {this.state.vote} </Card.Text>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeasts;
