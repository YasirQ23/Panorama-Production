import Container from "react-bootstrap/Container";

export default function VideoBanner() {
  return (
    <Container>
      <h1 className="heading">This is some of the work we've done.</h1>
      <h2 className="subHeading">With us you're in safe hands.</h2>
      <div className="Video">
        <iframe
          className="experianceVideo"
          src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </Container>
  );
}
