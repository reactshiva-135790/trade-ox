import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./button.css"

const ButtonPage = (props) => {
  const {name} = props;
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} md={12} sm={12} xs={12}>
                            <div>
                                <button className='button-components'
                                >{name}</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
};

export default ButtonPage;