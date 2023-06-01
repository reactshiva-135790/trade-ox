// // import "./add.css"

// // import { useState } from "react";

// // import { GrAdd } from "react-icons/gr";

// // import axios from "axios";

// // import useBalance from "../../../hooks/useBalance"

// // import Button from 'react-bootstrap/Button';

// // import dataABI11 from "../../../jsonData/dataABI11.json"

// // import { getMyPostDataOne } from "../../../https/getMyPostDataOne/getMyPostDataOne"

// // import { AiOutlinePlus } from "react-icons/ai";

// // import { useWeb3React } from '@web3-react/core'

// // import { ModalPage } from "../../../common/modalPage/ModalPage";

// // import ABI from "../../../utils/abi.json"

// // import ABI2 from "../../../utils/Token.json";

// // import CIN_ABI from "../../../utils/cinabi.json";

// // import { ToastContainer, toast } from 'react-toastify';

// // import 'react-toastify/dist/ReactToastify.css';

// // import {
// //     CONTRACT_ADDRESS,
// // } from "../../../utils/constant";

// // import { isValid } from "../../../validation/IsNumber"

// // import Web3 from "web3";

// // import ConnectPage from "../../../connect/ConnectPage";

// // import { getAbi } from "../../../https/index"

// // const AddLiquidity = (props) => {

// //     const { item, isFrom, myData } = props;

// //     const [isModalOpen, setIsModalOpen] = useState(false);

// //     const [isModalOpenOne, setIsModalOpenOne] = useState(false);

// //     const [dataOne, setDataOne] = useState("FUFI")

// //     const [dataTwo, setDataTwo] = useState("FUSD")

// //     const [abiData, setABIdata] = useState(0);

// //     const [abiDataOne, setABIdataOne] = useState(0);

// //     const { myDataOne, setMyDataOne } = useBalance(0);

// //     const [myDataTwo, setMyDataTwo] = useState(0);

// //     const [responseStatus, setResponseStatus] = useState(false);

// //     const [responseStatusOne, setResponseStatusOne] = useState(false);

// //     const [addressOne, setAddressOne] = useState(0);

// //     const [addressTwo, setAddressTwo] = useState(0);

// //     const [inputValue, setInputValue] = useState("");

// //     const [inputValueOne, setInputValueOne] = useState("");

// //     const [selectedCoin, setSelectedCoin] = useState("WCIN")

// //     const [selectedCoinOne, setSelectedCoinOne] = useState("WCIN")

// //     const [isErrorOne, setIsErrorOne] = useState("");

// //     const [valueData, setValueData] = useState("");

// //     const openModal = () => setIsModalOpen(true);

// //     const closeModal = () => setIsModalOpen(false);

// //     const openModalOne = () => setIsModalOpenOne(true);

// //     const closeModalOne = () => setIsModalOpenOne(false);

// //     const { account, library } = useWeb3React();

// //     console.log("fufi", addressOne)

// //     console.log("fusd", addressTwo)


// //     const approveWcinWallet = async (abiData, addressOne, inputValue, spenderAddress) => {
// //         try {
// //             if (abiData === 0) {
// //                 <div className="spinner">

// //                 </div>
// //             } else {
// //                 console.log("abiData", abiData);

// //                 const web3 = new Web3(library.provider);

// //                 const contract = new web3.eth.Contract(abiData, addressOne);

// //                 const tokenBals = web3.utils.toWei(inputValue, "ether");

// //                 const accounts = await web3.eth.getAccounts();

// //                 const fromAccount = accounts[0];

// //                 const res = await contract.methods.approve(spenderAddress, tokenBals).send({ from: fromAccount });

// //                 setResponseStatus(res.status);

// //                 console.log(res.status);

// //                 toast.success('Approve Success', {
// //                     position: toast.POSITION.TOP_CENTER
// //                 });
// //             }

// //         } catch (err) {
// //             toast.error('Approve Failed', {
// //                 position: toast.POSITION.TOP_CENTER
// //             });
// //             console.error(err);
// //         }
// //     };

// //     const approveWcinWalletOne = async (abiData, addressTwo, inputValue, spenderAddress) => {
// //         console.log("abiDataOne:", abiData);
// //         console.log("Address Two:", addressTwo);
// //         console.log("Input Value:", inputValue);
// //         try {
// //             if (abiData === 0) {
// //                 <div className="spinner">

// //                 </div>
// //             } else {
// //                 console.log("abiData", abiData);
// //                 const web3 = new Web3(library.provider);
// //                 const contract = new web3.eth.Contract(abiData, addressTwo);
// //                 const tokenBals = web3.utils.toWei(inputValue, "ether");

// //                 const accounts = await web3.eth.getAccounts();
// //                 const fromAccount = accounts[0];

// //                 const resOne = await contract.methods.approve(spenderAddress, tokenBals).send({ from: fromAccount });

// //                 setResponseStatusOne(resOne.status);

// //                 console.log(resOne.status);

// //                 toast.success('Approve Success', {
// //                     position: toast.POSITION.TOP_CENTER
// //                 });
// //             }

// //         } catch (err) {
// //             toast.error('Approve Failed', {
// //                 position: toast.POSITION.TOP_CENTER
// //             });
// //             console.error(err);
// //         }
// //     };

