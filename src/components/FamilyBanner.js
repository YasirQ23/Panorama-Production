import Container from "react-bootstrap/Container";

export default function FamilyBanner() {
  return (
    <Container>
      <h1 className="heading">This is us.</h1>
      <div className="familyPicDiv" >

      <img
        className="familyPic"
        src="https://media.istockphoto.com/id/1207928336/photo/big-family.jpg?s=612x612&w=0&k=20&c=1akdFcSQAtRQbL-jPTIn5Dwxu7DAVX0FnzpXd2IVuYY="
        alt="family"
        ></img>
        </div>
    </Container>
  );
}
