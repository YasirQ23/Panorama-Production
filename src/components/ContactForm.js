import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function ContactForm() {
  return (
    <Container>
      <h1>This is how to contact us.</h1>
      <Form className="form">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="(123)-456-7890" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridPhoneNumber">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Row className="btnRow" >
          <Button type="submit" className="formBtn">
            Submit
          </Button>
        </Row>
      </Form>
    </Container>
  );
}
