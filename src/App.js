import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import FamilyBanner from "./components/FamilyBanner";
import ServiceBanner from "./components/ServiceBanner";
import ContactForm from "./components/ContactForm";
import VideoBanner from "./components/VideoBanner";
import PartnersBanner from "./components/PartnersBanner";

export default function App() {
  return (
    <Container fluid className="App">
      <Header />
      <Greeting />
      <ServiceBanner />
      <VideoBanner />
      <PartnersBanner />
      <FamilyBanner />
      <ContactForm />
    </Container>
  );
}