// //     const addLiquidityETH = async () => {
// //         window.web3 = await new Web3(library.provider);
// //         window.contract = await new window.web3.eth.Contract(
// //             dataABI11,
// //             CONTRACT_ADDRESS,
// //         );
// //         const tokenAddress = addressTwo;
// //         const amount = inputValue;
// //         console.log("xcc", amount)
// //         const balances = await Web3.utils.toWei(amount, 'ether');
// //         console.log(balances)
// //         const amountDesired = inputValueOne;
// //         console.log("saa", amount, amountDesired)
// //         const balances1 = await Web3.utils.toWei(amountDesired, 'ether');
// //         const addressTo = account;
// //         const balances2 = 100;
// //         const balances3 = 100;
// //         const deadlineFromNow = Math.ceil(Date.now() / 1000) + 1700;
// //         await window.contract.methods.addLiquidityETH(tokenAddress, balances1, balances2, balances3, addressTo, deadlineFromNow).send({ from: account, value: balances.toString() });
// //     }

// //     const confirmFunc = async (addressOne, addressTwo, inputValue, inputValueOne) => {

// //         console.log("addressTwo:", addressTwo);

// //         console.log("confirm", addressOne, addressTwo, inputValue, inputValueOne, dataABI11);

// //         window.web3 = await new Web3(library.provider);

// //         window.contract = await new window.web3.eth.Contract(
// //             dataABI11,
// //             CONTRACT_ADDRESS,
// //         );

// //         const deadlineFromNow = Math.ceil(Date.now() / 1000) + 7200;
// //         let Tokenbals1 = await Web3.utils.toWei(inputValue, "ether");
// //         let Tokenbals2 = await Web3.utils.toWei(inputValueOne, "ether");
// //         await window.contract.methods.addLiquidity(addressOne, addressTwo, Tokenbals1, Tokenbals2, 10000, 10000, "0xb0B46A6fe9AD35AbB025b0E74836601B22860E6a", deadlineFromNow)

// //             .send({ from: account })

// //             .then(async (re) => {

// //                 console.log("Received", re);

// //                 toast.success('Approve Success', {
// //                     position: toast.POSITION.TOP_CENTER
// //                 });
// //             })
// //             .catch((err) => {
// //                 toast.error('Approve Failed', {
// //                     position: toast.POSITION.TOP_CENTER
// //                 });
// //             });
// //     };


// //     const getABi = async (contractAddress) => {
// //         try {
// //             console.log("contactAddress", contractAddress);
// //             const res = await getAbi(contractAddress);
// //             let Abi = res.data.result;
// //             const abiArray = JSON.parse(Abi);
// //             console.log("res", res);
// //             setABIdata(abiArray);
// //         } catch (error) {
// //             setIsErrorOne(error.message);
// //         }
// //     };


// //     const getABiOne = async (contractAddress) => {
// //         try {
// //             console.log(contractAddress);
// //             const res = await getAbi(contractAddress);
// //             let AbiOne = res.data.result;
// //             const abiArray = JSON.parse(AbiOne);
// //             console.log("resOne", res);
// //             setABIdataOne(abiArray);
// //         } catch (error) {
// //             setIsErrorOne(error.message);
// //         }
// //     };


// //     const handleButtonClick = (item) => {

// //         setDataOne(item.symbol);

// //         getMyPostDataOne(item, isFrom, account, setMyDataOne, setIsErrorOne, "");

// //         setMyDataOne(item.contractAddress);

// //         setAddressOne(item.contractAddress);

// //         setSelectedCoin(item.contractAddress);

// //         setIsModalOpen(false)
// //     }


// //     const handleButtonClickOne = (item) => {
// //         setDataTwo(item.symbol);
// //         getMyPostDataOne(item, isFrom, account, setMyDataTwo, setIsErrorOne, "one");
// //         setAddressTwo(item.contractAddress);
// //         setMyDataTwo(item.contractAddress);
// //         setIsModalOpenOne(false);
// //     };


// //     const inputsHandler = (e) => {

// //         setInputValue(e.target.value);

// //         setInputValueOne(e.target.value);

// //     };


// //     const handleValue = async (dataOne, getABi, approveWcinWallet) => {
// //         setValueData();
// //         await getABi(selectedCoin);

// //         if (dataOne === "FUFI") {
// //             approveWcinWalletOne(abiDataOne, addressTwo, inputValueOne);
// //         } else {
// //             approveWcinWallet(abiData, addressOne, inputValue, CONTRACT_ADDRESS);
// //         }
// //     };


// //     const handleValueOne = async (dataTwo, getABiOne, approveWcinWalletOne) => {
// //         setAddressTwo(item.contractAddress);
// //         setValueData();
// //         await getABiOne(selectedCoinOne);

// //         if (dataTwo === "FUFI") {
// //             approveWcinWalletOne(abiDataOne, addressTwo, inputValueOne);
// //         } else {
// //             approveWcinWallet(abiData, addressOne, inputValue, CONTRACT_ADDRESS);
// //         }
// //     };



