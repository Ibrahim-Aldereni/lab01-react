import { Component } from "react";
import HornedBeasts from "./HornedBeasts";
import data from "./data.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class Main extends Component {
  render() {
    return (
      <Container>
        <Row xs={1} md={3} className="g-4">
          {data.map((item) => {
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
    );
  }
}

export default Main;
