import React, { Component, Fragment} from 'react'
import Breadcrumb from '../common/breadcrumb';
import { Navigation, Box, MessageSquare, Users, Briefcase, CreditCard, ShoppingCart, Calendar } from 'react-feather';
import CountUp from 'react-countup';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import data from '../../assets/data/category';
import Datatable from '../common/datatable';

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import {getCurrentProfile,deleteAccount} from "../../actions/profileActions.js";

export class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    componentDidMount() {
    this.props.getCurrentProfile();
  }
     onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;
        console.log(user)
        const { open } = this.state;
        return (
            <Fragment>
                <Breadcrumb title="New Request" parent="Withdraw" />
                {/* <!-- Container-fluid starts--> */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Withdraw</h5>
                                </div>
                                <div className="card-body">
                                <div className="card o-hidden  widget-cards">
                                <div className="bg-secondary card-body">
                                    <div className="media static-top-widget pull-right  col-12">
                                        <div className="icons-widgets col-4">
                                            <div className="align-self-center text-center"><Box className="font-secondary" /></div>
                                        </div>
                                        <div className="media-body col-4"><span className="m-0">Withdrawable Amount</span>
                                            <h3 className="mb-0">$ <CountUp className="counter" end={985} /></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                   
                                    <div id="basicScenario" className="product-physical">
                                    <form className="needs-validation" noValidate="">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group row">
                                            <label className="col-xl-3 col-md-4"><span>*</span>Amount</label>
                                            <input className="form-control col-md-7" type="number" required="" />
                                        </div>
                                     
                                       
                                      
                                    </div>
                                </div>
                                <div className="col-4" style={{display:'flex', justifyContent:'center'}}>
                                    <button type="button" className="btn btn-primary">Withdraw</button>
                                 </div>
                            </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Container-fluid Ends--> */}
            </Fragment>
        )
    }
}

Category.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile,getCurrentProfile,deleteAccount })(
  Category
);