// //     const renderButton = () => {
// //         if (dataOne === "FUFI") {
// //             // If dataOne is "FUFI"
// //             return (
// //                 <div>
// //                     <Button
// //                         variant="warning text-light"
// //                         className="bofjak"
// //                         onClick={() =>
// //                             handleValue(dataTwo, getABiOne, () =>
// //                                 approveWcinWalletOne(abiDataOne, addressTwo, inputValueOne, CONTRACT_ADDRESS)
// //                             )
// //                         }
// //                     >
// //                         Approve {dataTwo}
// //                     </Button>
// //                 </div>
// //             );
// //         } else if (!responseStatus) {
// //             // If dataOne is not "FUFI" and responseStatus is falsy
// //             return (
// //                 <div>
// //                     <Button
// //                         variant="warning text-light"
// //                         className="bofjak"
// //                         onClick={() =>
// //                             handleValue(dataOne, getABi, () =>
// //                                 approveWcinWallet(abiData, addressOne, inputValue, CONTRACT_ADDRESS)
// //                             )
// //                         }
// //                     >
// //                         Approve {dataOne}
// //                     </Button>
// //                 </div>
// //             );
// //         } else if (!responseStatusOne) {
// //             // If dataOne is not "FUFI", responseStatus is truthy, and responseStatusOne is falsy
// //             return (
// //                 <div>
// //                     <Button
// //                         variant="warning text-light"
// //                         className="bofjak"
// //                         onClick={() =>
// //                             handleValue(dataTwo, getABiOne, () =>
// //                                 approveWcinWalletOne(abiDataOne, addressTwo, inputValueOne, CONTRACT_ADDRESS)
// //                             )
// //                         }
// //                     >
// //                         Approve {dataTwo}
// //                     </Button>
// //                 </div>
// //             );
// //         } else {
// //             // If none of the above conditions are met
// //             return (
// //                 <div>
// //                     <Button
// //                         variant="warning text-light"
// //                         className="bofjak"
// //                         onClick={() =>
// //                             dataOne === "FUFI" ? addLiquidityETH() : confirmFunc(addressOne, addressTwo, inputValue, inputValueOne)
// //                         }
// //                     >            
// //                         {dataOne === "FUFI" ? "Add Liquidity ETH" : "Confirm LP"}
// //                     </Button>
// //                 </div>
// //             );
// //         }
// //     }; 

// //     return (
// //         <>
// //             <section>
// //                 <div className="container">
// //                     <div className="row add-user">
// //                         {account ?
// //                             <div className="col-xxl-6 offset-xxl-3 col-xl-6
// //                          add-liquid offset-xl-3 col-lg-6 col-offset-lg-3 col-md-12 col-sm-12 col-xs-12">
// //                                 <div className="">
// //                                     <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
// //                                         <div className="d-flex justify-content-start">
// //                                             <h3
// //                                                 className="form-select feFKuX"
// //                                                 aria-label="FUFI"
// //                                                 onClick={openModal}
// //                                             >{dataOne}</h3>
// //                                             {isModalOpen && (
// //                                                 <ModalPage
// //                                                     show={openModal}
// //                                                     handleClose={closeModal}
// //                                                     handleClickOne={handleButtonClick} />
// //                                             )}
// //                                         </div>
// //                                         <div className="cDURzI ">
// //                                             <input
// //                                                 type="text"
// //                                                 className="_1cvvxtw5"
// //                                                 onChange={(e) => setInputValue(e.target.value)}
// //                                                 value={inputValue}
// //                                                 name="fufi_name"
// //                                             />
// //                                         </div>
// //                                         <div>
// //                                             <p>
// //                                                 {dataOne} :{myDataOne}
// //                                             </p>
// //                                         </div>

// //                                         <div className="d-flex justify-content-center">
// //                                             <GrAdd />
// //                                         </div>

// //                                         <div className="d-flex justify-content-start">
// //                                             <label
// //                                                 className="form-select feFKuX"
// //                                                 aria-label="FUFI"
// //                                                 onClick={openModalOne}
// //                                             >
// //                                                 {dataTwo}
// //                                             </label>
// //                                             {isModalOpenOne && (
// //                                                 <ModalPage
// //                                                     show={openModalOne}
// //                                                     handleClose={closeModalOne}
// //                                                     handleClickOne={handleButtonClickOne} />
// //                                             )}
// //                                         </div>

// //                                         <div className="cDURzI">
// //                                             <input
// //                                                 type="text"
// //                                                 className="_1cvvxtw5"
// //                                                 onChange={(e) => setInputValueOne(e.target.value)}
// //                                                 value={inputValueOne}
// //                                                 name="fufi_name"
// //                                             />
// //                                         </div>
// //                                         <div>

// //                                             <p>{dataTwo}:{myDataTwo}</p>

// //                                         </div>

// //                                         <ToastContainer />

// //                                         {renderButton()}

// //                                     </div>

// //                                 </div>
// //                             </div> : <ConnectPage />
// //                         }
// //                     </div>

// //                     <div className="add-liq">

// //                     </div>

// //                 </div>

// //             </section>

// //         </>
// //     )
// // }

// // export { AddLiquidity };

// import "./add.css"

// import { useState } from "react";

// import { GrAdd } from "react-icons/gr";

// import axios from "axios";

// import useBalance from "../../../hooks/useBalance"

// import Button from 'react-bootstrap/Button';

// import dataABI11 from "../../../jsonData/dataABI11.json"

// import { getMyPostDataOne } from "../../../https/getMyPostDataOne/getMyPostDataOne"

// import { AiOutlinePlus } from "react-icons/ai";

// import { useWeb3React } from '@web3-react/core'

// import { ModalPage } from "../../../common/modalPage/ModalPage";

// import ABI from "../../../utils/abi.json"

// import ABI2 from "../../../utils/Token.json";

// import CIN_ABI from "../../../utils/cinabi.json";

// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';

// import {
//     CONTRACT_ADDRESS,
// } from "../../../utils/constant";

