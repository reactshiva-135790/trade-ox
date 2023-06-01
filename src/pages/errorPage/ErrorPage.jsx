import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';

import ButtonPage from '../../components/button/ButtonPage';

import { useNavigate } from 'react-router-dom';

import "./errorPage.css"

const ErrorPage = () => {
    
    const navigate = useNavigate();

    const handleOnClick = () => navigate('/');

    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} md={12} sm={12} xs={12}>
                            <div>
                                <div className='error-page'>
                                    <img src="https://tradeox.in/static/media/errorPage.c11d082d.jpg" alt="" className="img-fluid" />
                                </div>
                                <div className='error-page'>
                                    <ButtonPage name={"Go To Home"}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}


export { ErrorPage };