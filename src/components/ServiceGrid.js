import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";

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
                src="https://images.crutchfieldonline.com/ImageHandler/trim/750/457/products/2021/34/109/g109L52ORG-F.jpg"
                alt=""
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
                src="https://www.outdoor-movies.com/wp-content/uploads/2017/03/home-tile-packages-1.png"
                alt=""
              ></img>
              <Card.Title className="services-title">Live Events</Card.Title>
              <Card.Text className="services-body">
                Set-up, organize and capture live meetings, events, and sports
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
                src="https://m.media-amazon.com/images/I/51ngL-9PcRL._AC_SX569_.jpg"
                alt=""
              ></img>
              <Card.Title className="services-title">
                Equipment Rental
              </Card.Title>
              <Card.Text className="services-body">
                The equipment you need to cover your production
              </Card.Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
