import Container from "react-bootstrap/Container";
import Cal from "@calcom/embed-react";

export default function CalendlyForm() {
  return (
    <Container>
      <h1 className="heading">Book a consultation.</h1>
      <Cal className="calBox" calLink="everything"></Cal>
    </Container>
  );
}
