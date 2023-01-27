import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Header() {
  return (
    <Navbar bg="transparent" className="Header">
      <Container>
        <Navbar.Brand>
          <img
            src="https://cdn-icons-png.flaticon.com/512/105/105731.png"
            width="30vw"
            height="30vw"
            className="d-inline-block align-top"
          />
          Panorama Prodcutions
        </Navbar.Brand>
        <Navbar.Brand>
            <img
            src="https://cdn-icons-png.flaticon.com/512/5135/5135168.png"
            width="30vw"
            height="30vw"
            className="d-inline-block align-top"
            />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
