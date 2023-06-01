import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./modal.css"
import useDebounce from "../../hooks/useDebounce"
import DataGetter from '../dataGetter/DataGetter';
import { useWeb3React } from '@web3-react/core'
import axios from "axios";
import Web3 from "web3";
import { modalPageApi } from "../../https/api/Api"
import AxiosRateLimit from 'axios-rate-limit';

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

    // Create an instance of axios with rate limiting applied
    const axiosWithRateLimit = AxiosRateLimit(axios.create(), {
        maxRequests: 5, // Maximum number of requests allowed within the given interval
        perMilliseconds: 1000, // Interval duration in milliseconds
    });

    const handleStateChange = (search) => {
        setMyState(search);
    }

    // using Async Await
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const getMyPostData = async () => {
        try {
            const res = await axios.get(modalPageApi);
            setMyData(res.data.msg);
            console.log("State", res.data.msg);
        } catch (error) {
            if (error.response && error.response.status === 429) {
                // Retry after a delay using exponential backoff
                await delay(1000); // Wait for 1 second
                getMyPostData(); // Retry the request
            } else {
                setIsError(error.message);
            }
        }
    };

    const getMyPost = async () => {
        try {
            const balanceRequest = axiosWithRateLimit.get(
                `https://fufiscan.com/api?module=account&action=balance&address=${account}`
            );

            const tokenBalanceRequests = myData.map(item =>
                axiosWithRateLimit.get(
                    `https://fufiscan.com/api?module=account&action=tokenbalance&contractaddress=${item.contractAddress}&address=${account}`
                )
            );

            const responses = await Promise.allSettled([
                balanceRequest,
                ...tokenBalanceRequests
            ]);

            const data = responses.map(response => {
                if (response.status === 'fulfilled') {
                    return response.value.data;
                } else {
                    throw new Error(response.reason);
                }
            });

            console.log('Data:', data);
            let newData = data.splice(1, 1);
            let data1 = data.slice(0).splice(1, 1);
            setMyDataOne(data);
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
                    <Modal.Title className="heading fw-bold fs-6">
                        {isError !== "" && <h2>{isError}</h2>}
                        Select a Token
                    </Modal.Title>
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

                    {search.length > 1
                        ? filteredTitle.length > 0
                            ? (
                                filteredTitle.map((item, index) => {
                                    return (
                                        <div key={index} className="clfQhz  klhtso" onClick={() => handleClickOne(item)}>
                                            <div className="dbopPd klhtso cPWSLh">
                                                <div className="ihXAEA">{item.symbol}</div>
                                                <div className="bybWNd">{item.name}</div>
                                                {
                                                    myDataOne[index]?.result ? (
                                                        <div>{myDataOne[index]?.result}</div>
                                                    ) : (
                                                        <div className='dots'></div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            )
                            : (<div><DataGetter search={search} onStateChange={handleStateChange} /></div>)
                        : (
                            myData.map((item, index) => {
                                return (
                                    <div key={index} className="clfQhz  klhtso" onClick={() => handleClickOne(item)}>
                                        <div className="dbopPd klhtso cPWSLh">
                                            <div className="ihXAEA">{item?.symbol}</div>
                                            <div className="bybWNd">{item?.name}</div>
                                            {
                                                myDataOne[index]?.result ? (
                                                    <div>{myDataOne[index]?.result}</div>
                                                ) : (
                                                    <div className='dots'></div>
                                                )
                                            }
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


// import { useState, useEffect } from 'react';

// import Modal from 'react-bootstrap/Modal';

// import "./modal.css"

// import useDebounce from "../../hooks/useDebounce"

// import DataGetter from '../dataGetter/DataGetter';

// import { useWeb3React } from '@web3-react/core'

// import axios from "axios";

// import Web3 from "web3";

// import { modalPageApi } from "../../https/api/Api"

// function ModalPage(props) {

//     const fufiMainApiUrl = process.env.REACT_APP_FUFI_MAIN_API_URL;

//     let web3 = new Web3(Web3.givenProvider || fufiMainApiUrl);

//     const { show, handleClose, handleClickOne } = props;

//     const [myData, setMyData] = useState([]);

//     const [myDataOne, setMyDataOne] = useState([]);

//     const [isError, setIsError] = useState("");

//     const [search, setSearch] = useState('');

//     const [myState, setMyState] = useState('Add');

//     const [filteredTitle, setFilteredTitle] = useState([]);

//     const { account } = useWeb3React();

//     const handleStateChange = (search) => {
//         setMyState(search);
//     }

//     // using Async Await
//     const getMyPostData = async () => {
//         try {
//             const res = await axios.get(modalPageApi);
//             setMyData(res.data.msg);
//             console.log("State", res.data.msg);
//         } catch (error) {
//             setIsError(error.message);
//         }
//     };


//     const getMyPost = async () => {
//         try {

//             const balanceRequest = axios.get(
//                 `https://fufiscan.com/api?module=account&action=balance&address=${account}`
//             );
//             // await sleep(10)
//             const tokenBalanceRequests = myData.map(item =>
//                 axios.get(
//                     `https://fufiscan.com/api?module=account&action=tokenbalance&contractaddress=${item.contractAddress}&address=${account}`
//                 )
//             );

//             const responses = await Promise.allSettled([
//                 balanceRequest,
//                 ...tokenBalanceRequests
//             ]);

//             const data = responses.map(response => {
//                 if (response.status === 'fulfilled') {
//                     return response.value.data;
//                 } else {
//                     throw new Error(response.reason);
//                 }
//             });

//             console.log('Data:', data);
//             let newData = data.splice(1, 1);
//             let data1 = data.slice(0).splice(1, 1);
//             setMyDataOne(data);
//         } catch (error) {
//             setIsError(error.message);
//         }

//     };


//     useEffect(() => {
//         getMyPostData();
//         return () => {

//         };
//     }, []);

//     useEffect(() => {
//         if (myData) {
//             getMyPost();
//         }
//         return () => {

//         };
//     }, [myData]);


//     // DeBounce Function
//     useDebounce(() => {
//         setFilteredTitle(
//             myData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())
//                 || item.symbol.toLowerCase().includes(search.toLowerCase()) ||
//                 item.contractAddress.toLowerCase().includes(search.toLowerCase()))
//         );
//     }, [myData, search], 500);

//     const handleSearch = (e) => setSearch(e.target.value);


//     return (
//         <>
//             <Modal show={show} onHide={handleClose} scrollable={true}>
//                 <Modal.Header closeButton>
//                     <Modal.Title className="heading fw-bold fs-6"> {isError !== "" && <h2>{isError}</h2>}
//                         Select a Token</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <div>
//                         <div className="searchBar">
//                             <input
//                                 id="search"
//                                 type="search"
//                                 spellCheck="false"
//                                 placeholder="Search a Token..."
//                                 value={search || ''}
//                                 onChange={handleSearch}
//                                 className="search"
//                             />
//                         </div>
//                     </div>


//                     {search.length > 1 ? filteredTitle.length > 0 ? (
//                         filteredTitle.map((item, index) => {
//                             return (
//                                 <div key={index} className="clfQhz  klhtso" onClick={() => handleClickOne(item)}>
//                                     <div className="dbopPd klhtso cPWSLh">
//                                         <div className="ihXAEA">{item.symbol}</div>
//                                         <div className="bybWNd">{item.name}</div>
//                                         <div>{`${myDataOne[index]?.result}`}</div>
//                                     </div>
//                                 </div>
//                             )
//                         })
//                     ) :
//                         (<div><DataGetter search={search} onStateChange={handleStateChange} /></div>) :

//                         (
//                             myData.map((item, index) => {

//                                 return (
//                                     <div key={index} className="clfQhz  klhtso" onClick={() => handleClickOne(item)}>
//                                         <div className="dbopPd klhtso cPWSLh">
//                                             <div className="ihXAEA">{item?.symbol}</div>
//                                             <div className="bybWNd">{item?.name}</div>
//                                             <div>{`${myDataOne[index]?.result}`}</div>
//                                         </div>
//                                     </div>
//                                 )
//                             })
//                         )}
//                 </Modal.Body>
//             </Modal>
//         </>
//     );
// }

// export { ModalPage };

// import { useState, useEffect } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import "./modal.css"
// import useDebounce from "../../hooks/useDebounce"
// import DataGetter from '../dataGetter/DataGetter';
// import { useWeb3React } from '@web3-react/core'
// import axios from "axios";
// import Web3 from "web3";
// import { modalPageApi } from "../../https/api/Api"

// function ModalPage(props) {
//     const fufiMainApiUrl = process.env.REACT_APP_FUFI_MAIN_API_URL;
//     let web3 = new Web3(Web3.givenProvider || fufiMainApiUrl);
//     const { show, handleClose, handleClickOne } = props;
//     const [myData, setMyData] = useState([]);
//     const [myDataOne, setMyDataOne] = useState([]);
//     const [isError, setIsError] = useState("");
//     const [search, setSearch] = useState('');
//     const [myState, setMyState] = useState('Add');
//     const [filteredTitle, setFilteredTitle] = useState([]);
//     const { account } = useWeb3React();
//     const [loadingStates, setLoadingStates] = useState([]);

//     const handleStateChange = (search) => {
//         setMyState(search);
//     }

//     const getMyPostData = async () => {
//         try {
//             const res = await axios.get(modalPageApi);
//             setMyData(res.data.msg);
//             console.log("4546", res.data.msg);
//         } catch (error) {
//             setIsError(error.message);
//         }
//     };

//     const getMyPost = async () => {
//         try {
//             const promises = myData.map((item) =>
//                 axios.get(`https://fufiscan.com/api?module=account&action=tokenbalance&contractaddress=${item.contractAddress}&address=${account}`)
//             );
//             const res = await Promise.all(promises);
//             const newDataOne = res.map(({ data }) => data);
//             setMyDataOne(newDataOne);
//         } catch (error) {
//             setIsError(error.message);
//         }
//     };

//     useEffect(() => {
//         getMyPostData();
//     }, []);

//     useEffect(() => {
//         if (myData.length > 0) {
//             getMyPost();
//         }
//     }, [myData]);

//     useDebounce(() => {
//         setFilteredTitle(
//             myData.filter((item) =>
//                 item.name.toLowerCase().includes(search.toLowerCase()) ||
//                 item.symbol.toLowerCase().includes(search.toLowerCase()) ||
//                 item.contractAddress.toLowerCase().includes(search.toLowerCase())
//             )
//         );
//     }, [myData, search], 500);

//     const handleSearch = (e) => setSearch(e.target.value);

//     useEffect(() => {
//         setLoadingStates(Array(myData.length).fill(true));
//     }, [myData]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const promises = myData.map((item, index) =>
//                 axios.get(`https://fufiscan.com/api?module=account&action=tokenbalance&contractaddress=${item?.contractAddress}&address=${account}`)
//             );
//             try {
//                 const res = await Promise.all(promises);
//                 const newDataOne = res.map(({ data }) => data);
//                 setMyDataOne(newDataOne);
//             } catch (error) {
//                 setIsError(error.message);
//             } finally {
//                 setLoadingStates(Array(myData.length).fill(false));
//             }
//         };

//         if (myData.length > 0) {
//             fetchData();
//         }
//     }, [myData, account]);

//     return (
//         <>
//             <Modal show={show} onHide={handleClose} scrollable={true}>
//                 <Modal.Header closeButton>
//                     <Modal.Title className="heading fw-bold fs-6">
//                         Select a Token
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <div>
//                         <div className="searchBar">
//                             <input
//                                 id="search"
//                                 type="search"
//                                 spellCheck="false"
//                                 placeholder="Search a Token..."
//                                 value={search || ''}
//                                 onChange={handleSearch}
//                                 className="search"
//                             />
//                         </div>
//                     </div>

//                     {search.length > 1 ? (
//                         filteredTitle.length > 0 ? (
//                             filteredTitle.map((item, index) => (
//                                 <div key={index} className="clfQhz  klhtso" onClick={() => handleClickOne(item)}>
//                                     <div className="dbopPd klhtso cPWSLh">
//                                         <div className="ihXAEA">{item.symbol}</div>
//                                         <div className="bybWNd">{item.name}</div>
//                                         {loadingStates[index] ? (
//                                             <div className='spinner'>Loading balance...</div>
//                                         ) : (
//                                             <div>{myDataOne[index]?.result}</div>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <div>
//                                 <DataGetter search={search} onStateChange={handleStateChange} />
//                             </div>
//                         )
//                     ) : (
//                         myData.map((item, index) => (
//                             <div key={index} className="clfQhz  klhtso" onClick={() => handleClickOne(item)}>
//                                 <div className="dbopPd klhtso cPWSLh">
//                                     <div className="ihXAEA">{item?.symbol}</div>
//                                     <div className="bybWNd">{item?.name}</div>
//                                     {loadingStates[index] ? (
//                                         <div className='spinner'>Loading balance...</div>
//                                     ) : (
//                                         <div>{myDataOne[index]?.result}</div>
//                                     )}
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </Modal.Body>
//             </Modal>
//         </>
//     );
// }

// export { ModalPage };

// import { useState, useEffect } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import "./modal.css"
// import useDebounce from "../../hooks/useDebounce"
// import DataGetter from '../dataGetter/DataGetter';
// import { useWeb3React } from '@web3-react/core'
// import axios from "axios";
// import Web3 from "web3";
// import { modalPageApi } from "../../https/api/Api"

// function ModalPage(props) {
//     const fufiMainApiUrl = process.env.REACT_APP_FUFI_MAIN_API_URL;
//     let web3 = new Web3(Web3.givenProvider || fufiMainApiUrl);
//     const { show, handleClose, handleClickOne } = props;
//     const [myData, setMyData] = useState([]);
//     const [myDataOne, setMyDataOne] = useState([]);
//     const [isError, setIsError] = useState("");
//     const [search, setSearch] = useState('');
//     const [myState, setMyState] = useState('Add');
//     const [filteredTitle, setFilteredTitle] = useState([]);
//     const { account } = useWeb3React();
//     const [loading, setLoading] = useState(true);

//     const handleStateChange = (search) => {
//         setMyState(search);
//     }

//     const getMyPostData = async () => {
//         try {
//             const res = await axios.get(modalPageApi);
//             setMyData(res.data.msg);
//         } catch (error) {
//             setIsError(error.message);
//         }
//     };

//     const getMyPost = async () => {
//         try {
//             const balanceRequest = axios.get(
//                 `https://fufiscan.com/api?module=account&action=balance&address=${account}`
//             );
//             const tokenBalanceRequests = myData.map((item) =>
//                 axios.get(
//                     `https://fufiscan.com/api?module=account&action=tokenbalance&contractaddress=${item.contractAddress}&address=${account}`
//                 )
//             );
//             const [balanceResponse, ...tokenResponses] = await Promise.all([
//                 balanceRequest,
//                 ...tokenBalanceRequests,
//             ]);
//             const balanceData = balanceResponse.data;
//             const tokenBalancesData = tokenResponses.map((response) => response.data);
//             const updatedData = myData.map((item, index) => ({
//                 ...item,
//                 balance: tokenBalancesData[index]?.result,
//             }));
//             setMyData(updatedData);
//             setLoading(false);
//         } catch (error) {
//             setIsError(error.message);
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         getMyPostData();
//     }, []);

//     useEffect(() => {
//         if (myData.length > 0) {
//             getMyPost();
//         }
//     }, [myData]);

//     useDebounce(() => {
//         setFilteredTitle(
//             myData.filter((item) =>
//                 item.name.toLowerCase().includes(search.toLowerCase()) ||
//                 item.symbol.toLowerCase().includes(search.toLowerCase()) ||
//                 item.contractAddress.toLowerCase().includes(search.toLowerCase())
//             )
//         );
//     }, [myData, search], 500);

//     const handleSearch = (e) => setSearch(e.target.value);

//     return (
//         <>
//             <Modal show={show} onHide={handleClose} scrollable={true}>
//                 <Modal.Header closeButton>
//                     <Modal.Title className="heading fw-bold fs-6">
//                         Select a Token
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <div>
//                         <div className="searchBar">
//                             <input
//                                 id="search"
//                                 type="search"
//                                 spellCheck="false"
//                                 placeholder="Search a Token..."
//                                 value={search || ''}
//                                 onChange={handleSearch}
//                                 className="search"
//                             />
//                         </div>
//                     </div>
//                     {search.length > 1 ? (
//                         filteredTitle.length > 0 ? (
//                             filteredTitle.map((item, index) => (
//                                 <div key={index} className="clfQhz  klhtso" onClick={() => handleClickOne(item)}>
//                                     <div className="dbopPd klhtso cPWSLh">
//                                         <div className="ihXAEA">{item.symbol}</div>
//                                         <div className="bybWNd">{item.name}</div>
//                                         {loading ? (
//                                             <div className='spinner'>Loading balance...</div>
//                                         ) : (
//                                             <div>{myDataOne[index]?.result}</div>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <div>
//                                 <DataGetter search={search} onStateChange={handleStateChange} />
//                             </div>
//                         )
//                     ) : (
//                         myData.map((item, index) => (
//                             <div key={index} className="clfQhz  klhtso" onClick={() => handleClickOne(item)}>
//                                 <div className="dbopPd klhtso cPWSLh">
//                                     <div className="ihXAEA">{item?.symbol}</div>
//                                     <div className="bybWNd">{item?.name}</div>
//                                     {loading ? (
//                                         <div className='spinner'>Loading balance...</div>
//                                     ) : (
//                                         <div>{myDataOne[index]?.result}</div>
//                                     )}
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </Modal.Body>
//             </Modal>
//         </>
//     );
// }

// export { ModalPage };