// import { isValid } from "../../../validation/IsNumber"

// import Web3 from "web3";

// import ConnectPage from "../../../connect/ConnectPage";

// import { getAbi } from "../../../https/index"

// const AddLiquidity = (props) => {

//     const { item, isFrom, myData } = props;

//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const [isModalOpenOne, setIsModalOpenOne] = useState(false);

//     const [dataOne, setDataOne] = useState("FUFI")

//     const [dataTwo, setDataTwo] = useState("FUSD")

//     const [abiData, setABIdata] = useState(0);

//     const [abiDataOne, setABIdataOne] = useState(0);

//     const { myDataOne, setMyDataOne } = useBalance(0);

//     const [myDataTwo, setMyDataTwo] = useState(0);

//     const [responseStatus, setResponseStatus] = useState(false);

//     const [responseStatusOne, setResponseStatusOne] = useState(false);

//     const [addressOne, setAddressOne] = useState(0);

//     const [addressTwo, setAddressTwo] = useState(0);

//     const [inputValue, setInputValue] = useState("");

//     const [inputValueOne, setInputValueOne] = useState("");

//     const [selectedCoin, setSelectedCoin] = useState("WCIN")

//     const [selectedCoinOne, setSelectedCoinOne] = useState("WCIN")

//     const [isErrorOne, setIsErrorOne] = useState("");

//     const [valueData, setValueData] = useState("");

//     const openModal = () => setIsModalOpen(true);

//     const closeModal = () => setIsModalOpen(false);

//     const openModalOne = () => setIsModalOpenOne(true);

//     const closeModalOne = () => setIsModalOpenOne(false);

//     const { account, library } = useWeb3React();

//     console.log("fufi", addressOne)

//     console.log("fusd", addressTwo)


//     const approveWcinWallet = async (abiData, addressOne, inputValue, spenderAddress) => {

//         console.log("Add53456453ress", abiData, addressOne, inputValue, spenderAddress)

//         try {
//             if (abiData === 0) {
//                 <div className="spinner">

//                 </div>
//             } else {
//                 console.log("abiData", abiData);

//                 const web3 = new Web3(library.provider);

//                 const contract = new web3.eth.Contract(abiData, addressOne);

//                 const tokenBals = web3.utils.toWei(inputValue, "ether");

//                 const accounts = await web3.eth.getAccounts();

//                 const fromAccount = accounts[0];

//                 const res = await contract.methods.approve(spenderAddress, tokenBals).send({ from: fromAccount });

//                 setResponseStatus(res.status);

//                 console.log(res.status);

//                 toast.success('Approve Success', {
//                     position: toast.POSITION.TOP_CENTER
//                 });
//             }

//         } catch (err) {
//             toast.error('Approve Failed', {
//                 position: toast.POSITION.TOP_CENTER
//             });
//             console.error(err);
//         }
//     };

//     const approveWcinWalletOne = async (abiData, addressTwo, inputValue, spenderAddress) => {
//         console.log("Address", abiData, addressTwo, inputValue, spenderAddress)
//         console.log("abiDataOne:", abiData);
//         console.log("Address Two:", addressTwo);
//         console.log("Input Value:", inputValue);
//         try {
//             if (abiData === 0) {
//                 <div className="spinner">

//                 </div>
//             } else {
//                 console.log("abiData", abiData);
//                 const web3 = new Web3(library.provider);
//                 const contract = new web3.eth.Contract(abiData, addressTwo);
//                 const tokenBals = web3.utils.toWei(inputValue, "ether");

//                 const accounts = await web3.eth.getAccounts();
//                 const fromAccount = accounts[0];

//                 const resOne = await contract.methods.approve(spenderAddress, tokenBals).send({ from: fromAccount });

//                 setResponseStatusOne(resOne.status);

//                 console.log(resOne.status);

//                 toast.success('Approve Success', {
//                     position: toast.POSITION.TOP_CENTER
//                 });
//             }

//         } catch (err) {
//             toast.error('Approve Failed', {
//                 position: toast.POSITION.TOP_CENTER
//             });
//             console.error(err);
//         }
//     };

//     const addLiquidityETH = async () => {
//         window.web3 = await new Web3(library.provider);
//         window.contract = await new window.web3.eth.Contract(
//             dataABI11,
//             CONTRACT_ADDRESS,
//         );
//         const tokenAddress = addressTwo;
//         const amount = inputValue;
//         console.log("xcc", amount)
//         const balances = await Web3.utils.toWei(amount, 'ether');
//         console.log(balances)
//         const amountDesired = inputValueOne;
//         console.log("saa", amount, amountDesired)
//         const balances1 = await Web3.utils.toWei(amountDesired, 'ether');
//         const addressTo = account;
//         const balances2 = 100;
//         const balances3 = 100;
//         const deadlineFromNow = Math.ceil(Date.now() / 1000) + 1700;
//         await window.contract.methods.addLiquidityETH(tokenAddress, balances1, balances2, balances3, addressTo, deadlineFromNow).send({ from: account, value: balances.toString() });
//     }

//     const confirmFunc = async (addressOne, addressTwo, inputValue, inputValueOne) => {
//         console.log("xcc", addressOne, addressTwo, inputValue, inputValueOne)

//         console.log("addressTwo:", addressTwo);

//         console.log("confirm", addressOne, addressTwo, inputValue, inputValueOne, dataABI11);

//         window.web3 = await new Web3(library.provider);

