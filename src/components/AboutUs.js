import { Box } from "@mui/material";
import Container from "react-bootstrap/Container";

export default function AboutUs() {
  return (
    <Container className="about-us-container" id="About Us">
      <Box className="about-us-box">
      <h1 className="about-us-heading">Our Mission</h1>
      <h3 className="about-us-body">
        Each product has a voice. Our job is to help it to be heard. We take
        your idea and figure out how to bring it to life. We want to create a
        brand voice. Give purpose and meaning to a brand to give it focus and
        direction.
      </h3>
      <h3 className="about-us-body">
        To bring a production together takes a unique blend of organiztion and
        creavitity. Our task is to get the job done on time and on budget with
        the right dynamics of professionals that know their craft.
      </h3>
      <h3 className="about-us-body">
        Creating an attmosphere that allows the schedule to run like clock work
        and simutaniously have fun doing it.
      </h3>
      <h3 className="about-us-body">
        Creating the latitude to cover the shots needed with high production
        quality while allowing for the magic to happen.
      </h3>
      <h3 className="about-us-body">
        Creating pieces that will stand out from the rest, that will be talked
        about and be remembered.
      </h3>
      </Box>
    </Container>
  );
}
