import { useEffect, useState } from 'react';

const useGetAmountsOut = (inputValue, library, dataABI, CONTRACT_ADDRESS, addressOne, addressTwo) => {
  const [inputValueOne, setInputValueOne] = useState('');

  useEffect(() => {
    const getAmountsOut = async () => {
      if (!inputValue || !library || !dataABI || !CONTRACT_ADDRESS || !addressOne || !addressTwo) {
        return;
      }

      const web3 = await new Web3(library.provider);
      const contract = await new web3.eth.Contract(dataABI, CONTRACT_ADDRESS);
      const amountOutbalances = await web3.utils.toWei(inputValue, 'ether');
      const pathArray = [addressOne, addressTwo];
      const data = await contract.methods.getAmountsOut(amountOutbalances, pathArray).call();
      let datas = { name1: data[0], name2: data[1] };
      setInputValueOne(data[1]);
    };

    getAmountsOut();
  }, [inputValue, library, dataABI, CONTRACT_ADDRESS, addressOne, addressTwo]);

  return inputValueOne;
};

export default useGetAmountsOut;
