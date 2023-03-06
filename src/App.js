import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import ImageBackground from "./components/ImageBackground";
import Greeting from "./components/Greeting";
import SolidBackground1 from "./components/SolidBackground1";
import AboutUs from "./components/AboutUs";
import ServiceGrid from "./components/ServiceGrid";
import VideoGrid from "./components/VideoGrid";
import Partners from "./components/Partners";
import CalendlyForm from "./components/CalendlyForm";
import Footer from "./components/Footer";
import Demo from "./components/Demo";

export default function App() {
  return (
    <Container fluid className="App">
      <Header />
      <ImageBackground image="SunsetBackground.jpg">
        <Greeting />
      </ImageBackground>
      <SolidBackground1>
        <Demo />
      </SolidBackground1>
      <ImageBackground image="Field2Background.jpg">
        <AboutUs />
      </ImageBackground>
      <SolidBackground1>
        {" "}
        <ServiceGrid />
      </SolidBackground1>
      <ImageBackground image="BuisnessBackground.jpg">
        <VideoGrid />
      </ImageBackground>
      <Partners />
      <Footer />
      <CalendlyForm />
    </Container>
  );
}
