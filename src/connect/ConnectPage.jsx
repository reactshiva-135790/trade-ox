import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';

import "./connetPage.css"

import Connect from '../connectors/Connect';

const ConnectPage = () => {
    return (
        <Container>
            <Row>
                <div className="connect-home col-xxl-12 col-xl-12 col-lg-12
                            col-md-12 col-sm-12 col-xs-12">
                    <div className="bxckj add-user">
                        <div className="shadow p-3 mb-5 bg-body-tertiary rounded mt-4">
                            <div className="fOPopv mt-2">
                                <h2 className="csqZAq">Your Liqudity</h2>
                            </div>
                            <div className="chfQFH ">
                                <h6 className="boFdiO mb-4">Remove liquidity to receive tokens back</h6>
                            </div>
                            <div className="jxXgOi">
                                <h6 className="hkBZhX">Connect to a wallet to view your liquidity</h6>
                            </div>
                            <div className="mb-2 mt-3
                                    d-flex justify-content-center">
                                <Connect />
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
            <div className='connect-page'>

            </div>
        </Container>
    )
}

export default ConnectPage;

