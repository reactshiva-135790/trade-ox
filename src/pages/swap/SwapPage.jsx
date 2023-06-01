import React, { useState } from 'react';

import "./swap.css"

import axios from 'axios';

import Button from 'react-bootstrap/Button';

import { useSelector, useDispatch } from "react-redux";

import { setCoin, setInputValue, setIsReverse, setIsLoading } from "../../store/coinSlice";

import useApproveWcinWallet from '../../hooks/useApproveWcinWallet';

import { RiArrowUpDownLine } from "react-icons/ri";

import dataABI11 from "../../jsonData/dataABI11.json"

import { getABi } from '../../https/abi/getABi';

import { getMyPostDataOne } from "../../https/getMyPostDataOne/getMyPostDataOne"

import { ModalPage } from "../../common/modalPage/ModalPage"

import { useWeb3React } from '@web3-react/core'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import ABI from "../../utils/abi.json"

import ABI2 from "../../utils/Token.json";

import CIN_ABI from "../../utils/cinabi.json";

import {
    CONTRACT_ADDRESS,
    CC
} from "../../utils/constant";

import { isValid } from "../../validation/IsNumber"

import Web3 from "web3";

const SwapPage = (props) => {

    const { item, isFrom } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isModalOpenOne, setIsModalOpenOne] = useState(false);

    const [dataOne, setDataOne] = useState("FUFI")

    const [dataTwo, setDataTwo] = useState("FUSD")

    const [inputValue, setInputValue] = useState("");

    const [inputValueOne, setInputValueOne] = useState("");

    const [myDataOne, setMyDataOne] = useState(0);

    const [addressOne, setAddressOne] = useState(0);

    const [addressTwo, setAddressTwo] = useState(0);

    const [myDataTwo, setMyDataTwo] = useState(0);

    const [myDataThree, setMyDataThree] = useState(0);

    const [myDataFour, setMyDataFour] = useState()

    const [abiData, setABIdata] = useState(0);

    const [isErrorOne, setIsErrorOne] = useState("");

    const [valueData, setValueData] = useState("");

    const [selectedCoin, setSelectedCoin] = useState("WCIN")

    const [name2Value, setName2Value] = useState('');

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);

    const openModalOne = () => setIsModalOpenOne(true);

    const closeModalOne = () => setIsModalOpenOne(false);

    const amountET22Hbalances22 = Web3.utils.fromWei(inputValueOne, 'ether');

    console.log("datas.name2", amountET22Hbalances22)

    const { account, library } = useWeb3React();

    const dispatch = useDispatch();

    const selectedCoinOne = useSelector((state) => state.coin.coin);

    const { swapFusd, swapCoin } = useSelector((state) => state.coin.inputValue);

    const selectCoin = (e) => {
        dispatch(setCoin(e.target.value));
        refreshPage();
    };


    const { approveWcinWallet, responseStatus } = useApproveWcinWallet();

    const getAmountsOut = async (inputValue) => {

        window.web3 = await new Web3(library.provider);

        window.contract = await new window.web3.eth.Contract(dataABI11, CONTRACT_ADDRESS);

        const amountOutbalances = await window.web3.utils.toWei(inputValue, 'ether');

        const pathArray = [addressOne, addressTwo];

        const data = await window.contract.methods.getAmountsOut(amountOutbalances, pathArray).call();

        let datas = { name1: data[0], name2: data[1] };

        setInputValueOne(data[1]);

    }



    const swapFunction = async (inputValue, inputValueOne) => {

        window.web3 = await new Web3(library.provider);

        console.log("ssssssssssssssssssssssssssssss", window.web3)

        window.contract = await new window.web3.eth.Contract(
            dataABI11,
            CONTRACT_ADDRESS,
        );
        console.log("vjjk", inputValue)

        const pathArray = [addressOne, addressTwo];
        const amountOut = inputValue;

        const amountbalances = await Web3.utils.toWei(amountOut, 'ether');
        const amountInMax = inputValueOne;
        const amountETHbalances22 = await Web3.utils.fromWei(amountInMax, 'ether');
        console.log("datas.name2", amountETHbalances22)
        const amountOutbalances = await Web3.utils.toWei(amountETHbalances22, 'ether');

        const deadlineFromNow = Math.ceil(Date.now() / 1000) + 7200;

        await window.contract.methods.swapExactTokensForTokens(amountbalances, amountOutbalances, pathArray, account, deadlineFromNow).send({ from: account }) //address wallet address

            .then(async (re) => {

                console.log("Received", re);

                toast.success('Approve Success', {
                    position: toast.POSITION.TOP_CENTER
                });
            })
            .catch((err) => {
                toast.error('Approve Failed', {
                    position: toast.POSITION.TOP_CENTER
                });
            });

    };



    const handleButtonClick = (item) => {
        setAddressOne(item.contractAddress);
        setAddressTwo(item.contractAddress)
        setDataOne(item.symbol);
        getMyPostDataOne(item, isFrom, account, setMyDataOne, setIsErrorOne, "");
        setMyDataOne(item.address);
        setIsModalOpen(false);
    }

    const handleButtonClickOne = async (item) => {
        setABIdata(null);
        setDataTwo(item.symbol);
        setAddressTwo(item.contractAddress);
        await getABi(item.contractAddress, setABIdata, setIsErrorOne);
        getMyPostDataOne(item, isFrom, account, setMyDataTwo, setIsErrorOne, "one");
        setIsModalOpenOne(false);
    };


    const handleValue = async (dataOne, getABi, approveWcinWalletCallback) => {
        setValueData();
        await getABi(selectedCoin, setABIdata, setIsErrorOne);
        approveWcinWalletCallback(abiData, inputValue);
    };

    const inputsHandler = (e) => {

        setInputValue(e.target.value);

        getAmountsOut(e.target.value);

    };


    const renderButton = () => {
        if (!responseStatus) {
            return <div> <Button
                variant="warning text-light" className="bofjak"
                onClick={() => handleValue(dataOne, getABi, () => approveWcinWallet(abiData, addressOne, addressTwo, inputValue, inputValueOne, CONTRACT_ADDRESS))}
            >
                Approve {dataOne}
            </Button>
            </div>;
        } else {
            return <Button variant="warning text-light" className="bofjak mt-2"

                onClick={() => swapFunction(inputValue, inputValueOne)}
            >
                Swap LP

            </Button>;
        }
    };

    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-xxl-6 offset-xxl-3 col-xl-6
                        offset-xl-3 col-lg-6 col-offset-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="swap-pa shadow p-3 mb-5 bg-body-tertiary rounded">
                            <div className="bDoIUK">
                                Trade tokens in an instant Swap
                            </div>
                            <div>
                                <h3
                                    className="form-select feFKuX"
                                    aria-label="FUFI"
                                    onClick={openModal}
                                >{dataOne}</h3>
                                {isModalOpen && (
                                    <ModalPage
                                        show={openModal}
                                        handleClose={closeModal}
                                        handleClickOne={handleButtonClick} />
                                )}
                            </div>
                            <input
                                type="text"
                                className="_1cvvxtw5"
                                onChange={inputsHandler}
                                value={inputValue}
                                name="fufi_name"
                            />


                            <div>
                                <p className="fehOAA, .fehOAA-one bvkl ml-2">{dataOne} : {myDataOne}</p>
                            </div>

                            <div
                                className="d-flex justify-content-center 
                                pt-4 pb-2
                                "
                            >
                                <div className="ikmIEZ lbAREi">

                                    <RiArrowUpDownLine className="rounded-circle shadow"

                                        onClick={props.changeComponentOne} />

                                </div>

                            </div>

                            <div>

                                <label

                                    className="form-select feFKuX"
                                    aria-label="FUFI"
                                    onClick={openModalOne}
                                >
                                    {dataTwo}

                                </label>

                                {isModalOpenOne && (
                                    <ModalPage
                                        show={openModalOne}
                                        handleClose={closeModalOne}
                                        handleClickOne={handleButtonClickOne} />
                                )}
                            </div>

                            <div>

                                <input
                                    type="text"
                                    className="_1cvvxtw5"
                                    value={amountET22Hbalances22
                                    }
                                    name="fufi_name"
                                    readOnly
                                />

                            </div>

                            <div>

                                <p className="fehOAA, fehOAA-one bvkl ml-2">{dataTwo} : {myDataTwo}</p>

                            </div>

                            <div
                                className="d-flex justify-content-between justify-between2 pt-4 pb-2"
                                style={{ flexWrap: "wrap" }}
                            >
                                <div className="gitboxw">
                                    <p className="fehOAA">FUSD Balance :</p>
                                </div>
                                <div className="gitboxw">
                                    <p className="fehOAA ">Slippage Tolerence:</p>
                                </div>
                                <div className="gitboxw">
                                    <p className="fehOAA-one">Amount You Get :</p>
                                </div>
                            </div>

                            <ToastContainer />
                            {renderButton()}
                        </div>

                        <div className='swapPage-mode'>

                        </div>

                    </div>
                </div>

                <div className='swap-pagei'>

                </div>
            </div>
        </>
    )
};

export { SwapPage };