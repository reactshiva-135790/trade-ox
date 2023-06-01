import "./about.css";

import About from "../../assets/About.png"

import small from "../../assets/small.png"

const AboutPage = () => {
    return (
        <>
            <section className="slider-section">
                <h1 className="infore x2">
                    About Trade<span className="bigBits">
                        <img src={small} className="img-fluid" />
                    </span></h1>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="image-fg-one">
                                <img src={About} alt="about-page" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="pt-4 pb-4 colmd15 colmdx5-one ">
                                <div id="carouselbox" className="caruselide ">
                                    <p className="text-blck mb-58">Trade0x is a decentralized cryptocurrency exchange that is designed to empower the FutureFi Network. The exchange facilitates spot trades over FutureFi assets.
                                        The platform is powered by a Web 3.0 decentralized exchange and is core competitive in nature, which means that it is designed to provide a high level of security and efficiency to its users. Moreover, Trade0x is capable of handling multi-chain interactions, which makes it a versatile exchange that can accommodate a range of different cryptocurrencies.
                                        Trade0x's main goal is to provide users with a decentralized exchange that offers fast and secure trading, as well as a range of trading options that cater to different investment needs. By using Trade0x, users can enjoy the benefits of decentralized trading while also being able to access a range of financial products that are typically only available on centralized exchanges.
                                        Overall, Trade0x is a promising platform that is poised to become a leading decentralized exchange in the cryptocurrency space. With its focus on security, efficiency, and versatility, Trade0x is well-positioned to meet the needs of a growing number of cryptocurrency investors and traders.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};


export default AboutPage;