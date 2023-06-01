import axios from 'axios';
import Web3 from "web3";

let url = "https://fufi.finance/rpc";
let web3 = new Web3(Web3.givenProvider || url);

export const getMyPostDataOne = async (item, isFrom, account, setMyDataOne, setMyDataTwo,
    setAddreesOne, setAddreesTwo,
    setIsErrorOne) => {
        
    try {

        if(item.contractAddress==0x0000000000000000000000000000000000000000){
            const balanceWei = await web3.eth.getBalance(account);
            const res = web3.utils.fromWei(balanceWei, "ether");
            console.log(res)
            setMyDataOne(res);
            setAddreesOne(res)
        }
        else{
       const res = await axios.get(`https://fufiscan.com/api?module=account&action=tokenbalance&contractaddress=${item.contractAddress}&address=${account}`);
       if (isFrom === 'one') {
        setMyDataTwo(res.data.result);
        setAddreesTwo(res.data.result)
    } else {
        setMyDataOne(res.data.result);
        setAddreesOne(res.data.result)
       
     }  
    }
       
         
    } catch (error) {
        setIsErrorOne(error.message);
    }
};
