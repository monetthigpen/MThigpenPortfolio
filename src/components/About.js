import { Row, Container, Col, Button, Image} from 'react-bootstrap';
import './About.css';
function About() {
    return(
        <Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <Row id="about" className="justify-content-md-center">
                <Col sm={7}>
                    <br/>
                    <h5  id="aboutTxt" className="ptSans"> Hi, I'm Monet.
                    <br/>
                    I love to enhance the web presence of small and large organizations.</h5>
                    <p className="abtSmTxt"> I am a Full Stack Web Developer trained at the University of Pennsylvania with a passion for all things Web. I know that now and in the future all successful businesses will need to be readily accessible online, so I want to create and innovate what businesses can do to improve their web presence. Currently, I am helping my organization enhance internal document navigation, management, and creation. With a clean and efficient UX and UI the internal processes are improved and production is increased, benefitting the company and the clients.
                    </p>
                    <Row>
                        <Col sm={6}>
                        <Button variant="success">Contact Me</Button>{' '}
                        <Button variant="light">See My Portfolio</Button>
                        </Col>
                    </Row>
                </Col>
                <Col sm={3}>
                    
                    <Image variant="top" alt="MonetT" src={`${process.env.PUBLIC_URL}/assets/images/MonetT.jpg`} id="profileImg"  />
   
                </Col>
            </Row>
            
            <br/>
            <br/>
            <br/>
            <br/>
        </Container>
        
    );
}
export default About;