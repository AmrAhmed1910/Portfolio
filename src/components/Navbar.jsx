/* eslint-disable jsx-a11y/alt-text */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/Logo.png';

const NavBar = () => {
    return (
         <>
        <Navbar bg="transparent" data-bs-theme="dark" className=" mb-10 flex items-center justify-between backdrop-blur-lg ">
          <Container>
          <Navbar.Brand className="lg:ml-5 flex flex-shrink-0 d-inline-block align-center" href="#home">
            <img
              src={Logo}
              width="45"
              height="45"
            />
          </Navbar.Brand>
          
            <Nav className="flex items-left gap-6 font-bold text-xl  ">
              <Nav.Link href="#about" >About Me</Nav.Link>
              <Nav.Link href="#skills" >Skills</Nav.Link>
              <Nav.Link href="#projects" >Projects</Nav.Link>
              <Nav.Link href="#dreams" >Dreams</Nav.Link>
              <Nav.Link href="#contact" >Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </> 
      );
}


export default NavBar;