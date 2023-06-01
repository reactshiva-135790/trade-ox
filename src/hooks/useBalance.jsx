import { useState } from 'react';
import axios from 'axios';

const useBalance = (initialData) => {
  const [myData, setMyData] = useState(initialData);
  const [myDataOne, setMyDataOne] = useState([]);
  const [isError, setIsError] = useState('');

  const getBalance = async () => {
    try {
      const promises = myData.map(item =>
        axios.get(`https://fufiscan.com/api?module=account&action=balance&address=${item.account}`)
      );
      const res = await Promise.all(promises);
      const newData = res.map(({ data }) => data);
      setMyDataOne(newData);
    } catch (error) {
      setIsError(error.message);
    }
  };

  return {
    myData,
    setMyData,
    myDataOne,
    setMyDataOne,
    getBalance,
    isError,
  };
};

export default useBalance;

