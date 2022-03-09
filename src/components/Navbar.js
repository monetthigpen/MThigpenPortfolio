
import { Navbar, Container, Nav  } from 'react-bootstrap';
import React from'react'; 
import './Navbar.css';
function NavbarM() {
    return(
        // <p>Hello</p>
        <Navbar id="nvBck">
            <Container>
            <Navbar.Brand id="home" href="#home">Monet Thigpen</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link id="about" href="#about">About</Nav.Link>
            <Nav.Link id="projects" href="#projects">Projects</Nav.Link>
            <Nav.Link id="skills" href="#skills">Skills</Nav.Link>
            <Nav.Link id="contact" href="#contact">Contact</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    );
    
    
    
}
export default NavbarM;