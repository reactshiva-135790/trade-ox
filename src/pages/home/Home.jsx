import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CommonInfo from '../commonInfo/CommonInfo';
import AboutPage from '../aboutPage/AboutPage';
import Slider from '../slider/Slider';
import Chart from '../chart/Chart';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Slider />
                    <CommonInfo />
                    <AboutPage />
                    <Chart />
                </Col>
            </Row>
        </Container>
    )
};

export { Home };