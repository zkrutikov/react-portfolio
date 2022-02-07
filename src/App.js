import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/LandingPage';
import Main from './components/Main';
import { Link } from 'react-router-dom';



function App() {
  return (
    <div>
  <Navbar bg="dark" variant="dark">
    <Container fluid ='md'>
    <Navbar.Brand href="#home">Zak K.</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/aboutme">About Me</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#resume">Resume</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Container>
    <LandingPage />
  </Container>
    </div>
  );
}

export default App;
