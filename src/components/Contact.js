import { Container, Row, Col } from "react-bootstrap";
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faIdCard, faPhone, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return(
        <Container>
            <br/>
            <br/>
            
            <Row className="text-center justify-content-md-center">
                <Col sm={12}>
                <FontAwesomeIcon icon={faIdCard} className="fontAw" />
                    <br/>
                    <br/>
                    <h5 className="subHeading ptSans">Contact Me</h5>
                    
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
               <Col className="text-center justify-content-md-center" sm={3}>
                   
                    <FontAwesomeIcon icon={faPhone} className="fontAw" />
                    <br></br>
                    <br></br>
                    <p className="contactTxt">215-962-1951</p>
                    
               </Col> 
               <Col className="text-center justify-content-md-center" sm={3}>
                   
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className="fontAw" />
                    <br></br>
                    <br></br>
                    <p className="contactTxt">Monet.Thigpen@gmail.com</p>
                    
               </Col> 
               <Col className="text-center justify-content-md-center" sm={3}>
                   <a href="https://www.linkedin.com/in/monet-thigpen-707001172/">
                    <FontAwesomeIcon icon={faLinkedin} className="fontAw" />
                    <br></br>
                    <br></br>
                    <p className="contactTxt">Check it out</p>
                    </a>
               </Col>
               <Col className="text-center justify-content-md-center" sm={3}>
                   <a href="github.com/monetthigpen">
                    <FontAwesomeIcon icon={faGithub} className="fontAw" />
                    <br></br>
                    <br></br>
                    <p className="contactTxt">Look At My Code</p>
                    </a>
               </Col> 
            </Row>
        </Container>
    )
}
export default Contact;