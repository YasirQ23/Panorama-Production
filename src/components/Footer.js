import { Container, Row, Col } from "react-bootstrap";
import VrpanoOutlinedIcon from "@mui/icons-material/VrpanoOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <div className="footer-container">
      <Container>
        <Row>
          <Col className="map-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1830178.8443005146!2d-81.20295199240172!3d26.372829399999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d923c2ef36fb27%3A0xd23ea6eeca6095c9!2sBoca%20Raton%2C%20FL!5e0!3m2!1sen!2sus!4v1675282456034!5m2!1sen!2sus"
              className="mini-map"
              title="g-map"
            ></iframe>
          </Col>
          <Col className="footer-icon-col">
            <TwitterIcon className="footer-social-icon" />
            <FacebookIcon className="footer-social-icon" />
            <InstagramIcon className="footer-social-icon" />
            <YouTubeIcon className="footer-social-icon" />
          </Col>
          <Col className="footer-icon-col">
            <VrpanoOutlinedIcon className="footer-icon" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
