import React, { useState,Component } from "react";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from 'react-redux';
import { Redirect, Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeShow: true,
      backgroundImage:""
    };
}
    render(){
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
                                    <img src="./assets/images/logo/logo.gif" alt="logo" />
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


            <section className="banner-section" id="home">
                <div className="banner-bg d-lg-none">
                    <img src="./assets/images/banner/banner-bg2.jpg" alt="banner" />
                </div>
                <div className="banner-bg d-none d-lg-block bg_img" style={{
                    backgroundImage: `url("./assets/images/banner/banner.jpg")`
                }}>
                    <div className="chart-1 wow fadeInLeft" data-wow-delay=".5s" data-wow-duration=".7s">
                        <img src="./assets/images/banner/chart1.png" alt="banner" />
                    </div>
                    <div className="chart-2 wow fadeInDown" data-wow-delay="1s" data-wow-duration=".7s">
                        <img src="./assets/images/banner/chart2.png" alt="banner" />
                    </div>
                    <div className="chart-3 wow fadeInRight" data-wow-delay="1.5s" data-wow-duration=".7s">
                        <img src="./assets/images/banner/chart3.png" alt="banner" />
                    </div>
                    <div className="chart-4 wow fadeInUp" data-wow-delay="2s" data-wow-duration=".7s">
                        <img src="./assets/images/banner/clock.png" alt="banner" />
                    </div>
                </div>
                <div className="animation-area d-none d-lg-block">
                    <div className="plot">
                        <img src="./assets/images/banner/plot.png" alt="banner" />
                    </div>
                    <div className="element-1 wow fadeIn" data-wow-delay="1s">
                        <img src="./assets/images/banner/light.png" alt="banner" />
                    </div>
                    <div className="element-2 wow fadeIn" data-wow-delay="1s">
                        <img src="./assets/images/banner/coin1.png" alt="banner" />
                    </div>
                    <div className="element-3 wow fadeIn" data-wow-delay="1s">
                        <img src="./assets/images/banner/coin2.png" alt="banner" />
                    </div>
                    <div className="element-4 wow fadeIn" data-wow-delay="1s">
                        <img src="./assets/images/banner/coin3.png" alt="banner" />
                    </div>
                    <div className="element-5 wow fadeIn" data-wow-delay="1s">
                        <img src="./assets/images/banner/coin4.png" alt="banner" />
                    </div>
                    <div className="element-6 wow fadeIn" data-wow-delay="1s">
                        <img src="./assets/images/banner/coin5.png" alt="banner" />
                    </div>
                    <div className="element-7 wow fadeIn" data-wow-delay="1s">
                        <img src="./assets/images/banner/coin6.png" alt="banner" />
                    </div>
                    <div className="element-8 wow fadeIn" data-wow-delay="1s">
                        <img src="./assets/images/banner/sheild.png" alt="banner" />
                    </div>
                    <div className="element-9 wow fadeIn" data-wow-delay="1s">
                        <img src="./assets/images/banner/coin7.png" alt="banner" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 offset-lg-6 offset-xl-7">
                            <div className="banner-content">
                                <h1 className="title">Simply <span>Profitably </span> Conveniently</h1>
                                <p>
                                    A Profitable platform for high-margin investment
                            </p>
                                <div className="button-group">
                                    <a href="#0" className="custom-button">Get Started Now!</a>
                                    <a href="https://www.youtube.com/watch?v=GT6-H4BRyqQ" className="popup video-button"><i className="flaticon-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="counter-section">
                <div className="container">
                    <div className="row align-items-center mb-30-none justify-content-center">
                        <div className="col-sm-6 col-md-4">
                            <div className="counter-item">
                                <div className="counter-thumb">
                                    <img src="./assets/images/counter/counter01.png" alt="counter" />
                                </div>
                                <div className="counter-content">
                                    <div className="counter-header">
                                        <h3 className="title odometer" data-odometer-final="36.9">0</h3><h3 className="title">M</h3>
                                    </div>
                                    <p>Registered users</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="counter-item">
                                <div className="counter-thumb">
                                    <img src="./assets/images/counter/counter02.png" alt="counter" />
                                </div>
                                <div className="counter-content">
                                    <div className="counter-header">
                                        <h3 className="title odometer" data-odometer-final="174">0</h3>
                                    </div>
                                    <p>Countries Supported</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="counter-item">
                                <div className="counter-thumb">
                                    <img src="./assets/images/counter/counter03.png" alt="counter" />
                                </div>
                                <div className="counter-content">
                                    <div className="counter-header">
                                        <h3 className="title">$</h3><h3 className="odometer title" data-odometer-final="10.8">0</h3><h3 className="title">M</h3>
                                    </div>
                                    <p>Average Investment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="about-section padding-top padding-bottom" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 d-none d-lg-block rtl">
                            <img src="./assets/images/about/about.png" alt="about" />
                        </div>
                        <div className="col-lg-6">
                            <div className="section-header left-style">
                                <span className="cate">WELCOME TO HYIPLAND</span>
                                <h2 className="title">about hyipland</h2>
                                <p>
                                    HYIPLAND is an investment company, whose team is working on making money from the volatility of cryptocurrencies and offer great returns to our clients.
                            </p>
                            </div>
                            <div className="about--content">
                                <div className="about-item">
                                    <div className="about-thumb">
                                        <img src="./assets/images/about/about01.png" alt="about" />
                                    </div>
                                    <div className="about-content">
                                        <h5 className="title">Secure & Reliable</h5>
                                        <p>
                                            Secure assets fund for users
                                    </p>
                                    </div>
                                </div>
                                <div className="about-item">
                                    <div className="about-thumb">
                                        <img src="./assets/images/about/about02.png" alt="about" />
                                    </div>
                                    <div className="about-content">
                                        <h5 className="title">Fast Withdrawals</h5>
                                        <p>
                                            Quick money withdrawals for users
                                    </p>
                                    </div>
                                </div>
                                <div className="about-item">
                                    <div className="about-thumb">
                                        <img src="./assets/images/about/about03.png" alt="about" />
                                    </div>
                                    <div className="about-content">
                                        <h5 className="title">Guaranteed</h5>
                                        <p>
                                            Your return on investment is guaranteed
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="feature-section padding-top padding-bottom bg_img" style={{
                backgroundImage: `url("./assets/images/feature/feature-bg.png")`
            }} id="feature">
                <div className="ball-1" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60"
                    data-paroller-type="foreground" data-paroller-direction="horizontal">
                    <img src="./assets/images/balls/ball1.png" alt="balls" />
                </div>
                <div className="ball-2" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60"
                    data-paroller-type="foreground" data-paroller-direction="horizontal">
                    <img src="./assets/images/balls/ball2.png" alt="balls" />
                </div>
                <div className="ball-3" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30"
                    data-paroller-type="foreground" data-paroller-direction="horizontal">
                    <img src="./assets/images/balls/ball3.png" alt="balls" />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div className="section-header">
                                <span className="cate">Our Amazing Features</span>
                                <h2 className="title">
                                    why should you invest
                            </h2>
                                <p className="mw-100">
                                    We are worldwide investment company who are committed to the principle of revenue
                                    maximization and reduction of the financial risks at investing.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center feature-wrapper">
                        <div className="col-md-6 col-sm-10 col-lg-4">
                            <div className="feature-item">
                                <div className="feature-thumb">
                                    <img src="./assets/images/feature/feature01.png" alt="feature" />
                                </div>
                                <div className="feature-content">
                                    <h5 className="title">Profitable Investment</h5>
                                    <p>Donec tincidunt viverra ligula non interdum. Maecenas nulla </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-10 col-lg-4">
                            <div className="feature-item">
                                <div className="feature-thumb">
                                    <img src="./assets/images/feature/feature02.png" alt="feature" />
                                </div>
                                <div className="feature-content">
                                    <h5 className="title">DDS Protection</h5>
                                    <p>Donec tincidunt viverra ligula non interdum. Maecenas nulla </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-10 col-lg-4">
                            <div className="feature-item">
                                <div className="feature-thumb">
                                    <img src="./assets/images/feature/feature03.png" alt="feature" />
                                </div>
                                <div className="feature-content">
                                    <h5 className="title">24/7 Support Center</h5>
                                    <p>Donec tincidunt viverra ligula non interdum. Maecenas nulla </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="get-section padding-top padding-bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="section-header">
                                <span className="cate">get to know</span>
                                <h2 className="title">how we work?</h2>
                                <p>
                                    Follow these simple steps and make profit!
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="hover-tab">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 d-lg-block d-none">
                                <div className="hover-tab-area">
                                    <div className="tab-area">
                                        <div className="tab-item active first">
                                            <img src="./assets/images/how/how01.png" alt="how" />
                                        </div>
                                        <div className="tab-item second">
                                            <img src="./assets/images/how/how02.png" alt="how" />
                                        </div>
                                        <div className="tab-item third">
                                            <img src="./assets/images/how/how03.png" alt="how" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-9">
                                <div className="hover-tab-menu">
                                    <ul className="tab-menu">
                                        <li className="active">
                                            <div className="menu-thumb">
                                                <span>
                                                    01
                                            </span>
                                            </div>
                                            <div className="menu-content">
                                                <h5 className="title">Instant  registration</h5>
                                                <p>
                                                    Click <Link to='/login'>registration</Link> to fill the blank, our 256 SSL will Protect your privacy.
                                            </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-thumb">
                                                <span>
                                                    02
                                            </span>
                                            </div>
                                            <div className="menu-content">
                                                <h5 className="title">MAKE AN INVEST</h5>
                                                <p>
                                        <Link to='/login'>Login</Link> your account to click invest to start to earn the profit.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-thumb">
                                                <span>
                                                    03
                                            </span>
                                            </div>
                                            <div className="menu-content">
                                                <h5 className="title">get profit</h5>
                                                <p>
                                                    You will get your profit on your profile, also you will get Instant Payment
                                            </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="call-section call-overlay bg_img" style={{
                backgroundImage: `url("./assets/images/call/call-bg.jpg")`
            }}  >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="call--item">
                                <span className="cate">Why We are always ready</span>
                                <h3 className="title">Request a call back</h3>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="call-button">
                                <a href="Tel:0939303" className="call">
                                    <img src="./assets/images/call/icon02.png" alt="call" />
                                </a>
                                <a href="#0" className="custom-button"> Contact Support</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="offer-section padding-top padding-bottom pb-max-md-0" id="plan">
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


            <section className="profit-section padding-top" id="profit">
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
                                    <input type="number" className="form-control" value="100" />
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


            <section className="latest-transaction padding-top padding-bottom" id="transaction">
                <div className="transaction-bg bg_img" style={{
                    backgroundImage: `url("./assets/images/transaction/transaction-bg.png")`
                }}>
                    <span className="d-none">Image</span>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xl-7">
                            <div className="section-header">
                                <span className="cate">Latest Transactions</span>
                                <h2 className="title">Monthly Income Feed</h2>
                                <p>Our goal is to simplify investing so that anyone can be an investor.Withthis in mind,
                            we hand-pick the investments we offer on our platform.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tab transaction-tab d-flex flex-wrap justify-content-center">
                        <ul className="tab-menu">
                            <li className="active">
                                <div className="thumb">
                                    <i className="flaticon-wallet"></i>
                                </div>
                                <div className="content">
                                    <span className="d-block">last</span>
                                    <span className="d-block">deposits</span>
                                </div>
                            </li>
                            <li>
                                <div className="thumb">
                                    <i className="flaticon-atm"></i>
                                </div>
                                <div className="content">
                                    <span className="d-block">last</span>
                                    <span className="d-block">withdrawals</span>
                                </div>
                            </li>
                            <li>
                                <div className="thumb">
                                    <i className="flaticon-team"></i>
                                </div>
                                <div className="content">
                                    <span className="d-block">last</span>
                                    <span className="d-block">investors</span>
                                </div>
                            </li>
                        </ul>
                        <div className="tab-area">
                            <div className="tab-item active">
                                <div className="row justify-content-center mb-30-none">
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">KimHowell21</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction01.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 BTC</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">ildar25864</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction02.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 ETH</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Buha74</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction03.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 LTC</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Eduardo54</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction04.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 XRP</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Pedro33</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction05.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 USD</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Nelson35</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction06.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 XRP</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Doug9544</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction07.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 USD</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Hector 951</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction08.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 LTC</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-item">
                                <div className="row justify-content-center mb-30-none">
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Doug9544</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction07.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 USD</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Hector 951</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction08.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 LTC</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">KimHowell21</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction01.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 BTC</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">ildar25864</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction02.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 ETH</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Buha74</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction03.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 LTC</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Eduardo54</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction04.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 XRP</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Pedro33</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction05.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 USD</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Nelson35</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction06.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 XRP</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-item">
                                <div className="row justify-content-center mb-30-none">
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Buha74</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction03.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 LTC</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Eduardo54</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction04.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 XRP</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Pedro33</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction05.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 USD</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Nelson35</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction06.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 XRP</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Doug9544</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction07.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 USD</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">Hector 951</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction08.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 LTC</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">KimHowell21</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction01.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 BTC</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xl-3 col-sm-6">
                                        <div className="transaction-item">
                                            <div className="transaction-header">
                                                <h5 className="title">ildar25864</h5>
                                                <span className="date">December 24, 17:57</span>
                                            </div>
                                            <div className="transaction-thumb">
                                                <img src="./assets/images/transaction/transaction02.png" alt="transaction" />
                                            </div>
                                            <div className="transaction-footer">
                                                <span className="amount">Amount</span>
                                                <h5 className="sub-title">0.00449721 ETH</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="affiliate-programe" id="affiliate">
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


            <section className="call-section call-overlay bg_img" style={{
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


            <section className="client-section padding-bottom padding-top">
                <div className="background-map">
                    <img src="./assets/images/client/client-bg.png" alt="client" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10">
                            <div className="section-header left-style">
                                <span className="cate">TESTIMONIALS</span>
                                <h2 className="title"><span>40,000</span> HAPPY CLIENTS AROUND THE WORLD</h2>
                                <p className="mw-500">
                                    We have many happy investors invest with us .Some impresions from our Customers!
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="m--30">
                                <div className="client-slider owl-carousel owl-theme">
                                    <div className="client-item">
                                        <div className="client-content">
                                            <p>
                                                Perfect work to start on, support is awesome
                                        </p>
                                            <div className="rating">
                                                <span>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span>
                                                    <i className="fas fa-star-half-alt"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="client-thumb">
                                            <a href="#0">
                                                <img src="./assets/images/client/client01.png" alt="client" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="client-item">
                                        <div className="client-content">
                                            <p>
                                                Very easy to use, perfect for invest
                                        </p>
                                            <div className="rating">
                                                <span>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span>
                                                    <i className="fas fa-star-half-alt"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="client-thumb">
                                            <a href="#0">
                                                <img src="./assets/images/client/client02.png" alt="client" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="client-item">
                                        <div className="client-content">
                                            <p>
                                                Awesome hyipland most profitable site!
                                        </p>
                                            <div className="rating">
                                                <span>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                                <span>
                                                    <i className="fas fa-star-half-alt"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="client-thumb">
                                            <a href="#0">
                                                <img src="./assets/images/client/client03.png" alt="client" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
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
                                    <input type="text" className="form-control" placeholder="Enter Your Email Here" required />
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
                        </div>
                        <ul className="links">

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
                                <Link to={`${process.env.PUBLIC_URL}/contact`}> Privacy Policy </Link>
                            </li>   
                        </ul>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-bottom-area">
                            <div className="left">
                                <p>&copy; 2020 <a href="https://avagpstracker.com/">Avancer Software Solution</a> | All right reserved</p>
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
}

export default Home;
