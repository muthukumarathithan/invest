import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from 'react-redux';
import { Redirect, Link } from "react-router-dom";

function Faq(props) {
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
         backgroundImage: `url("./assets/images/about/hero-bg3.jpg")`
      }}>
            <div className="container">
                <div className="hero-content text-white">
                    <h1 className="title">faq</h1>
                    <ul className="breadcrumb">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="#0">pages</a>
                        </li>
                        <li>
                            faq
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hero-shape">
                <img className="wow slideInUp" src="./assets/images/about/hero-shape1.png" alt="about" data-wow-duration="1s" />
            </div>
        </section>
        
        <section className="faq-section padding-top padding-bottom mb-xl-5">
            <div className="ball-group-1" data-paroller-factor="-0.30" data-paroller-factor-lg="0.60"
            data-paroller-type="foreground" data-paroller-direction="horizontal">
                <img src="./assets/images/balls/ball-group7.png" alt="balls" />
            </div>
            <div className="ball-group-2 rtl" data-paroller-factor="0.30" data-paroller-factor-lg="-0.30"
            data-paroller-type="foreground" data-paroller-direction="horizontal">
                <img src="./assets/images/balls/ball-group8.png" alt="balls" />
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
                <div className="tab faq-tab">
                    <ul className="tab-menu">
                        <li>BASIC </li>
                        <li className="active">FINANCIAL</li>
                        <li>Affiliate</li>
                    </ul>
                    <div className="tab-area">
                        <div className="tab-item">
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
                        <div className="tab-item active">
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
                        <div className="tab-item">
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

export default Faq;
