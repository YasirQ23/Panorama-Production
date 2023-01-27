import Container from 'react-bootstrap/Container';
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import ContactForm from "./components/ContactForm";
import FamilyBanner from './components/FamilyBanner';
import ServiceBanner from './components/ServiceBanner';

export default function App() {
  return (
    <Container fluid className="App">
      <Header />
      <Greeting />
      <FamilyBanner />
      <ServiceBanner />
      <ContactForm />
    </Container>
  );
}
