import "../aboutPage/about.css"

import { Link } from "react-router-dom";

import token from "../../assets/token.png"

import swap from "../../assets/swap.png"

import { tradeOx } from "../../links/Links";


const CommonInfo = () => {

    return (
        <>

            <section className="slider-section ">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="row-contents">
                                <div className="colcontainerds">
                                    <div className="colmdx5 colmd15">
                                        <div id="carouselbox" className="caruselide">
                                            <p className="para-suck">Non FEP-20 token pairs are not supported on TradeOX.</p>
                                            <p className="text-blck mb-58">Liquidity providers earn fees in form of FUFI & FUSD. Connect your wallet. WalletConnect. </p>

                                            <div className="dispaly-oin">
                                                <Link to='/trade' target="_top" onClick=""><button className="btn-input" type="button"
                                                >Trade Now</button></Link>
                                                <span className="text-blck mb-58 mt-4">
                                                    <a href="" target="_top" className="lern-more"> Learn More </a>
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="colcontainerds">
                                <div className="image-fg-two">
                                    <img src={token} className="image-place floating" />
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 order-lg-2 order-md-1
                         order-sm-1 order-xs-1 order-xxl-2 
                           order-xl-2 
                                 ">
                            <div className="colcontainerds">
                                <div className="colmdx5 colmd15">
                                    <div id="carouselbox" className="caruselide">
                                        <p className="para-suck">Liquidity providers earn fees in form of FUFI & FUSD
                                            <p className="text-blck mb-58">
                                                A typical liquidity pool rewards users for staking their digital assets in a pool.
                                            </p>

                                            <div className="dispaly-oin">
                                                <a href={tradeOx} target="_top" className="btn-input btin-under-line" type="button">
                                                    Explore
                                                </a>
                                                <span className="text-blck mb-58">
                                                    <a href={tradeOx} target="_top" className="lern-more">Learn More </a>
                                                </span>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 order-lg-1 order-md-2
                    order-sm-2 order-xs-2 order-xxl-1 order-xl-1
                 ">
                            <div className="row-contents">
                                <div className="colcontainerds">
                                    <div className="image-fg">
                                        <img src={swap} className="image-place floating" />
                                    </div>  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default CommonInfo;