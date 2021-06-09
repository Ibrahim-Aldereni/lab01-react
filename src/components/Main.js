import { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import data from "./data.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

class Main extends Component {
  state = {
    value: "all",
  };

  selectValue = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <Form className="mb-3 mx-5">
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>How many Horns?</Form.Label>
            <Form.Control as="select" onChange={this.selectValue}>
              <option value="all">All</option>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
              <option value="wow">Wow</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <Container>
          <Row xs={1} md={3} className="g-4">
            {data
              .filter((item) => {
                if (this.state.value === "all") {
                  return true;
                } else if (this.state.value === "one") {
                  return item.horns === 1;
                } else if (this.state.value === "two") {
                  return item.horns === 2;
                } else if (this.state.value === "three") {
                  return item.horns === 3;
                } else {
                  return item.horns === 100;
                }
              })
              .map((item) => {
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
