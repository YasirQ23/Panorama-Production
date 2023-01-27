import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function ServiceBanner() {
  return (
    <Container>
      <h1 className="heading">This is what we offer.</h1>
      <div className="CardContainer">
        <Card>
          <Card.Body>
            <img
              className="servicePics"
              src="https://images.crutchfieldonline.com/ImageHandler/trim/750/457/products/2021/34/109/g109L52ORG-F.jpg"
              alt=""
            ></img>
            <Card.Title>Audio Equipment Rental</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <img
              className="servicePics"
              src="https://m.media-amazon.com/images/I/51ngL-9PcRL._AC_SX569_.jpg"
              alt=""
            ></img>
            <Card.Title>Video Equipment Rental</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <img
              className="servicePics"
              src="https://www.outdoor-movies.com/wp-content/uploads/2017/03/home-tile-packages-1.png"
              alt=""
            ></img>
            <Card.Title>Event Setup</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
