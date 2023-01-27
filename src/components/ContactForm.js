import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import PersonalForm from "./PersonalForm";
import TimeForm from "./TimeForm";

export default function ContactForm() {
  const [currentDisplay, setCurrentDisplay] = useState(PersonalForm);

  return (
    <Container >
      {currentDisplay}
      <Row className="btnRow">
        <Button
          className="formBtn"
          onClick={() => setCurrentDisplay(<TimeForm />)}
        >
          Submit
        </Button>
      </Row>
    </Container>
  );
}
