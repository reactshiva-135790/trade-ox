import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { SwapPage } from "../../pages/swap/SwapPage"

import { ReversePage } from "../../pages/reverse/ReversePage";

import ConnectPage from '../../connect/ConnectPage';

import React, { useState } from "react";

import { useWeb3React } from '@web3-react/core'

const MainSwap = () => {

    const { active } = useWeb3React();

    const [showComponentOne, setShowComponentOne] = useState(true);

    function changeComponentOne() {
        setShowComponentOne(prev=>!prev);
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        {active ? (
                            !showComponentOne ? (
                                <SwapPage changeComponentOne={changeComponentOne}/>
                            ) : (
                                <ReversePage changeComponentOne={changeComponentOne}/>
                            )
                        ) : (
                            <ConnectPage />
                        )}

                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default MainSwap;