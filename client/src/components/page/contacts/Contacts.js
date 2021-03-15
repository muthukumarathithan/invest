import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from 'react-redux';
import { Redirect, Link } from "react-router-dom";

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      message: this.state.message
    };
    console.log(newUser);
    this.props.createContact(newUser);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="main--body">
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


        <section className="bg_img hero-section-2 left-bottom-lg-max" style={{
          backgroundImage: `url("./assets/images/about/hero-bg5.png")`
        }}>
          <div className="container">
            <div className="hero-content text-white">
              <h1 className="title">Contact</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  Contact
                        </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-section padding-bottom padding-top">
          <div className="container">
            <div className="contact-wrapper padding-top">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-xl-4 offset-xl-1">
                  <div className="contact-header">
                    <h2 className="title">Get in touch</h2>
                    <p>Ready to make life easier?</p>
                  </div>
                  <div className="contact-content">
                    <h3 className="title">Have questions?</h3>
                    <p>
                      Have questions about payments or price plans? We have answers!
                                </p>
                    <a href="faq.html">Read F.A.Q <i className="flaticon-right-arrow"></i></a>
                  </div>
                </div>
                <div className="col-lg-5 offset-xl-1">
                  <form className="contact-form" noValidate onSubmit={this.onSubmit}>

                    <div className="form-group">
                      <label for="name">First name</label>
                      <input type="text" placeholder="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.onChange}
                        error={errors.firstName} />
                    </div>

                    <div className="form-group">
                      <label for="surename">Last name</label>
                      <input type="text" placeholder="Last Name"
                        name="lastName"
                        type="text"
                        value={this.state.lastName}
                        onChange={this.onChange}
                        error={errors.lastName} />
                    </div>
                    <div className="form-group">
                      <label for="email">Email address</label>
                      <input type="text" placeholder="Email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={errors.email} />
                    </div>
                    <div className="form-group">
                      <label for="message">How can we help</label>
                      <input type="text" placeholder="Message"
                        name="message"
                        type="text"
                        value={this.state.message}
                        onChange={this.onChange}
                        error={errors.message} />
                    </div>
                    <div className="form-group">
                      <input type="submit" value="Send Message" />
                    </div>
                  </form>
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
    )
  }
}

export default Contacts;