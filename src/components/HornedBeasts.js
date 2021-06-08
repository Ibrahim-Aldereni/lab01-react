import { Component } from "react";
import Card from "react-bootstrap/Card";
import ModalPopUp from "./ModalPopUp";

class HornedBeasts extends Component {
  state = {
    vote: 0,
    show: false,
  };

  IncrementVote = () => {
    this.setState({ vote: this.state.vote + 1 });
    this.handleShow();
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <Card style={{ width: "18rem" }} bg="dark" text="light">
          <Card.Img
            variant="top"
            src={this.props.image_url}
            onClick={this.IncrementVote}
            className="cardImg"
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>❤️ = {this.state.vote} </Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
        </Card>

        <ModalPopUp
          show={this.state.show}
          closeFuc={this.handleClose}
          title={this.props.title}
          description={this.props.description}
          image_url={this.props.image_url}
        />
      </>
    );
  }
}

export default HornedBeasts;
