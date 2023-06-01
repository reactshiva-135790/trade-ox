import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsArrowUpCircle } from "react-icons/bs";

const RedirectButton = () => {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <button type='button'><BsArrowUpCircle /></button>
                        </Col>
                    </Row>
                </Container>


            </section>

        </>
    )
}

export default RedirectButton;