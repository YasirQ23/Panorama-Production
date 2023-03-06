import Container from "react-bootstrap/Container";

export default function Demo() {
  return (
    <Container className="demo-container" id="Demo">
        <iframe
          className="demo-player"
          src="https://www.youtube.com/embed/3-Euq2woAHE?controls=0&amp;start=3"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
    </Container>
  );
}
