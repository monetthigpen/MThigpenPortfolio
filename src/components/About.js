import { Row, Container, Col, Button, Image} from 'react-bootstrap';
import './About.css';
function About() {
    return(
        <Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <Row className="justify-content-md-center">
                <Col sm={7}>
                    <br/>
                    <h5  id="aboutTxt" className="ptSans"> Hi, I'm Monet.
                    <br/>
                    I love to enhance small and large organization's web presence.</h5>
                    <p className="abtSmTxt"> I am a Full Stack Web Developer trained at the University of Pennsylvania with a passion for all things Web. I know that now and in the future all successful businesses will have a Web presence, so I want to create and innovate what businesses can do to improve their presence. Currently, I am helping my organization enhance internal document navigation, management, and creation. When these processes are given a clean and efficient UX and IU, the internal users provide a better service to external users. This is coupled with faster turn around times and higher productivity.
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