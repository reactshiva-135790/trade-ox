import transaction from "../../assets/transaction.png";
import Order from "../../assets/Order.png";
import Central from "../../assets/Central.png";
import swap from "../../assets/swap.png"
import "./slider.css";
import { RxExternalLink } from "react-icons/rx";


const Slider = () => {
    return (
        <>
            <section className="slider-section">
                <div className="container">
                    <div className="row">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item x1 active">
                                    <div className="row">
                                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12
                                        col-sm-12 col-xs-12">
                                            <div className="jah">
                                                <h3 className="bpbnod">Low transaction Fee</h3>
                                                <p></p>
                                                <button className="btn-input bghjk mt-5" type="button">
                                                    <a href="" target="_top" className="color-link">Learn More <span className="fjh"><RxExternalLink /></span> </a>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12
                                         col-sm-12 col-xs-12" style={{ position: "relative" }}>
                                            <div className="dipadc">
                                                <img src={transaction} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item x2">
                                    <div className="row">
                                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12
                                        col-sm-12 col-xs-12">
                                            <div className="jah">
                                                <h3 className="bpbnod">No order book</h3>
                                                <p></p>
                                                <button className="btn-input bghjk mt-5" type="button" >
                                                    <a href="" target="_top">
                                                        Learn More <span className="color-link"><RxExternalLink /></span></a>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12
                                       col-sm-12 col-xs-12" style={{ position: "relative" }}>
                                            <div className="dipadc">
                                                <img src={Order} alt="" srcSet="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="carousel-item x3">

                                    <div className="row">
                                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12
                                      col-sm-12 col-xs-12">
                                            <div className="jah">
                                                <h3 className="bpbnod">No Central party required</h3>
                                                <p></p>
                                                <button className="btn-input bghjk mt-5" type="button"  >
                                                    <a href="" target="_top" className="color-link">Learn More <span className="fjh">
                                                        <RxExternalLink /></span></a>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 
                                      col-sm-12 col-xs-12" style={{ position: "relative" }}>
                                            <div className="dipadc">
                                                <img src={Central} alt="" srcSet="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item x4">
                                    <div className="row">
                                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12
                                     col-sm-12 col-xs-12">
                                            <div className="jah">
                                                <h3 className="bpbnod">Easy Swap</h3>
                                                <p></p>
                                                <button className="btn-input bghjk mt-5" type="button">
                                                    <a href="#" target="_top" className="color-link"> Learn More <span className="fjh">
                                                        <RxExternalLink /></span></a>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12 
                                         col-sm-12 col-xs-12" style={{ position: "relative" }}>
                                            <div className="dipadc">
                                                <img src={swap} alt="" srcSet="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-indicators pt-5">
                                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" className="active" aria-current="true" aria-label="carousel-item 1"></button>
                                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="carousel-item 2"></button>
                                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" aria-label="carousel-item 3"></button>
                                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="3" aria-label="carousel-item 4"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Slider;