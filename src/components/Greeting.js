import Container from "react-bootstrap/Container";

export default function Greeting() {
  return (
    <Container id ="greeting" className="greeting">
      <div>
        <h1 className="greeting-heading">
          <strong>Panorama Productions</strong>
        </h1>
        <h2 className="greeting-subHeading">
          Encompassing the full scope of production
        </h2>
      </div>
    </Container>
  );
}