//         window.contract = await new window.web3.eth.Contract(
//             dataABI11,
//             CONTRACT_ADDRESS,
//         );

//         const deadlineFromNow = Math.ceil(Date.now() / 1000) + 7200;
//         let Tokenbals1 = await Web3.utils.toWei(inputValue, "ether");
//         let Tokenbals2 = await Web3.utils.toWei(inputValueOne, "ether");
//         await window.contract.methods.addLiquidity(addressOne, addressTwo, Tokenbals1, Tokenbals2, 10000, 10000, "0xb0B46A6fe9AD35AbB025b0E74836601B22860E6a", deadlineFromNow)

//             .send({ from: account })

//             .then(async (re) => {

//                 console.log("Received", re);

//                 toast.success('Approve Success', {
//                     position: toast.POSITION.TOP_CENTER
//                 });
//             })
//             .catch((err) => {
//                 toast.error('Approve Failed', {
//                     position: toast.POSITION.TOP_CENTER
//                 });
//             });
//     };


//     const getABi = async (contractAddress) => {
//         try {
//             console.log("contactAddress", contractAddress);
//             const res = await getAbi(contractAddress);
//             let Abi = res.data.result;
//             const abiArray = JSON.parse(Abi);
//             console.log("res", res);
//             setABIdata(abiArray);
//         } catch (error) {
//             setIsErrorOne(error.message);
//         }
//     };


//     const getABiOne = async (contractAddress) => {
//         try {
//             console.log(contractAddress);
//             const res = await getAbi(contractAddress);
//             let AbiOne = res.data.result;
//             const abiArray = JSON.parse(AbiOne);
//             console.log("resOne", res);
//             setABIdataOne(abiArray);
//         } catch (error) {
//             setIsErrorOne(error.message);
//         }
//     };


//     const handleButtonClick = (item) => {

//         setDataOne(item.symbol);

//         getMyPostDataOne(item, isFrom, account, setMyDataOne, setIsErrorOne, "");

//         setMyDataOne(item.contractAddress);

//         setAddressOne(item.contractAddress);

//         setSelectedCoin(item.contractAddress);

//         setIsModalOpen(false)
//     }


//     const handleButtonClickOne = (item) => {
//         setDataTwo(item.symbol);
//         getMyPostDataOne(item, isFrom, account, setMyDataTwo, setIsErrorOne, "one");
//         setAddressTwo(item.contractAddress);
//         setMyDataTwo(item.contractAddress);
//         setIsModalOpenOne(false);
//     };


//     const inputsHandler = (e) => {

//         setInputValue(e.target.value);

//         setInputValueOne(e.target.value);

//     };


//     const handleValue = async (dataOne, getABi, approveWcinWallet) => {
//         setValueData();
//         await getABi(selectedCoin);

//         if (dataOne === "FUFI") {
//             approveWcinWalletOne(abiDataOne, addressTwo, inputValueOne);
//         } else {
//             approveWcinWallet(abiData, addressOne, inputValue, CONTRACT_ADDRESS);
//         }
//     };


//     const handlFufiCoin = async () => {
//         setValueData();
//         approveWcinWalletOne(abiDataOne, addressTwo, inputValueOne, CONTRACT_ADDRESS);
//         if (responseStatusOne) {
//             addLiquidityETH()
//         }
//     }

//     const handleValueOne = async (dataTwo, getABiOne, approveWcinWalletOne) => {
//         setAddressTwo(item.contractAddress);
//         setValueData();
//         await getABiOne(selectedCoinOne);

//         if (dataTwo === "FUFI") {
//             await approveWcinWalletOne(abiDataOne, addressTwo, inputValueOne, CONTRACT_ADDRESS);
//             if (responseStatusOne) {
//                 addLiquidityETH();
//             }
//         } else {
//             await approveWcinWallet(abiData, addressOne, inputValue, CONTRACT_ADDRESS);
//             if (responseStatus) {
//                 confirmFunc(addressOne, addressTwo, inputValue, inputValueOne);
//             }
//         }
//     };


//     const renderButton = () => {
//         if (dataOne === "FUFI") {
//             // If dataOne is "FUFI"
//             return (
//                 <div>
//                     <Button
//                         variant="warning text-light"
//                         className="bofjak"
//                         onClick={() =>
//                             handlFufiCoin()
//                         }
//                     >
//                         Approve {dataTwo}
//                     </Button>
//                 </div>
//             );
//         } else if (!responseStatus) {
//             // If dataOne is not "FUFI" and responseStatus is falsy
//             return (
//                 <div>
//                     <Button
//                         variant="warning text-light"
//                         className="bofjak"
//                         onClick={() =>
//                             handleValue(dataOne, getABi, () =>
//                                 approveWcinWallet(abiData, addressOne, inputValue, CONTRACT_ADDRESS)
//                             )
//                         }
//                     >
//                         Approve {dataOne}
//                     </Button>
//                 </div>
//             );
//         } else if (!responseStatusOne) {
//             // If dataOne is not "FUFI", responseStatus is truthy, and responseStatusOne is falsy
//             return (
//                 <div>
//                     <Button
//                         variant="warning text-light"
//                         className="bofjak"
//                         onClick={() =>
//                             handleValue(dataTwo, getABiOne, () =>
//                                 approveWcinWalletOne(abiDataOne, addressTwo, inputValueOne, CONTRACT_ADDRESS)
//                             )
//                         }
//                     >
//                         Approve {dataTwo}
//                     </Button>
//                 </div>
//             );
//         } else {
//             // If none of the above conditions are met
//             return (
//                 <div>
//                     <Button
//                         variant="warning text-light"
//                         className="bofjak"
//                         onClick={() =>
//                             dataOne === "FUFI" ? addLiquidityETH() : confirmFunc(addressOne, addressTwo, inputValue, inputValueOne)
//                         }
//                     >
//                         {dataOne === "FUFI" ? "Add Liquidity ETH" : "Confirm LP"}
//                     </Button>
//                 </div>
//             );
//         }
//     };

