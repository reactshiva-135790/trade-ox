import React from 'react'

import Button from 'react-bootstrap/Button';

import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'

import "./connect.css"

const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://fufi.finance/rpc`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
});
const Injected = new InjectedConnector({
    supportedChainIds: [60457]
});
const Connect = () => {
    const { activate } = useWeb3React();
    return (
        <div className='connnet-page'>
            <div className='inner-page'>
                <Button variant="warning text-light" onClick={() => { activate(WalletConnect) }}>Wallet Connect</Button>
            </div>
            <div className='inner-page-two'>
                <Button variant="warning text-light" onClick={() => { activate(Injected) }}>Metamask</Button>
            </div>
        </div>
    )
}

export default Connect;
