import Button from 'react-bootstrap/Button';
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'

import { BsCurrencyBitcoin } from "react-icons/bs";

const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://fufi.finance/rpc`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
});
const Injected = new InjectedConnector({
    supportedChainIds: [60457]
});

const Disconnect = () => {
    const { deactivate, account } = useWeb3React();
    return (
        <>
            <div className='connnet-page'>
                <div className='inner-page'>
                    <BsCurrencyBitcoin /> {account
                        ? account.slice(0, 4) +
                        "..." +
                        account.slice(account.length - 4)
                        : ""}
                </div>
                <div className='inner-page-two'>
                    <Button variant="warning text-light" onClick={deactivate}>Disconnect</Button>
                </div>
            </div>
        </>

    )
};


export default Disconnect;



