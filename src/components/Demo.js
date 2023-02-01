import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function Demo() {
  return (
    <Container className="demo-container" id="Demo">
      <Col className="demo-col">
        <h1 className="demo-heading">Demo</h1>
        <iframe
          className="demo-player"
          src="https://www.youtube.com/embed/3-Euq2woAHE?controls=0&amp;start=3"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Col>
    </Container>
  );
}
