
/* eslint-disable jsx-a11y/alt-text */
import {React, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/Logo2.png';
import { Link } from 'react-scroll';
const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Calculate offset as a ratio of the viewport height
      setOffset(-window.innerHeight / 2 + window.innerHeight * 0.35);
    };

    // Set initial offset
    handleResize();

    // Update offset on window resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const linkProps = {
    smooth: true,
    duration: 0.5,
    offset: offset,
    className:'hover:text-purple-500 cursor-pointer',
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar
        bg="transparent"
        data-bs-theme="dark"
        expand="lg"
        fixed="top"
        className="mb-10 backdrop-blur-sm"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="hero"
            {...linkProps}
            className="lg:ml-5 flex flex-shrink-0 d-inline-block"
            onClick={handleLinkClick}
          >
            <img src={Logo} width="45" height="45" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-10 gap-6 font-bold text-xl">
              <Link
                to="hero"
                {...linkProps}
                activeClass="text-purple-500"
                onClick={handleLinkClick}
              >
                About Me
              </Link>
              <Link
                to="skills"
                {...linkProps}
                activeClass="text-purple-500"
                onClick={handleLinkClick}
              >
                Skills
              </Link>
              <Link
                to="projects"
                {...linkProps}
                activeClass="text-purple-500"
                onClick={handleLinkClick}
              >
                Projects
              </Link>
              <Link
                to="dreams"
                {...linkProps}
                activeClass="active purple-500"
                onClick={handleLinkClick}
              >
                Dreams
              </Link>
              <Link
                to="contact"
                {...linkProps}
                activeClass="text-purple-500"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;