import { useState, useEffect } from 'react';

import Modal from 'react-bootstrap/Modal';

import "./modal.css"

import useDebounce from "../../hooks/useDebounce"

import DataGetter from '../dataGetter/DataGetter';

import { useWeb3React } from '@web3-react/core'

import axios from "axios";

import Web3 from "web3";

import { modalPageApi } from "../../https/api/Api"

function ModalPage(props) {

    const fufiMainApiUrl = process.env.REACT_APP_FUFI_MAIN_API_URL;

    let web3 = new Web3(Web3.givenProvider || fufiMainApiUrl);

    const { show, handleClose, handleClickOne } = props;

    const [myData, setMyData] = useState([]);

    const [myDataOne, setMyDataOne] = useState([]);

    const [isError, setIsError] = useState("");

    const [search, setSearch] = useState('');

    const [myState, setMyState] = useState('Add');

    const [filteredTitle, setFilteredTitle] = useState([]);

    const { account } = useWeb3React();

    const handleStateChange = (search) => {
        setMyState(search);
    }

    // using Async Await
    const getMyPostData = async () => {
        try {
            const res = await axios.get(modalPageApi);
            setMyData(res.data.msg);
            console.log("4546", res.data.msg);
        } catch (error) {
            setIsError(error.message);
        }
    };


    const getMyPost = async () => {
        try {
            const promises = myData.map(item =>
                axios.get(`https://fufiscan.com/api?module=account&action=tokenbalance&contractaddress=${item?.contractAddress}&address=${account}`)
            );
            const res = await Promise.all(promises);
            setMyDataOne(res.map(({ data }) => data));
            console.log("res", res);
        } catch (error) {
            setIsError(error.message);
        }
    };



    useEffect(() => {
        getMyPostData();
        return () => {

        };
    }, []);

    useEffect(() => {
        if (myData) {
            getMyPost();
        }
        return () => {

        };
    }, [myData]);


    // DeBounce Function
    useDebounce(() => {
        setFilteredTitle(
            myData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())
                || item.symbol.toLowerCase().includes(search.toLowerCase()) ||
                item.contractAddress.toLowerCase().includes(search.toLowerCase()))
        );
    }, [myData, search], 500);

    const handleSearch = (e) => setSearch(e.target.value);


    return (
        <>
            <Modal show={show} onHide={handleClose} scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title className="heading"> {/*{isError !== "" && <h2>{isError}</h2>} */}
                        Select a Token</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className="searchBar">
                            <input
                                id="search"
                                type="search"
                                spellCheck="false"
                                placeholder="Search a Token..."
                                value={search || ''}
                                onChange={handleSearch}
                                className="search"
                            />
                        </div>
                    </div>


                    {search.length > 1 ? filteredTitle.length > 0 ? (
                        filteredTitle.map((item, index) => {
                            return (
                                <div key={index} className="clfQhz  klhtso" onClick={() => handleClickOne(item)}>
                                    <div className="dbopPd klhtso cPWSLh">
                                        <div className="ihXAEA">{item.symbol}</div>
                                        <div className="bybWNd">{item.name}</div>
                                          
                                        <div>{`${myDataOne[index]?.result}`}</div>

                                    </div>
                                </div>
                            )
                        })
                    ) :
                        (<div><DataGetter search={search} onStateChange={handleStateChange} /></div>) :

                        (
                            myData.map((item, index) => {

                                return (
                                    <div key={index} className="clfQhz  klhtso" onClick={() => handleClickOne(item)}>
                                        <div className="dbopPd klhtso cPWSLh">
                                            <div className="ihXAEA">{item?.symbol}</div>
                                            <div className="bybWNd">{item?.name}</div>

                                            <div>{`${myDataOne[index]?.result}`}</div>

                                        </div>
                                    </div>
                                )
                            })
                        )}
                </Modal.Body>
            </Modal>
        </>
    );
}

export { ModalPage };


