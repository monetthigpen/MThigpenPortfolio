import { Container, Row, Col, Card, Button, CardGroup } from "react-bootstrap";
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

 function Projects() {
     return(
        <Container>
            <br/>
            <Row id="projects" className="text-center justify-content-md-center">
                <Col sm={12}>
                <FontAwesomeIcon icon={faLaptopCode} className="fontAw" />
                    <br/>
                    <br/>
                    <h5 className="subHeading ptSans">My Projects</h5>
                    <p id="projSmTxt"><i>To learn about my current projects click</i> <a href="https://docs.google.com/document/d/e/2PACX-1vRTdqmGKP_T-SLBjMQLnSQ--kl7wd12mJvnyZpNU_CcdLTCeRW_CpXgKe_r-edXpw/pub">Here</a></p>
                </Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
            <CardGroup>
                        <Card>
                        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/WINC.png`} />
                            <Card.Body>
                                <Card.Title>WINC Stories</Card.Title>
                                <Card.Text>
                                Interactive children's books for different age groups to model positive behaviors for respecting the environment and doing one's part to keep the city clean.
                                </Card.Text>
                                <Button variant="primary" href="http://winc-stories.herokuapp.com/">Check Out WINC Stories</Button>
                            </Card.Body>
                        </Card>
                        
                
                    <Card>
                            <Card.Img variant="top" src='https://cdn.dribbble.com/users/1208648/screenshots/4017072/sw.gif' />
                                <Card.Body>
                                    <Card.Title>My Funko Pop</Card.Title>
                                    <Card.Text>
                                    Design your own Funko POP. Drag and drop different heads, bodies, and legs of your favorite Marvel character Funko-Pops To play the full version with the matching game and trophy-room Sign-Up!
                                    </Card.Text>
                                    <Button variant="primary" href="https://funky-funkos.herokuapp.com/">Try It Out</Button>
                                </Card.Body>
                            </Card>
                            <br></br>
                </CardGroup>
            </Row>
            <br/>
        </Container>
     );
 }
 export default Projects;