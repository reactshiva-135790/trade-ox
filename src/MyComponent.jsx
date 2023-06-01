import React from 'react';
import useBalance from './hooks/useBalance';

const MyComponent = () => {
    const { myDataOne, getBalance } = useBalance([]);

    const handleButtonClick = () => {
        console.log("vhj")
        getBalance();
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Get Balance</button>
            {myDataOne.length > 0 ? (
                <div>
                    <h2>Balance:</h2>
                    <ul>
                        {myDataOne.map((balance, index) => (
                            <li key={index}>{balance}</li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default MyComponent;
