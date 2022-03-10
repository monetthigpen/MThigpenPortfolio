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
                    <p id="projSmTxt"><i>To learn about my current projects click</i> <a href="#">Here</a></p>
                </Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Col sm={10} >
                        <Card>
                        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/WINC.png`} />
                            <Card.Body>
                                <Card.Title>WINC Stories</Card.Title>
                                <Card.Text>
                                Interactive children's books for different age groups to model positive behaviors for respecting the environment and doing one's part to keep the city clean.
                                </Card.Text>
                                <Button variant="primary">Check Out WINC Stories</Button>
                            </Card.Body>
                        </Card>
                        
                </Col> 
            </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Col sm={5}>
                    <Card>
                            <Card.Img variant="top" src='https://cdn.dribbble.com/users/1208648/screenshots/4017072/sw.gif' />
                                <Card.Body>
                                    <Card.Title>My Funko Pop</Card.Title>
                                    <Card.Text>
                                    Design your own Funko POP. Drag and drop different heads, bodies, and legs of your favorite Marvel character Funko-Pops To play the full version with the matching game and trophy-room Sign-Up!
                                    </Card.Text>
                                    <Button variant="primary">Try It Out</Button>
                                </Card.Body>
                            </Card>
                            <br></br>
                </Col>
                
                <Col sm={5}>
                    <Card>
                        <Card.Img variant="top" className="projImg" src={`${process.env.PUBLIC_URL}/assets/images/Septa.png`} />
                            <Card.Body>
                                <Card.Title>Septa Key Playlist</Card.Title>
                                <Card.Text>
                                Modern problems require modern solutions. Today we provide you with one for a problem you probably don't think too much about. This website will create a playlist on YouTube just for your trip. The best part? Its timed for how long you'll be on Septa! Just give us some details below and you'll have entertainment in no time.
                                </Card.Text>
                                <Button variant="primary">Try It Out</Button>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/>
        </Container>
     );
 }
 export default Projects;