import axios from 'axios';

export const getABi = async (contractAddress, setABIdata, setIsErrorOne) => {
  try {
    console.log("contactAddress", contractAddress);
    const res = await axios.get(`https://fufiscan.com/api?module=contract&action=getabi&address=${contractAddress}`);
    let Abi = res.data.result;
    const abiArray = JSON.parse(Abi);
    console.log("res", res);
    setABIdata(abiArray);
  } catch (error) {
    setIsErrorOne(error.message);
  }
};
