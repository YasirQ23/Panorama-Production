import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import images from "./images";

export default function ServiceGrid() {
  return (
    <Container className="services-container" id="Services">
      <h2 className="service-heading">
        WE CREATE CONTENT PEOPLE WANT TO WATCH AND WATCH AND WATCH...
      </h2>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} md={4} key={1}>
          <Card className="item-card">
            <Card.Body>
              {" "}
              <img
                className="servicePics"
                src={images.ProductionService}
                alt="Production Service"
              ></img>
              <Card.Title className="services-title">
                Production Expertise
              </Card.Title>
              <Card.Text className="services-body">
                Guide projects from concept to completion
              </Card.Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid item xs={4} md={4} key={2}>
          <Card className="item-card">
            <Card.Body>
              {" "}
              <img
                className="servicePics"
                src={images.LiveEventService}
                alt="Live Event Service"
              ></img>
              <Card.Title className="services-title">Live Events</Card.Title>
              <Card.Text className="services-body">
                Set-up & organize live events, meetings, and sports
              </Card.Text>
            </Card.Body>
          </Card>
        </Grid>{" "}
        <Grid item xs={4} md={4} key={3}>
          <Card className="item-card">
            <Card.Body>
              {" "}
              <img
                className="servicePics"
                src={images.CORService}
                alt="Camera Operation & Rental"
              ></img>
              <Card.Title className="services-title">
                Camera Rental
              </Card.Title>
              <Card.Text className="services-body">
                Capture your production with the equipment you need
              </Card.Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
