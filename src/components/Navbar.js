
import { Navbar, Container, Nav  } from 'react-bootstrap';
import React from'react'; 
import './Navbar.css';
function NavbarM() {
    return(
        // <p>Hello</p>
        <Navbar id="nvBck">
            <Container>
            <Navbar.Brand id="home" href="#home">Monet Thigpen</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link id="aboutN" href="#about">About</Nav.Link>
                        <Nav.Link id="projectsN" href="#projects">Projects</Nav.Link>
                        <Nav.Link id="skillsN" href="#skills">Skills</Nav.Link>
                        <Nav.Link id="contactN" href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    
    
    
}
export default NavbarM;