import React, { Component, Fragment } from 'react'
import { ArrowLeft,ArrowRight, Sliders } from 'react-feather';
import { Link,withRouter } from 'react-router-dom';
import Slider from 'react-slick';
import stats from '../../assets/images/dashboard/stats.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { User, Unlock } from 'react-feather';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      activeShow: true,
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  clickActive = (event) => {
        document.querySelector(".nav-link").classList.remove('show');
        event.target.classList.add('show');
    }


  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push(`${process.env.PUBLIC_URL}/dashboard`);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push(`${process.env.PUBLIC_URL}/login`);
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser('register',newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false
        };
        const mystyle = {
      color: "#dc3545"
    };

    return (
             <Fragment>
                <div className="page-wrapper">
                    <div className="authentication-box">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 p-0 card-left">
                                    <div className="card bg-primary">
                                        <div className="svg-icon">
                                            <img src={stats} className="Img-fluid" />
                                        </div>
                                        <Slider className="single-item" {...settings}>
                                            <div>
                                                <div>
                                                    <h3>Welcome to Multikart</h3>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <h3>Welcome to Investy</h3>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <h3>Welcome to Investy</h3>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                                </div>
                                            </div>
                                        </Slider >
                                    </div>
                                </div>
                                <div className="col-md-7 p-0 card-right">
                                    <div className="card tab2-card">
                                        <div className="card-body">
                                           <Fragment>
                    <Tabs>
                        <TabList className="nav nav-tabs tab-coupon" >
                             <Tab className="nav-link" onClick={(e) => this.clickActive(e)}><User /><Link to={`${process.env.PUBLIC_URL}/register`}>
                                Register
                              </Link></Tab>
                        </TabList>
                        <TabPanel>
            <form className="form-horizontal auth-form" onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />

                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  info="This site uses Gravatar so if you want a profile image, use
                  a Gravatar email"
                />

                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />

                <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />

                 <div className="form-terms">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                        <label className="d-block">
                                                    <input className="checkbox_animated" id="chk-ani2" type="checkbox" />
                                                        Reminder Me <span className="pull-right"> 
                                                         <Link to={`${process.env.PUBLIC_URL}/login`}> 
                              <i className="fa fa-user-circle text-info mr-2" />Please Login Here<ArrowRight /></Link>
                                                        </span>
                                                </label>
                                    </div>
                                </div>

                <div className="form-button">
                   <button className="btn btn-primary btn-sm" type="submit">Register</button>
                </div>
                 <div className="form-footer">
                <span>Or Login up with social platforms</span>
                <ul className="social">
                <li><a style={mystyle} className="fa fa-facebook" href=""></a></li>
                <li><a style={mystyle} className="fa fa-twitter" href=""></a></li>
                <li><a style={mystyle} className="fa fa-instagram" href=""></a></li>
                <li><a style={mystyle} className="fa fa-pinterest" href=""></a></li>
                </ul>
                </div>
              </form>
               </TabPanel>
                    </Tabs>
                </Fragment>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(Register);