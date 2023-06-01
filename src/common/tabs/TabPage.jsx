import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { FcAddDatabase, FcRemoveImage } from "react-icons/fc";

import "./tabs.css"

const TabPage = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Nav className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link className='modified-link'>Add<FcAddDatabase /></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='modified-link'>Remove<FcRemoveImage /></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </>
    )
};


export { TabPage };