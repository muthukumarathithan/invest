import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import {connect} from 'react-redux';
import  { Redirect,Link } from "react-router-dom";

function About(props) {
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
                                    <Link to={`${process.env.PUBLIC_URL}/login`}s className="custom-button"> SignUp </Link>
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
       

        <section className="hero-section bg_img"  style={{
         backgroundImage: `url("./assets/images/about/hero-bg.png")`
      }}>
            <div className="container">
                <div className="hero-content">
                    <h1 className="title">About US</h1>
                    <ul className="breadcrumb">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            About Us
                        </li>
                    </ul>
                </div>
            </div>
        </section>
       
        <section className="about-section padding-top padding-bottom section-bg">
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
                                    <img src="./assets/images/about/about03.png" alt="about"/>
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
       
        <section className="ceo-section padding-bottom padding-top bg_img"  style={{
         backgroundImage: `url("./assets/images/about/ceo-bg.jpg")`
      }} >
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-7 col-xl-6">
                        <div className="ceo-content">
                            <h3 className="title">Our goal is to be at the heart of the financial services industry</h3>
                            <div className="author">
                                <h6 className="subtitle"><a href="#0">Adam Phelps</a></h6>
                                <span className="info">CEO of hyipland</span>
                                <div className="sign">
                                    <img src="./assets/images/about/sign-ceo.png" alt="about" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-3">
                        <div className="ceo-thumb">
                            <img src="./assets/images/about/certificate-ceo.png" alt="about" />
                        </div>
                        <a href="#0" className="custom-button">Open Certificate</a>
                    </div>
                </div>
            </div>
        </section>
      
        <section className="mission-section padding-top padding-bottom">
            <div className="mission-shape">
                <img src="./assets/images/mission/mission-shape.png" alt="about" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="section-header">
                            <span className="cate">Our Mission to help our user</span>
                            <h2 className="title">
                                To maximize Money
                            </h2>
                            <p className="mw-100">
                                We are worldwide investment company who are committed to the principle of revenue maximization and reduction of the financial risks at investing.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 rtl">
                        <div className="mission--thumb">
                            <img className="wow slideInLeft" src="./assets/images/mission/mission.png" alt="about" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="mission-wrapper owl-theme owl-carousel">
                            <div className="mission-item">
                                <div className="mission-thumb">
                                    <img src="./assets/images/mission/1.png" alt="mission" />
                                </div>
                                <div className="mission-content">
                                    <h5 className="title">Low invest</h5>
                                    <p>
                                        Praesent sagittis nibh vehicula diam tesque 
                                    </p>
                                    <a href="#0">Learn More <i className="flaticon-right-arrow"></i></a>
                                </div>
                            </div>
                            <div className="mission-item">
                                <div className="mission-thumb">
                                    <img src="./assets/images/mission/2.png" alt="mission" />
                                </div>
                                <div className="mission-content">
                                    <h5 className="title">One tap invest</h5>
                                    <p>
                                        Praesent sagittis nibh vehicula diam tesque 
                                    </p>
                                    <a href="#0">Learn More <i className="flaticon-right-arrow"></i></a>
                                </div>
                            </div>
                            <div className="mission-item">
                                <div className="mission-thumb">
                                    <img src="./assets/images/mission/3.png" alt="mission" />
                                </div>
                                <div className="mission-content">
                                    <h5 className="title">Max. returns</h5>
                                    <p>
                                        Praesent sagittis nibh vehicula diam tesque 
                                    </p>
                                    <a href="#0">Learn More <i className="flaticon-right-arrow"></i></a>
                                </div>
                            </div>
                            <div className="mission-item">
                                <div className="mission-thumb">
                                    <img src="./assets/images/mission/4.png" alt="mission" />
                                </div>
                                <div className="mission-content">
                                    <h5 className="title">Transparency</h5>
                                    <p>
                                        Praesent sagittis nibh vehicula diam tesque 
                                    </p>
                                    <a href="#0">Learn More <i className="flaticon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        <section className="investor-section padding-bottom padding-top pt-max-lg-0">
            <div className="ball-group-1 ball-group-4" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60" data-paroller-type="foreground" data-paroller-direction="horizontal">
                <img src="./assets/images/balls/ball-group4.png" alt="balls"/>
            </div>
            <div className="ball-group-2 ball-group-3" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30" data-paroller-type="foreground" data-paroller-direction="horizontal">
                <img src="./assets/images/balls/ball-group3.png" alt="balls" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-xl-6">
                        <div className="section-header">
                            <span className="cate">TRANDING PEOPLE</span>
                            <h2 className="title">
                                Our Top Investors
                            </h2>
                            <p>
                                A look at the top ten investors of all time and the strategies they used to make their money.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel owl-theme investor-slider">
                    <div className="investor-item">
                        <div className="investor-thumb">
                            <img src="./assets/images/investor/investor1.png" alt="investor"/>
                        </div>
                        <div className="investor-content">
                            <h5 className="title"><a href="#0">Sean Obrien</a></h5>
                            <h3 className="amount">$50,000.00</h3>
                        </div>
                    </div>
                    <div className="investor-item">
                        <div className="investor-thumb">
                            <img src="./assets/images/investor/investor2.png" alt="investor" />
                        </div>
                        <div className="investor-content">
                            <h5 className="title"><a href="#0">Sylvia Fox</a></h5>
                            <h3 className="amount">$50,000.00</h3>
                        </div>
                    </div>
                    <div className="investor-item">
                        <div className="investor-thumb">
                            <img src="./assets/images/investor/investor3.png" alt="investor"/>
                        </div>
                        <div className="investor-content">
                            <h5 className="title"><a href="#0">Dexter Nichols</a></h5>
                            <h3 className="amount">$50,000.00</h3>
                        </div>
                    </div>
                    <div className="investor-item">
                        <div className="investor-thumb">
                            <img src="./assets/images/investor/investor4.png" alt="investor" />
                        </div>
                        <div className="investor-content">
                            <h5 className="title"><a href="#0">Tami Oliver</a></h5>
                            <h3 className="amount">$50,000.00</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
       
        <section className="call-section call-overlay bg_img" style={{
         backgroundImage: `url("./assets/images/call/call-bg.jpg")`
      }} >
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
                            <input type="text" className="form-control" placeholder="Enter Your Email Here" />
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

export default About;


