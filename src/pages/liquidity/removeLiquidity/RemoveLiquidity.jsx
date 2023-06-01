import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { useWeb3React } from '@web3-react/core';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConnectPage from "../../../connect/ConnectPage";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { getBalance } from "../../../https/index"
import routerABI from "../../../jsonData/uni_V2Abi.json"
import abiFactory from "../../../jsonData/abiFactory.json";
import abipair from "../../../jsonData/abipair.json";


function RemoveLiquidity() {

    const fufiMainApiUrl = process.env.REACT_APP_FUFI_MAIN_API_URL;

    let account1 = "0xb0B46A6fe9AD35AbB025b0E74836601B22860E6a";

    let routerV2 = "0x8522FD6ae62CA1E218b372e5CB4c5af60fEBa502";

    let factoryContractAddress = "0x53EcF3c28A854881624b0f78208a6e2480b36C3b";

    let web3 = new Web3(Web3.givenProvider || fufiMainApiUrl);

    const [ChildPair, setChildPair] = useState([]);

    const [inputValue, setInputValue] = useState("");

    const { active, account, library } = useWeb3React();

    const [show, setShow] = useState(false);

    const [selectedItem, setSelectedItem] = useState(null);

    const [signatureData, setSignatureData] = useState();

    const Amount = 100;

    const liquidity = web3.utils.fromWei(Amount.toString(), "ether");

    const liquidityAmount = web3.utils.toWei(liquidity, "ether");

    const deadline = Math.ceil(Date.now() / 1000) + 1700;

    const handleClose = () => setShow(false);

    const handleShow = (item) => {

        setSelectedItem(item);

        setShow(true);
    };


    async function getPairData(pairAddress) {
        try {
            const web3 = new Web3(Web3.givenProvider || url);
            const contract = new web3.eth.Contract(abipair, pairAddress)
            const [token0, token1, totalSupply, liquidity, reserves] = await Promise.all([
                contract.methods.token0().call(),
                contract.methods.token1().call(),
                contract.methods.totalSupply().call(),
                contract.methods.balanceOf(account1).call(),
                contract.methods.getReserves().call()
            ]);
            const [token0Name, token1Name] = await Promise.all([
                getTokendetails(token0),
                getTokendetails(token1)

            ]);
            const totalSupplyEth = Web3.utils.fromWei(totalSupply, 'ether');
            const reserve0Eth = Web3.utils.fromWei(reserves._reserve0, 'ether');
            const reserve1Eth = Web3.utils.fromWei(reserves._reserve1, 'ether');
            const liquidityEth = Web3.utils.fromWei(liquidity, 'ether');
            const userLp1 = (liquidityEth / totalSupplyEth) * reserve0Eth;
            const userLp2 = (liquidityEth / totalSupplyEth) * reserve1Eth;
            if (userLp1 !== 0) {
                console.log("userLp1vhxzg", token0Name, token1Name);
                return [pairAddress, userLp1, userLp2, token0Name, token1Name];
            }
            return null;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async function getTokendetails(token) {
        try {
            const response = await getBalance(token);
            return response.data.result.name;
        } catch (error) {
            console.error(error);
            return "";
        }
    }

    async function getTokenPair() {
        try {
            const pairAddresses = await getallPairs();
            const data = await Promise.all(pairAddresses.map(getPairData));
            return data.filter(item => item !== null);
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async function getallPairs() {
        try {
            const web3 = new Web3(Web3.givenProvider || url);
            const contract = new web3.eth.Contract(abiFactory, factoryContractAddress);
            const allPairsLength = await contract.methods.allPairsLength().call();
            const pairAddresses = [];
            for (let i = 0; i < allPairsLength; i++) {
                const pairAddress = await contract.methods.allPairs(i).call();
                pairAddresses.push(pairAddress);
            }
            return pairAddresses;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    useEffect(() => {
        if (account) {
            getTokenPair()
                .then((result) => {
                    let finalArr = [];
                    for (var item of result) {
                        let res1 = {};
                        res1["ParentAddress"] = item[0];
                        res1[item[3]] = item[1];
                        res1[item[4]] = item[2];
                        finalArr.push(res1);
                    }
                    console.log("tokenPairAddress", finalArr);  //data in Array of nestedObject
                    console.log("result", result);   //data in Array of nestedArray
                    setChildPair(finalArr);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [account]);

    const approveTokenA = async () => {
        const keys = Object.keys(selectedItem);
        const index_1_value = selectedItem[keys[0]].toString();
        const contract = new web3.eth.Contract(
            abipair,
            index_1_value
        );
        console.log("wewwwww", index_1_value)
        const spenderAddress = routerV2;
        const amount = inputValue;
        const balances = Web3.utils.toWei(amount, 'ether');
        try {
            await contract.methods.approve(spenderAddress, balances).send({ from: account });
            toast.success('Token approved successfully!', { autoClose: 5000 });
        } catch (error) {
            toast.error('Error approving token.', { autoClose: 5000 });
        }
    };

    async function onAttemptToApprove() {
        if (!library) throw new Error('missing dependencies')
        console.log("ggggggggggggg", liquidityAmount)
        if (!liquidityAmount) throw new Error('missing liquidity amount')
        const nonce = await contract2.methods.nonces(account).call();
        const noncess = BigInt(nonce);
        console.log("sdacscdsfd", nonce)

        const EIP712Domain = [
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
            { name: 'verifyingContract', type: 'address' },
        ]
        const domain = {
            name: 'Uniswap V2',
            version: '1',
            chainId: await web3.eth.getChainId(),
            verifyingContract: pair2, // parent address 
        }
        const Permit = [
            { name: 'owner', type: 'address' },
            { name: 'spender', type: 'address' },
            { name: 'value', type: 'uint256' },
            { name: 'nonce', type: 'uint256' },
            { name: 'deadline', type: 'uint256' },
        ]
        const message = {
            owner: account,
            spender: routerV2,
            value: liquidityAmount.toString(),
            nonce: noncess.toString(16),
            deadline: deadlineForSignature,
        }

        console.log("messagemessage", message)

        const data = JSON.stringify({
            types: {
                EIP712Domain,
                Permit,
            },
            domain,
            primaryType: 'Permit',
            message,
        })
        console.log("datadatadata", data)

        library.send('eth_signTypedData_v4', [account, data])
            .then(splitSignature)
            .then((signature) => {
                setSignatureData({
                    v: signature.v,
                    r: signature.r,
                    s: signature.s,
                    deadline: deadlineForSignature,
                })

                console.log("vgjjjjjjjjjj", signature)
            })
            .catch((e) => {
                if (e?.code !== 4001) {
                    approveCallback()
                }
            })
    }


    const removeLiquidityETH = async () => {
        console.log("removeLiquidityETH")
        window.connectRouterV2 = await new web3.eth.Contract(routerV2ABI, routerV2);
        //const tokenAaddress = "0x6c387434f935cb08905b41ff97391d458579bd98"; // token address
        let tokenAaddressETH = contract.methods.token0().call();
        let tokenAaddress = await tokenAaddressETH.then((result) => {
            console.log("tokenA", result);
            return result;
        });
        const Liquidity = liquidityAmount.toString(); // input value    
        const amountTokenmin = 0;
        const amountEthmin = 0;
        const toAddress = account;
        const deadlineFromNow = document.getElementById("amountOutyy5").value;
        await window.connectRouterV2.methods.removeLiquidityETH(tokenAaddress, Liquidity, amountTokenmin, amountEthmin, toAddress, deadlineFromNow).send({ from: account });
    }


    const removeLiquidity = async () => {
        const keys = Object.keys(selectedItem);
        const index_1_value = selectedItem[keys[0]].toString();
        const contract = new web3.eth.Contract(abipair, index_1_value)
        console.log("pairSayrayy", index_1_value)

        window.connectRouterV2 = await new web3.eth.Contract(routerABI, routerV2);

        let tokenAaddress = contract.methods.token0().call();
        let tokenBaddress = contract.methods.token1().call();
        let tokAdd1 = await tokenAaddress.then((result) => {
            console.log("tokenA", result);
            return result;
        });
        let tokAdd2 = await tokenBaddress.then((result) => {
            console.log("tokenB", result);
            return result;
        });
        console.log("tokenAtokenB", tokAdd1, tokAdd2);
        const Liquidity = inputValue;
        const amountAmin = 0;
        const amountBmin = 0;
        const toAddress = account;
        const deadlineFromNow = deadline;
        try {
            await window.connectRouterV2.methods.removeLiquidity(tokAdd1, tokAdd2, Liquidity, amountAmin, amountBmin, toAddress, deadlineFromNow).send({ from: account });
            toast.success('Liquidity removed successfully');
        } catch (error) {
            toast.error('Failed to remove liquidity');
            console.error(error);
        }
    }


    const removeLiquidityETHWithPermit = async () => {
        window.connectRouterV2 = new web3.eth.Contract(routerV2ABI, routerV2);
        const tokenAaddress = "0x6c387434f935cb08905b41ff97391d458579bd98";
        const Liquidity = liquidityAmount.toString();
        const amountAmin = 0;
        const amountBmin = 0;
        const toAddress = account;
        const deadlineFromNow = document.getElementById("time1").value;
        const approveMax = false;
        const v = signatureData.v;
        const r = signatureData.r;
        const s = signatureData.s;
        //console.log("saurabh", "v:", v, ", r:", r, ", s:", s)
        await window.connectRouterV2.methods.removeLiquidityETHWithPermit(tokenAaddress, Liquidity, amountAmin, amountBmin, toAddress, deadlineFromNow, approveMax, v, r, s).send({ from: account });
    }


    const removeLiquidityETHWithPermitSupportingFeeOnTransferTokens = async () => {
        window.connectRouterV2 = new web3.eth.Contract(routerV2ABI, routerV2);
        const tokenAaddress = "0x6c387434f935cb08905b41ff97391d458579bd98";
        const Liquidity = liquidityAmount.toString();
        const amountAmin = 0;
        const amountBmin = 0;
        const toAddress = account;
        const deadlineFromNow = document.getElementById("time11").value;
        const approveMax = false;
        const v = signatureData.v;
        const r = signatureData.r;
        const s = signatureData.s;
        console.log("saurabh", "v:", v, ", r:", r, ", s:", s)
        await window.connectRouterV2.methods.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(tokenAaddress, Liquidity, amountAmin, amountBmin, toAddress, deadlineFromNow, approveMax, v, r, s).send({ from: account });
    }


    const removeLiquidityWithPermit = async () => {
        window.connectRouterV2 = new web3.eth.Contract(routerV2ABI, routerV2);
        const tokenAaddress = "0x6c387434f935cb08905b41ff97391d458579bd98";
        const tokenBaddress = "0xef889cf6972694d7cbc0018107cb793456fe2a93";
        const Liquidity = liquidityAmount.toString();
        const amountAmin = 0;
        const amountBmin = 0;
        const toAddress = account;
        const deadlineFromNow = document.getElementById("amountOut55").value;
        const approveMax = false;
        const v = signatureData.v;
        const r = signatureData.r;
        const s = signatureData.s;
        //console.log("saurabh", "v:", v, ", r:", r, ", s:", s)
        await window.connectRouterV2.methods.removeLiquidityWithPermit(tokenAaddress, tokenBaddress, Liquidity, amountAmin, amountBmin, toAddress, deadlineFromNow, approveMax, v, r, s).send({ from: account });
    }


    const inputsHandler = (e) => {
        setInputValue(e.target.value);
    };


    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        {account ? (
                            ChildPair.length > 0 ? (
                                <div className="d-flex">
                                    {ChildPair.map((item, index) => (
                                        <div className="card" key={index} onClick={() => handleShow(item)}>
                                            <div key={index}>
                                                {Object.keys(item).map((val) => {
                                                    if (Object.keys(item).indexOf(val) !== 0) {
                                                        return (
                                                            <div key={val}>
                                                                <strong>
                                                                    {/* {index} */}
                                                                    {val}</strong>: {item[val]}
                                                            </div>
                                                        );
                                                    }
                                                }
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>No data available.</p>
                            )
                        ) : (
                            <ConnectPage />
                        )}
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedItem && (
                        <>
                            <div>
                                {Object.entries(selectedItem).map(([key, value]) => {
                                    if (Object.values(selectedItem).indexOf(value) !== 0) {
                                        return (
                                            <div key={key}>
                                                <strong>{key}</strong>: {value}
                                            </div>
                                        );
                                    }
                                    return null; // Skip rendering the <div> for 'id'
                                })}
                            </div>
                            {/* Additional input fields */}
                            <div className="mb-2">
                                <input
                                    type="text"
                                    className="_1cvvxtw5"
                                    onChange={inputsHandler}
                                    value={inputValue}
                                    name="fufi_name"
                                />
                            </div>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" >
                        Verifying Singnature...
                    </Button>
                    <Button variant="secondary" onClick={approveTokenA}>
                        Approve
                    </Button>
                    <ToastContainer />
                    <Button
                        variant="warning"
                        onClick={removeLiquidity}
                    >
                        Confirm
                        
                        {/* onClick={() => (flag ? function1() : function2())}  

                        () => (userLp1 === WrappedFUFI ? removeLiquidityETH() : removeLiquidity())
                        
                        */}
                    </Button>
                    <ToastContainer />
                </Modal.Footer>
            </Modal>
        </section>
    );
}

export { RemoveLiquidity }
