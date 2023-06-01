import { useState } from 'react';
import { toast } from 'react-toastify';
import { useWeb3React } from '@web3-react/core'; // Import useWeb3React hook
import Web3 from 'web3';

const useApproveWcinWallet = () => {
  
  const { account, library } = useWeb3React(); // Access account and library from useWeb3React hook

  const [responseStatus, setResponseStatus] = useState('');

  const approveWcinWallet = async (abiData, addressOne, addressTwo, inputValue) => {
    console.log(abiData);
    console.log("addressOne", addressOne);
    console.log("addressTwo", addressTwo);

    try {
      const web3 = new Web3(library.provider);
      const contract = new web3.eth.Contract(abiData, addressOne);
      const tokenBals = web3.utils.toWei(inputValue, "ether");

      const accounts = await web3.eth.getAccounts();
      const fromAccount = accounts[0];

      const res = await contract.methods.approve(addressOne, tokenBals).send({ from: fromAccount });

      setResponseStatus(res.status);

      console.log("respro", res.status);

      toast.success('Approve Success', {
        position: toast.POSITION.TOP_CENTER
      });
    } catch (err) {
      toast.error('Approve Failed', {
        position: toast.POSITION.TOP_CENTER
      });
      console.error(err);
    }
  };

  return { approveWcinWallet, responseStatus };
};

export default useApproveWcinWallet;
