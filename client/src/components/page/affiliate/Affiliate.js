import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from 'react-redux';
import { Redirect, Link } from "react-router-dom";


function Affiliate(props) {
  return (
    <div className="main--body">
        <div className="">
        <div className="">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <a href="#0" className="scrollToTop"><i className="fas fa-angle-up"></i></a>
        <div className="overlay"></div>
        

        <header className="header-section">
            <div className="header-bottom">
                <div className="container">
                    <div className="header-area">
                        <div className="logo">
                            <a href="index.html">
                            <img src="./assets/images/logo/logo.png" alt="logo" />
                            </a>
                        </div>
                        <ul className="menu">
                        <li>
                                <Link to={`${process.env.PUBLIC_URL}/`}> Home </Link>
                                </li>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/about`}> About </Link>
                                </li>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/affiliate`}> Affiliate </Link>
                                </li>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/plan`}> Plan </Link>
                                </li>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/faq`}> Faqs </Link>
                                </li>
                                <li>
                                    <Link to={`${process.env.PUBLIC_URL}/contact`}> Contact </Link>
                                </li>
                                <li className="pr-0">
                                    <Link to={`${process.env.PUBLIC_URL}/login`} className="custom-button"> SignUp </Link>
                                </li>
                        </ul>
                        <div className="header-bar d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

         
        <section className="bg_img hero-section-2"  style={{
         backgroundImage: `url("./assets/images/about/hero-bg4.png")`
      }}>
            <div className="container">
                <div className="hero-content text-white">
                    <h1 className="title">Affiliates</h1>
                    <ul className="breadcrumb">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            Affiliates
                        </li>
                    </ul>
                </div>
            </div>
        </section>
       
        <section className="affiliate-programe padding-top pt-max-lg-0">
            <div className="ball-3" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30"
            data-paroller-type="foreground" data-paroller-direction="horizontal">
                <img src="./assets/images/balls/ball4.png" alt="balls" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 padding-bottom padding-top">
                        <div className="section-header left-style">
                            <span className="cate">What You’ll Get As</span>
                            <h2 className="title fz-md-49">Affiliate Program</h2>
                            <p>
                                We give you the opportunity to earn money by recommending our website to others. You can start earning money even if you do not invest.
                            </p>
                        </div>
                        <div className="affiliate-wrapper">
                            <div className="affiliate-item">
                                <div className="affiliate-inner">
                                    <div className="affiliate-thumb">
                                        <h3 className="title">2</h3>
                                        <span className="remainder">%</span>
                                        <span className="cont">1st</span>
                                    </div>
                                </div>
                            </div>
                            <div className="affiliate-item cl-two">
                                <div className="affiliate-inner">
                                    <div className="affiliate-thumb">
                                        <h3 className="title">5</h3>
                                        <span className="remainder">%</span>
                                        <span className="cont">2nd</span>
                                    </div>
                                </div>
                            </div>
                            <div className="affiliate-item cl-three">
                                <div className="affiliate-inner">
                                    <div className="affiliate-thumb">
                                        <h3 className="title">12</h3>
                                        <span className="remainder">%</span>
                                        <span className="cont">3rd</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="affiliate-bottom">
                            <h6 className="title">Make money with hyipland</h6>
                            <a href="#0" className="custom-button">
                                learn more <i className="flaticon-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 d-lg-block d-none">
                        <div className="afiliate-thumb">
                            <img src="./assets/images/affiliate/affiliate.png" alt="affiliate" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <section className="call-section call-overlay bg_img"  style={{
         backgroundImage: `url("./assets/images/call/call-bg.jpg")`
      }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7 col-xl-6">
                        <div className="call-item text-center text-sm-left">
                            <div className="call-icon">
                                <img src="./assets/images/call/icon01.png" alt="call" />
                            </div>
                            <div className="call-content">
                                <h5 className="title">Ready To Start Your Earnings Through Crypto Currency</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-xl-6 text-center text-sm-left text-md-right">
                        <a href="#0" className="custom-button">learn more <i className="flaticon-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
       
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-header">
                            <span className="cate">You’re Part of something Big</span>
                            <h2 className="title">$50,257,285.47</h2>
                            <p>Total Commissions Paid to Our Affiliates</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 d-lg-block d-none">
                        <div className="total-thumb rtl">
                            <img src="./assets/images/affiliate/total-1.png" alt="affiliate" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="total-content">
                            <div className="total-bg">
                                <img src="./assets/images/affiliate/affiliate-bg2.png" alt="affiliate" />
                            </div>
                            <div className="tot-wrapper">
                                <div className="tot-area">
                                    <div className="tot-item">
                                        <div className="tot-thumb">
                                            <img src="./assets/images/affiliate/tot1.png" alt="affiliate" />
                                        </div>
                                        <div className="tot-content">
                                            <div className="counter--item">
                                                <div className="counter-header">
                                                    <h2 className="title odometer" data-odometer-final="20">0</h2>
                                                </div>
                                                <p>
                                                    Supported Languages
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tot-item">
                                        <div className="tot-thumb">
                                            <img src="./assets/images/affiliate/tot3.png" alt="affiliate" />
                                        </div>
                                        <div className="tot-content">
                                            <div className="counter--item">
                                                <div className="counter-header">
                                                    <h2 className="title odometer" data-odometer-final="4.5">0</h2>
                                                    <h2 className="title">M</h2>
                                                </div>
                                                <p>
                                                    Users Worldwide
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tot-area">
                                    <div className="tot-item">
                                        <div className="tot-thumb">
                                            <img src="./assets/images/affiliate/tot3.png" alt="affiliate" />
                                        </div>
                                        <div className="tot-content">
                                            <div className="counter--item">
                                                <div className="counter-header">
                                                    <h2 className="title odometer" data-odometer-final="800">0</h2>
                                                    <h2 className="title">k</h2>
                                                </div>
                                                <p>
                                                    Popular Investors
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
        <section className="how-section bg_img padding-top padding-bottom pt-max-md-0"  style={{
         backgroundImage: `url("./assets/images/affiliate/affiliate-bg.png")`
      }}>
            <div className="ball-3" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60"
            data-paroller-type="foreground" data-paroller-direction="horizontal">
                <img src="./assets/images/balls/ball-group9.png" alt="balls" />
            </div>
            <div className="ball-2" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30"
            data-paroller-type="foreground" data-paroller-direction="horizontal">
                <img src="./assets/images/balls/ball-group10.png" alt="balls" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-header">
                            <span className="cate">Here’s how it works</span>
                            <h2 className="title">Getting  started? It’s simple</h2>
                            <p>
                                The affiliate program is our special feature for loyal Investors.Invite users and earn 40% of the fee on their exchange transactions!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mb-30-none">
                    <div className="col-md-6 col-lg-4 col-sm-10">
                        <div className="how-item">
                            <div className="how-thumb-area">
                                <div className="how-thumb">
                                    <img src="./assets/images/how/how4.png" alt="how" />
                                </div>
                            </div>
                            <div className="how-content">
                                <h5 className="title">Join Program</h5>
                                <a href="#0">Join Now <i className="flaticon-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-10">
                        <div className="how-item active">
                            <div className="how-thumb-area">
                                <div className="how-thumb">
                                    <img src="./assets/images/how/how5.png" alt="how" />
                                </div>
                            </div>
                            <div className="how-content">
                                <h5 className="title">Promote</h5>
                                <a href="#0">Tracking Link <i className="flaticon-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-10">
                        <div className="how-item">
                            <div className="how-thumb-area">
                                <div className="how-thumb">
                                    <img src="./assets/images/how/how6.png" alt="how" />
                                </div>
                            </div>
                            <div className="how-content">
                                <h5 className="title">Earn</h5>
                                <a href="#0">Commission Model <i className="flaticon-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        <section className="why-affiliate-section padding-bottom padding-top pt-max-lg-0">
            <div className="why--thumb">
                <img src="./assets/images/why/how.png" alt="why" />
            </div>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-lg-6">
                        <div className="why-affiliate-content">
                            <div className="section-header left-style">
                                <span className="cate">Why Should You</span>
                                <h2 className="title">Join affiliate?</h2>
                                <p>
                                    The affiliate program is our special feature for loyal Investors.
                                </p>
                            </div>
                            <div className="why-area">
                                <div className="why-item">
                                    <div className="why-inner">
                                        <div className="why-thumb">
                                            <img src="./assets/images/why/why1.png" alt="why" />
                                        </div>
                                        <div className="why-content">
                                            <h6 className="title">Joining free </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-item">
                                    <div className="why-inner">
                                        <div className="why-thumb">
                                            <img src="./assets/images/why/why2.png" alt="why" />
                                        </div>
                                        <div className="why-content">
                                            <h6 className="title">Instant Payout</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-item">
                                    <div className="why-inner">
                                        <div className="why-thumb">
                                            <img src="./assets/images/why/why3.png" alt="why" />
                                        </div>
                                        <div className="why-content">
                                            <h6 className="title">Performance Bonues</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-item">
                                    <div className="why-inner">
                                        <div className="why-thumb">
                                            <img src="./assets/images/why/why4.png" alt="why"/>
                                        </div>
                                        <div className="why-content">
                                            <h6 className="title">Unlimited affiliates</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#0" className="custom-button">join Now!</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <footer className="footer-section">
            <div className="newslater-section padding-bottom">
                <div className="container">
                    <div className="newslater-area">
                        <div className="newslater-content padding-bottom padding-top">
                            <span className="cate">SUBSCRIBE TO hyipland</span>
                            <h3 className="title">To Get Exclusive Benefits</h3>
                            <form className="newslater-form">
                                <input type="text" placeholder="Enter Your Email Here" required />
                                <button type="submit">subscribe</button>
                            </form>
                        </div>
                        <div className="newslater-thumb">
                            <img src="./assets/images/footer/footer.png" alt="footer" />
                            <div className="coin-1">
                                <img src="./assets/images/footer/Coin_01.png" alt="footer" />
                            </div>
                            <div className="coin-2">
                                <img src="./assets/images/footer/Coin_02.png" alt="footer" />
                            </div>
                            <div className="coin-3">
                                <img src="./assets/images/footer/Coin_03.png" alt="footer" />
                            </div>
                            <div className="coin-4">
                                <img src="./assets/images/footer/Coin_04.png" alt="footer" />
                            </div>
                            <div className="coin-5">
                                <img src="./assets/images/footer/Coin_05.png" alt="footer" />
                            </div>
                            <div className="coin-6">
                                <img src="./assets/images/footer/Coin_06.png" alt="footer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-top">
                    <div className="logo">
                        <a href="index.html">
                            <img src="./assets/images/logo/logo.svg" alt="logo" />
                        </a>
                    </div>
                    <ul className="links">
                    <li>
                            <Link to='/'> Home </Link>
                          </li>
                          <li>
                            <Link to='/about'> About </Link>
                          </li>
                            <li>
                                <Link to='/affiliate'> Affiliate </Link>
                            </li>
                            <li>
                                <Link to='/plan'> Plan </Link>
                            </li>
                            <li>
                                <Link to='/faq'> Faqs </Link>
                            </li>
                            <li>
                                <Link to='/contact'> Privacy Policy </Link>
                            </li>   
                    </ul>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-area">
                        <div className="left">
                            <p>&copy; 2020 <a href="#0">Hyipland</a> | All right reserved</p>
                        </div>
                        <ul className="social-icons">
                            <li>
                                <a href="#0">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#0" className="active">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <i className="fab fa-pinterest-p"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

        
    </div>
  );
}

export default Affiliate;
