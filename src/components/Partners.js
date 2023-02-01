import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Partners() {
  return (
    <Container className="partners-container" id="Partners">
      <Col>
        <Row className="partners-text" >
          <h1 className="partners-heading">Don't just take our word for it.</h1>
          <h4 className="partners-body">
            We've worked with some of the biggest names out there.
          </h4>
        </Row>
        <Row className="partners-img-container">
          <img
            src="http://www.randallproductions.com/wp-content/uploads/2021/08/RP-CLIENT-LOGOS-3-1024x694.jpg"
            alt=""
            className="partners-img"
          ></img>
        </Row>
      </Col>
    </Container>
  );
}