//     return (
//         <>
//             <section>
//                 <div className="container">
//                     <div className="row add-user">
//                         {account ?
//                             <div className="col-xxl-6 offset-xxl-3 col-xl-6
//                          add-liquid offset-xl-3 col-lg-6 col-offset-lg-3 col-md-12 col-sm-12 col-xs-12">
//                                 <div className="">
//                                     <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
//                                         <div className="d-flex justify-content-start">
//                                             <h3
//                                                 className="form-select feFKuX"
//                                                 aria-label="FUFI"
//                                                 onClick={openModal}
//                                             >{dataOne}</h3>
//                                             {isModalOpen && (
//                                                 <ModalPage
//                                                     show={openModal}
//                                                     handleClose={closeModal}
//                                                     handleClickOne={handleButtonClick} />
//                                             )}
//                                         </div>
//                                         <div className="cDURzI ">
//                                             <input
//                                                 type="text"
//                                                 className="_1cvvxtw5"
//                                                 onChange={(e) => setInputValue(e.target.value)}
//                                                 value={inputValue}
//                                                 name="fufi_name"
//                                             />
//                                         </div>
//                                         <div>
//                                             <p>
//                                                 {dataOne} :{myDataOne}
//                                             </p>
//                                         </div>

//                                         <div className="d-flex justify-content-center">
//                                             <GrAdd />
//                                         </div>

//                                         <div className="d-flex justify-content-start">
//                                             <label
//                                                 className="form-select feFKuX"
//                                                 aria-label="FUFI"
//                                                 onClick={openModalOne}
//                                             >
//                                                 {dataTwo}
//                                             </label>
//                                             {isModalOpenOne && (
//                                                 <ModalPage
//                                                     show={openModalOne}
//                                                     handleClose={closeModalOne}
//                                                     handleClickOne={handleButtonClickOne} />
//                                             )}
//                                         </div>

//                                         <div className="cDURzI">
//                                             <input
//                                                 type="text"
//                                                 className="_1cvvxtw5"
//                                                 onChange={(e) => setInputValueOne(e.target.value)}
//                                                 value={inputValueOne}
//                                                 name="fufi_name"
//                                             />
//                                         </div>
//                                         <div>

//                                             <p>{dataTwo}:{myDataTwo}</p>

//                                         </div>

//                                         <ToastContainer />

//                                         {renderButton()}

//                                     </div>

//                                 </div>
//                             </div> : <ConnectPage />
//                         }
//                     </div>

//                     <div className="add-liq">

//                     </div>

//                 </div>

//             </section>

//         </>
//     )
// }

// export { AddLiquidity };

import "./add.css"

import { useState } from "react";

import { GrAdd } from "react-icons/gr";

import axios from "axios";

import useBalance from "../../../hooks/useBalance"

import Button from 'react-bootstrap/Button';

import dataABI11 from "../../../jsonData/dataABI11.json"

import { getMyPostDataOne } from "../../../https/getMyPostDataOne/getMyPostDataOne"

import { AiOutlinePlus } from "react-icons/ai";

import { useWeb3React } from '@web3-react/core'

import { ModalPage } from "../../../common/modalPage/ModalPage";

import ABI from "../../../utils/abi.json"

import ABI2 from "../../../utils/Token.json";

import CIN_ABI from "../../../utils/cinabi.json";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import {
    CONTRACT_ADDRESS,
} from "../../../utils/constant";

import { isValid } from "../../../validation/IsNumber"

import Web3 from "web3";

import ConnectPage from "../../../connect/ConnectPage";

import { getAbi } from "../../../https/index"

