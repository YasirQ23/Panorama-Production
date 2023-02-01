import Container from "react-bootstrap/Container";
import Grid from "@mui/material/Grid";

export default function VideoGrid() {
  return (
    <Container id="Work">
      <h1 className="video-grid-heading">Award Winning Work</h1>
      <Grid
        container
        className="video-grid-container"
        spacing={{ xs: 0, md: 0 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
        rowSpacing={0}
        columnSpacing={0}
      >
        {Array.from(Array(9)).map((_, index) => (
          <Grid
            item
            className="video-grid-item"
            xs={2}
            sm={4}
            md={4}
            key={index}
          >
            <iframe
              className="video-grid-player"
              src="https://www.youtube.com/embed/3-Euq2woAHE?controls=0&amp;start=3"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              title="grid-video-1"
            ></iframe>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
