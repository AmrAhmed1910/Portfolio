import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/Logo.png';

const NavBar = () => {
    return (
         <>
        <Navbar bg="transparent" data-bs-theme="dark" className="h-20 backdrop-blur-lg">
          <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="50"
              height="50"
              className="d-inline-block align-center"
            />
          </Navbar.Brand>
            <Nav className="flex items-left gap-6 font-bold text-xl  ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </> 
      );
}


export default NavBar;