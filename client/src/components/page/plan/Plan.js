import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from 'react-redux';
import { Redirect, Link } from "react-router-dom";

function Plan(props) {
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

         
        <section className="bg_img hero-section-2" style={{
         backgroundImage: `url("./assets/images/about/hero-bg2.jpg")`
      }}>
            <div className="container">
                <div className="hero-content text-white">
                    <h1 className="title">Plan</h1>
                    <ul className="breadcrumb">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            Plan
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hero-shape">
                <img className="wow slideInUp" src="./assets/images/about/hero-shape1.png" alt="about" data-wow-duration="1s" />
            </div>
        </section>
       
        <section className="offer-section padding-top padding-bottom">
            <div className="ball-group-1" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60"
            data-paroller-type="foreground" data-paroller-direction="horizontal">
                <img src="./assets/images/balls/ball-group1.png" alt="balls" />
            </div>
            <div className="ball-group-2" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30"
            data-paroller-type="foreground" data-paroller-direction="horizontal">
                <img src="./assets/images/balls/ball-group2.png" alt="balls" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        <div className="section-header">
                            <span className="cate">INVESTMENT OFFER</span>
                            <h2 className="title">OUR INVESTMENT PLANS</h2>
                            <p>
                                Hyipland provides a straightforward and transparent mechanism to attract investments and make more profits.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="offer-wrapper">
                    <div className="offer-item">
                        <div className="offer-header">
                            <h3 className="title">120%</h3>
                            <span><b>every day</b></span>
                        </div>
                        <div className="offer-body">
                            <span className="bal-shape"></span>
                            <div className="item first">
                                <div className="item-thumb">
                                    <img src="./assets/images/offer/offer1.png" alt="offer" />
                                </div>
                                <div className="item-content">
                                    <h5 className="title">Deposit</h5>
                                    <h5 className="subtitle"><span className="min">$10</span><span className="to">to</span><span className="max">$3500</span></h5>
                                </div>
                            </div>
                            <span className="bal-shape"></span>
                            <div className="item">
                                <div className="item-thumb">
                                    <img src="./assets/images/offer/offer2.png" alt="offer" />
                                </div>
                                <div className="item-content">
                                    <h5 className="title">Terms</h5>
                                    <h5 className="subtitle">10 days</h5>
                                </div>
                            </div>
                        </div>
                        <div className="offer-footer">
                            <a href="#0" className="custom-button">invest now</a>
                        </div>
                    </div>
                    <div className="offer-item">
                        <div className="offer-header">
                            <h3 className="title">120%</h3>
                            <span><b>every day</b></span>
                        </div>
                        <div className="offer-body">
                            <span className="bal-shape"></span>
                            <div className="item first">
                                <div className="item-thumb">
                                    <img src="./assets/images/offer/offer1.png" alt="offer" />
                                </div>
                                <div className="item-content">
                                    <h5 className="title">Deposit</h5>
                                    <h5 className="subtitle"><span className="min">$10</span><span className="to">to</span><span className="max">$3500</span></h5>
                                </div>
                            </div>
                            <span className="bal-shape"></span>
                            <div className="item">
                                <div className="item-thumb">
                                    <img src="./assets/images/offer/offer2.png" alt="offer" />
                                </div>
                                <div className="item-content">
                                    <h5 className="title">Terms</h5>
                                    <h5 className="subtitle">10 days</h5>
                                </div>
                            </div>
                        </div>
                        <div className="offer-footer">
                            <a href="#0" className="custom-button">invest now</a>
                        </div>
                    </div>
                    <div className="offer-item">
                        <div className="offer-header">
                            <h3 className="title">120%</h3>
                            <span><b>every day</b></span>
                        </div>
                        <div className="offer-body">
                            <span className="bal-shape"></span>
                            <div className="item first">
                                <div className="item-thumb">
                                    <img src="./assets/images/offer/offer1.png" alt="offer" />
                                </div>
                                <div className="item-content">
                                    <h5 className="title">Deposit</h5>
                                    <h5 className="subtitle"><span className="min">$10</span><span className="to">to</span><span className="max">$3500</span></h5>
                                </div>
                            </div>
                            <span className="bal-shape"></span>
                            <div className="item">
                                <div className="item-thumb">
                                    <img src="./assets/images/offer/offer2.png" alt="offer" />
                                </div>
                                <div className="item-content">
                                    <h5 className="title">Terms</h5>
                                    <h5 className="subtitle">10 days</h5>
                                </div>
                            </div>
                        </div>
                        <div className="offer-footer">
                            <a href="#0" className="custom-button">invest now</a>
                        </div>
                    </div>
                    <div className="offer-item">
                        <div className="offer-header">
                            <h3 className="title">120%</h3>
                            <span><b>every day</b></span>
                        </div>
                        <div className="offer-body">
                            <span className="bal-shape"></span>
                            <div className="item first">
                                <div className="item-thumb">
                                    <img src="./assets/images/offer/offer1.png" alt="offer" />
                                </div>
                                <div className="item-content">
                                    <h5 className="title">Deposit</h5>
                                    <h5 className="subtitle"><span className="min">$10</span><span className="to">to</span><span className="max">$3500</span></h5>
                                </div>
                            </div>
                            <span className="bal-shape"></span>
                            <div className="item">
                                <div className="item-thumb">
                                    <img src="./assets/images/offer/offer2.png" alt="offer" />
                                </div>
                                <div className="item-content">
                                    <h5 className="title">Terms</h5>
                                    <h5 className="subtitle">10 days</h5>
                                </div>
                            </div>
                        </div>
                        <div className="offer-footer">
                            <a href="#0" className="custom-button">invest now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <section className="profit-section padding-top padding-bottom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        <div className="section-header">
                            <span className="cate">Calculate the amazing profits</span>
                            <h2 className="title">You Can Earn</h2>
                            <p>Calculate your profit before making an investment.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0">
                <div className="profit-bg bg_img" style={{
         backgroundImage: `url("./assets/images/profit/profit-bg.png")`
      }} >
                    <div className="animation-group">
                        <div className="platform">
                            <img src="./assets/images/profit/platform.png" alt="profit" />
                        </div>
                        <div className="light">
                            <img src="./assets/images/profit/light.png" alt="profit" />
                        </div>
                        <div className="coin-1 wow fadeOutDown" data-wow-delay="1s">
                            <img src="./assets/images/profit/coin6.png" alt="profit" />
                        </div>
                        <div className="coin-2 wow fadeOutDown" data-wow-delay="1s">
                            <img src="./assets/images/profit/coin2.png" alt="profit" />
                        </div>
                        <div className="coin-3 wow fadeOutDown" data-wow-delay="1s">
                            <img src="./assets/images/profit/coin3.png" alt="profit" />
                        </div>
                        <div className="coin-4 wow fadeOutDown" data-wow-delay="1s">
                            <img src="./assets/images/profit/coin4.png" alt="profit" />
                        </div>
                        <div className="coin-5 wow fadeOutDown" data-wow-delay="1s">
                            <img src="./assets/images/profit/coin5.png" alt="profit" />
                        </div>
                        <div className="coin-6 wow fadeOutDown" data-wow-delay="1s">
                            <img src="./assets/images/profit/coin1.png" alt="profit" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="calculate-wrapper tab">
                    <div className="calculate--area">
                        <div className="calculate-area">
                            <div className="calculate-item">
                                <h5 className="title" data-serial="01">Select the plan</h5>
                                <select className="select-bar">
                                    <option value="01">120% daily for 50 days</option>
                                    <option value="02">110% daily for 30 days</option>
                                    <option value="03">105% daily for 20 days</option>
                                    <option value="04">102% daily for 10 days</option>
                                    <option value="05">101% daily for 5 days</option>
                                </select>
                            </div>
                            <div className="calculate-item">
                                <h5 className="title" data-serial="02">Select the currency</h5>
                                <ul className="tab-menu">
                                    <li>usd</li>
                                    <li className="active">btc</li>
                                    <li>eth</li>
                                    <li>rub</li>
                                </ul>
                            </div>
                            <div className="calculate-item">
                                <h5 className="title" data-serial="03">Enter the amount</h5>
                                <input type="number" value="100" />
                            </div>
                        </div>
                        <div className="tab-area">
                            <div className="tab-item">
                                <div className="profit-calc">
                                    <div className="item">
                                        <span className="cate">Daily Profit</span>
                                        <h2 className="title cl-theme-1">0.026400 USD</h2>
                                    </div>
                                    <div className="item">
                                        <span className="cate">Total Profit</span>
                                        <h2 className="title cl-theme">1.320000 USD</h2>
                                    </div>
                                </div>
                                <div className="invest-range-area">
                                    <div className="main-amount">
                                        <input type="text" className="calculator-invest" id="usd-amount" readonly />
                                    </div>
                                    <div className="invest-amount" data-min="1.00 USD" data-max="1000 USD">
                                        <div id="usd-range" className="invest-range-slider"></div>
                                    </div>
                                    <button type="submit" className="custom-button">join now</button>
                                </div>
                            </div>
                            <div className="tab-item active">
                                <div className="profit-calc">
                                    <div className="item">
                                        <span className="cate">Daily Profit</span>
                                        <h2 className="title cl-theme-1">0.026400 BTC</h2>
                                    </div>
                                    <div className="item">
                                        <span className="cate">Total Profit</span>
                                        <h2 className="title cl-theme">1.320000 BTC</h2>
                                    </div>
                                </div>
                                <div className="invest-range-area">
                                    <div className="main-amount">
                                        <input type="text" className="calculator-invest" id="btc-amount" readonly />
                                    </div>
                                    <div className="invest-amount" data-min="1.00 BTC" data-max="1000 BTC">
                                        <div id="btc-range" className="invest-range-slider"></div>
                                    </div>
                                    <button type="submit" className="custom-button">join now</button>
                                </div>
                            </div>
                            <div className="tab-item">
                                <div className="profit-calc">
                                    <div className="item">
                                        <span className="cate">Daily Profit</span>
                                        <h2 className="title cl-theme-1">0.026400 ETH</h2>
                                    </div>
                                    <div className="item">
                                        <span className="cate">Total Profit</span>
                                        <h2 className="title cl-theme">1.320000 ETH</h2>
                                    </div>
                                </div>
                                <div className="invest-range-area">
                                    <div className="main-amount">
                                        <input type="text" className="calculator-invest" id="eth-amount" readonly />
                                    </div>
                                    <div className="invest-amount" data-min="1.00 ETH" data-max="1000 ETH">
                                        <div id="eth-range" className="invest-range-slider"></div>
                                    </div>
                                    <button type="submit" className="custom-button">join now</button>
                                </div>
                            </div>
                            <div className="tab-item">
                                <div className="profit-calc">
                                    <div className="item">
                                        <span className="cate">Daily Profit</span>
                                        <h2 className="title cl-theme-1">0.026400 RUB</h2>
                                    </div>
                                    <div className="item">
                                        <span className="cate">Total Profit</span>
                                        <h2 className="title cl-theme">1.320000 RUB</h2>
                                    </div>
                                </div>
                                <div className="invest-range-area">
                                    <div className="main-amount">
                                        <input type="text" className="calculator-invest" id="rub-amount" readonly />
                                    </div>
                                    <div className="invest-amount" data-min="1.00 RUB" data-max="1000 RUB">
                                        <div id="rub-range" className="invest-range-slider"></div>
                                    </div>
                                    <button type="submit" className="custom-button">join now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        <section className="faq-section padding-top padding-bottom bg_img" style={{
         backgroundImage: `url("./assets/images/feature/feature-bg.png")`
      }}>
            <div className="ball-group-1" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60"
            data-paroller-type="foreground" data-paroller-direction="horizontal">
                <img src="./assets/images/balls/ball-group5.png" alt="balls" />
            </div>
            <div className="ball-group-2 rtl" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30"
            data-paroller-type="foreground" data-paroller-direction="horizontal">
                <img src="./assets/images/balls/ball-group6.png" alt="balls" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="section-header">
                            <span className="cate">You have questions</span>
                            <h2 className="title">
                                we have answers
                            </h2>
                            <p className="mw-100">
                                Do not hesitate to send us an email if you can't find what you're looking for.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="faq-wrapper">
                    <div className="faq-item">
                        <div className="faq-title">
                            <h5 className="title">What is the minimum percentage that an investor can earn on Hyipland?</h5>
                            <span className="right-icon"></span>
                        </div>
                        <div className="faq-content">
                            <p>
                                Ea commodi eius nisi fugiat eligendi neque repellendus vero, aliquam temporibus, dicta optio eveniet saepe. Beatae hic fugiat qui possimus doloribus? Ratione, molestiae magnam.
                            </p>
                        </div>
                    </div>
                    <div className="faq-item active open">
                        <div className="faq-title">
                            <h5 className="title">Can i invest using cryptocurrency?</h5>
                            <span className="right-icon"></span>
                        </div>
                        <div className="faq-content">
                            <p>
                                Ea commodi eius nisi fugiat eligendi neque repellendus vero, aliquam temporibus, dicta optio eveniet saepe. Beatae hic fugiat qui possimus doloribus? Ratione, molestiae magnam.
                            </p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-title">
                            <h5 className="title">What are the minimum and maximum deposit amounts?</h5>
                            <span className="right-icon"></span>
                        </div>
                        <div className="faq-content">
                            <p>
                                Ea commodi eius nisi fugiat eligendi neque repellendus vero, aliquam temporibus, dicta optio eveniet saepe. Beatae hic fugiat qui possimus doloribus? Ratione, molestiae magnam.
                            </p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-title">
                            <h5 className="title">How long will the money arrive in my account after the withdrawal process?</h5>
                            <span className="right-icon"></span>
                        </div>
                        <div className="faq-content">
                            <p>
                                Ea commodi eius nisi fugiat eligendi neque repellendus vero, aliquam temporibus, dicta optio eveniet saepe. Beatae hic fugiat qui possimus doloribus? Ratione, molestiae magnam.
                            </p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-title">
                            <h5 className="title">What payment system can i use to withdraw?</h5>
                            <span className="right-icon"></span>
                        </div>
                        <div className="faq-content">
                            <p>
                                Ea commodi eius nisi fugiat eligendi neque repellendus vero, aliquam temporibus, dicta optio eveniet saepe. Beatae hic fugiat qui possimus doloribus? Ratione, molestiae magnam.
                            </p>
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
                            <img src="./assets/images/logo/footer-logo.png" alt="logo" />
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

export default Plan;
