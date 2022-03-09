import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

function Skills() {
    return(
        <Container>
            <br/>
            <br/>
            <Row id="skills" className="text-center justify-content-md-center">
                <Col sm={12}>
                <FontAwesomeIcon icon={faCogs} className="fontAw" />
                    <br/>
                    <br/>
                    <h5 className="subHeading ptSans">Skills & Technologies</h5>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row className="text-center justify-content-md-center">
                <Col sm={3}>
                    <ListGroup>
                        <ListGroup.Item action variant="dark" className="lstItm">HTML</ListGroup.Item>
                        <ListGroup.Item action className="lstItm">CSS</ListGroup.Item>
                        <ListGroup.Item action variant="dark" className="lstItm">JavaScript</ListGroup.Item>
                        <ListGroup.Item action className="lstItm">React.js</ListGroup.Item>
                        <ListGroup.Item action variant="dark" className="lstItm">Node.js</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={3}>
                    <ListGroup>
                        <ListGroup.Item action variant="dark" className="lstItm">Git</ListGroup.Item>
                        <ListGroup.Item action className="lstItm">Bootstrap</ListGroup.Item>
                        <ListGroup.Item action variant="dark" className="lstItm">My SQL</ListGroup.Item>
                        <ListGroup.Item action className="lstItm">jQuery</ListGroup.Item>
                        <ListGroup.Item action variant="dark" className="lstItm">MongoDB</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={3}>
                    <ListGroup>
                        <ListGroup.Item action variant="dark" className="lstItm">JSX</ListGroup.Item>
                        <ListGroup.Item action className="lstItm">es6</ListGroup.Item>
                        <ListGroup.Item action variant="dark" className="lstItm">JSON</ListGroup.Item>
                        <ListGroup.Item  action className="lstItm">SharePoint REST API</ListGroup.Item>
                        <ListGroup.Item action variant="dark" className="lstItm">SharePoint Development</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}
export default Skills;