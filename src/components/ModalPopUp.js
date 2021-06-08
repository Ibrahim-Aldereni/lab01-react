import { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class ModalPopUp extends Component {
  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.closeFuc}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Card style={{ width: "100%" }} bg="dark" text="light">
              <Card.Img
                variant="top"
                src={this.props.image_url}
                className="cardImg"
              />
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>{this.props.description}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeFuc}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalPopUp;
