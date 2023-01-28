import { Row, Container } from "react-bootstrap";

export default function PartnersBanner() {
  return (
    <Container>
      <h1 className="heading" >Don't just take our word for it.</h1>
      <h2 className="subHeading" >We've worked with some of the biggest names out there.</h2>
      <Row className="partnersRow" >
        <img
          className="partnerPic"
          src="https://www.zyte.com/wp-content/uploads/2021/01/zyte-pg_logo@2x.png"
          alt=""
        ></img>
        <img
          className="partnerPic"
          src="https://www.zyte.com/wp-content/uploads/2021/01/zyte-warner-music-customer@2x.png"
          alt=""
        ></img>
        <img
          className="partnerPic"
          src="https://www.zyte.com/wp-content/uploads/2021/01/zyte-customer-mercado-libre@2x.png"
          alt=""
        ></img>
      </Row>
    </Container>
  );
}