const AddLiquidity = (props) => {

    const { item, isFrom, myData } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isModalOpenOne, setIsModalOpenOne] = useState(false);

    const [dataOne, setDataOne] = useState("FUFI")

    const [dataTwo, setDataTwo] = useState("FUSD")

    const [abiData, setABIdata] = useState(0);

    const [abiDataOne, setABIdataOne] = useState(0);

    const { myDataOne, setMyDataOne } = useBalance(0);

    const [myDataTwo, setMyDataTwo] = useState(0);

    const [responseStatus, setResponseStatus] = useState(false);

    const [responseStatusOne, setResponseStatusOne] = useState(false);

    const [addressOne, setAddressOne] = useState(0);

    const [addressTwo, setAddressTwo] = useState(0);

    const [inputValue, setInputValue] = useState("");

    const [inputValueOne, setInputValueOne] = useState("");

    const [selectedCoin, setSelectedCoin] = useState("WCIN")

    const [selectedCoinOne, setSelectedCoinOne] = useState("WCIN")

    const [isErrorOne, setIsErrorOne] = useState("");

    const [valueData, setValueData] = useState("");

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);

    const openModalOne = () => setIsModalOpenOne(true);

    const closeModalOne = () => setIsModalOpenOne(false);

    const { account, library } = useWeb3React();

    console.log("fufi", addressOne)

    console.log("fusd", addressTwo)


    const approveWcinWallet = async (abiData, addressOne, inputValue, spenderAddress) => {

        console.log("Add53456453ress", abiData, addressOne, inputValue, spenderAddress)

        try {
            if (abiData === 0) {
                <div className="spinner">

                </div>
            } else {
                console.log("abiDataOne22", abiData);

                const web3 = new Web3(library.provider);

                const contract = new web3.eth.Contract(abiData, addressOne);

                const tokenBals = web3.utils.toWei(inputValue, "ether");

                const accounts = await web3.eth.getAccounts();

                const fromAccount = accounts[0];

                const res = await contract.methods.approve(spenderAddress, tokenBals).send({ from: fromAccount });

                setResponseStatus(res.status);

                console.log(res.status);

                toast.success('Approve Success', {
                    position: toast.POSITION.TOP_CENTER
                });
            }

        } catch (err) {
            toast.error('Approve Failed', {
                position: toast.POSITION.TOP_CENTER
            });
            console.error(err);
        }
    };

    const approveWcinWalletOne = async (abiDataOne, addressTwo, inputValueOne, spenderAddress) => {
        console.log("AddressOne", abiDataOne, addressTwo, inputValueOne, spenderAddress)
        console.log("abiDataOne:", abiDataOne);
        console.log("Address Two:", addressTwo);
        console.log("Input Value:", inputValueOne);
        try {
            if (abiDataOne === 0) {
                <div className="spinner">

                </div>
            } else {
                console.log("abiDataOne", abiDataOne);
                const web3 = new Web3(library.provider);
                const contract = new web3.eth.Contract(abiDataOne, addressTwo);
                const tokenBals = web3.utils.toWei(inputValueOne, "ether");

                const accounts = await web3.eth.getAccounts();
                const fromAccount = accounts[0];

                const resOne = await contract.methods.approve(spenderAddress, tokenBals).send({ from: fromAccount });

                setResponseStatusOne(resOne.status);

                console.log(resOne.status);

                toast.success('Approve Success', {
                    position: toast.POSITION.TOP_CENTER
                });
            }

        } catch (err) {
            toast.error('Approve Failed', {
                position: toast.POSITION.TOP_CENTER
            });
            console.error(err);
        }
    };

    const addLiquidityETH = async () => {
        window.web3 = await new Web3(library.provider);
        window.contract = await new window.web3.eth.Contract(
            dataABI11,
            CONTRACT_ADDRESS,
        );
        const tokenAddress = addressTwo;
        const amount = inputValue;
        console.log("xcc", amount)
        const balances = await Web3.utils.toWei(amount, 'ether');
        console.log(balances)
        const amountDesired = inputValueOne;
        console.log("saa", amount, amountDesired)
        const balances1 = await Web3.utils.toWei(amountDesired, 'ether');
        const addressTo = account;
        const balances2 = 100;
        const balances3 = 100;
        const deadlineFromNow = Math.ceil(Date.now() / 1000) + 1700;
        await window.contract.methods.addLiquidityETH(tokenAddress, balances1, balances2, balances3, addressTo, deadlineFromNow).send({ from: account, value: balances.toString() });
    }

    const confirmFunc = async (addressOne, addressTwo, inputValue, inputValueOne) => {
        console.log("xcc", addressOne, addressTwo, inputValue, inputValueOne)

        console.log("addressTwo:", addressTwo);

        console.log("confirm", addressOne, addressTwo, inputValue, inputValueOne, dataABI11);

        window.web3 = await new Web3(library.provider);

        window.contract = await new window.web3.eth.Contract(
            dataABI11,
            CONTRACT_ADDRESS,
        );

        const deadlineFromNow = Math.ceil(Date.now() / 1000) + 7200;
        let Tokenbals1 = await Web3.utils.toWei(inputValue, "ether");
        let Tokenbals2 = await Web3.utils.toWei(inputValueOne, "ether");
        await window.contract.methods.addLiquidity(addressOne, addressTwo, Tokenbals1, Tokenbals2, 10000, 10000, "0xb0B46A6fe9AD35AbB025b0E74836601B22860E6a", deadlineFromNow)

            .send({ from: account })

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


    const getABi = async (contractAddress) => {
        try {
            console.log("contactAddress", contractAddress);
            const res = await getAbi(contractAddress);
            let Abi = res.data.result;
            const abiArray = JSON.parse(Abi);
            console.log("res", res);
            setABIdata(abiArray);
        } catch (error) {
            setIsErrorOne(error.message);
        }
    };


    const getABiOne = async (contractAddress) => {
        try {
            console.log("contractAddressOne", contractAddress);
            const res = await getAbi(contractAddress);
            let AbiOne = res.data.result;
            const abiArray = JSON.parse(AbiOne);
            console.log("resOne", res);
            console.log("abiArray---> ", abiArray)
            setABIdataOne(abiArray);
        } catch (error) {
            setIsErrorOne(error.message);
        }
    };


    const handleButtonClick = (item) => {

        setDataOne(item.symbol);

        getMyPostDataOne(item, isFrom, account, setMyDataOne, setIsErrorOne, "");

        setMyDataOne(item.contractAddress);

        setAddressOne(item.contractAddress);

        setSelectedCoin(item.contractAddress);

        setIsModalOpen(false)
    }


    const handleButtonClickOne = (item) => {
        setDataTwo(item.symbol);
        getMyPostDataOne(item, isFrom, account, setMyDataTwo, setIsErrorOne, "one");
        setAddressTwo(item.contractAddress);
        setMyDataTwo(item.contractAddress);
        setIsModalOpenOne(false);
    };


    const inputsHandler = (e) => {

        setInputValue(e.target.value);

        setInputValueOne(e.target.value);
        a
    };


    const handleValue = async (dataOne, getABi, approveWcinWallet) => {
        setValueData();
        await getABi(selectedCoin);

        if (dataOne === "FUFI") {
            approveWcinWalletOne(abiDataOne, addressTwo, inputValueOne,CONTRACT_ADDRESS);
        } else {
            approveWcinWallet(abiData, addressOne, inputValue, CONTRACT_ADDRESS);
        }
    };

    const handlFufiCoin = async () => {

        setValueData();

        const contractAddress = CONTRACT_ADDRESS; // Replace with the actual contract address

        await getABiOne(contractAddress);

        window.web3 = await new Web3(library.provider);

        const contract = new web3.eth.Contract(abiDataOne, contractAddress); // Initialize the contract

        await approveWcinWalletOne(contract, addressTwo, inputValueOne, CONTRACT_ADDRESS); // Pass the contract object to the function

        console.log("Handled", abiDataOne, addressTwo, inputValueOne, CONTRACT_ADDRESS);
        if (responseStatusOne) {
            addLiquidityETH();
        }
    };


    const handleValueOne = async (dataTwo, getABiOne, approveWcinWalletOne) => {
        setAddressTwo(item.contractAddress);
        setValueData();
        await getABiOne();

        if (dataTwo === "FUFI") {
            await approveWcinWalletOne(abiDataOne, addressTwo, inputValueOne, CONTRACT_ADDRESS);
            if (responseStatusOne) {
                addLiquidityETH();
            }
        } else {
            await approveWcinWallet(abiData, addressOne, inputValue, CONTRACT_ADDRESS);
            if (responseStatus) {
                confirmFunc(addressOne, addressTwo, inputValue, inputValueOne);
            }
        }
    };



    const renderButton = () => {
        if (dataOne === "FUFI") {
            // If dataOne is "FUFI"
            return (
                <div>
                    <Button
                        variant="warning text-light"
                        className="bofjak"
                        onClick={() =>
                            handlFufiCoin()
                        }
                    >
                        Approve {dataTwo}
                    </Button>
                </div>
            );
        } else if (!responseStatus) {
            // If dataOne is not "FUFI" and responseStatus is falsy
            return (
                <div>
                    <Button
                        variant="warning text-light"
                        className="bofjak"
                        onClick={() =>
                            handleValue(dataOne, getABi, () =>
                                approveWcinWallet(abiData, addressOne, inputValue, CONTRACT_ADDRESS)
                            )
                        }
                    >
                        Approve {dataOne}
                    </Button>
                </div>
            );
        } else if (!responseStatusOne) {
            // If dataOne is not "FUFI", responseStatus is truthy, and responseStatusOne is falsy
            return (
                <div>
                    <Button
                        variant="warning text-light"
                        className="bofjak"
                        onClick={() =>
                            handleValue(dataTwo, getABiOne, () =>
                                approveWcinWalletOne(abiDataOne, addressTwo, inputValueOne, CONTRACT_ADDRESS)
                            )
                        }
                    >
                        Approve {dataTwo}
                    </Button>
                </div>
            );
        } else {
            // If none of the above conditions are met
            return (
                <div>
                    <Button
                        variant="warning text-light"
                        className="bofjak"
                        onClick={() =>
                            dataOne === "FUFI" ? addLiquidityETH() : confirmFunc(addressOne, addressTwo, inputValue, inputValueOne)
                        }
                    >
                        {dataOne === "FUFI" ? "Add Liquidity ETH" : "Confirm LP"}
                    </Button>
                </div>
            );
        }
    };

    return (
        <>
            <section>
                <div className="container">
                    <div className="row add-user">
                        {account ?
                            <div className="col-xxl-6 offset-xxl-3 col-xl-6
                         add-liquid offset-xl-3 col-lg-6 col-offset-lg-3 col-md-12 col-sm-12 col-xs-12">
                                <div className="">
                                    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                                        <div className="d-flex justify-content-start">
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
                                        <div className="cDURzI ">
                                            <input
                                                type="text"
                                                className="_1cvvxtw5"
                                                onChange={(e) => setInputValue(e.target.value)}
                                                value={inputValue}
                                                name="fufi_name"
                                            />
                                        </div>
                                        <div>
                                            <p>
                                                {dataOne} :{myDataOne}
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <GrAdd />
                                        </div>

                                        <div className="d-flex justify-content-start">
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

                                        <div className="cDURzI">
                                            <input
                                                type="text"
                                                className="_1cvvxtw5"
                                                onChange={(e) => setInputValueOne(e.target.value)}
                                                value={inputValueOne}
                                                name="fufi_name"
                                            />
                                        </div>
                                        <div>

                                            <p>{dataTwo}:{myDataTwo}</p>

                                        </div>

                                        <ToastContainer />

                                        {renderButton()}

                                    </div>

                                </div>
                            </div> : <ConnectPage />
                        }
                    </div>

                    <div className="add-liq">

                    </div>

                </div>

            </section>

        </>
    )
}

export { AddLiquidity };