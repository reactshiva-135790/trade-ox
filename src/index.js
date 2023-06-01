import React from "react";

import { createRoot } from "react-dom/client";

import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { Web3ReactProvider } from '@web3-react/core'

import { Web3Provider } from "@ethersproject/providers";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";

import { Buffer } from 'buffer';

import { Provider } from "react-redux";

import { store } from "./store/index";

function getLibrary(provider) {

    return new Web3Provider(provider);

}

window.Buffer = Buffer;

const root = createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Web3ReactProvider getLibrary={getLibrary}>
                <App />
            </Web3ReactProvider>,
        </BrowserRouter>
    </Provider>

);



