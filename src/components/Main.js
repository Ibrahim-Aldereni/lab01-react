import { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import data from "./data.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

class Main extends Component {
  state = {
    arr: data,
  };

  // data2 = [];

  selectValue = (e) => {
    e.preventDefault();

    let selectedValue = parseInt(e.target.value);
    let newData = data;

    if (selectedValue) {
      newData = data.filter((item) => item.horns === selectedValue);
    }

    this.setState({ arr: newData });
  };

  render() {
    return (
      <>
        <Form className="mb-3 mx-5">
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>
              How many Horns? (Cards num {this.state.arr.length})
            </Form.Label>
            <Form.Control as="select" onChange={this.selectValue}>
              <option value="0">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">Wow</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <Container>
          <Row xs={1} md={3} className="g-4">
            {this.state.arr.map((item) => {
              return (
                <Col>
                  <HornedBeasts
                    title={item.title}
                    description={item.description}
                    image_url={item.image_url}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
