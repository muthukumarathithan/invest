import React, { Component, Fragment} from 'react'
import Breadcrumb from '../common/breadcrumb';
import Modal from 'react-responsive-modal';
import DatePicker from "react-datepicker";
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
                <Breadcrumb title="New Investment" parent="Investment" />
                {/* <!-- Container-fluid starts--> */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Investments</h5>
                                </div>
                                <div className="card-body">
                                   
                                    <div id="basicScenario" className="product-physical">
                                    <form className="needs-validation" noValidate="">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group row">
                                            <label className="col-xl-3 col-md-4"><span>*</span>Amount</label>
                                            <input className="form-control col-md-7" type="number" required="" />
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-xl-3 col-md-4">Investment Plan</label>
                                            <select className="custom-select col-md-7" required="">
                                                <option value="">--Select--</option>
                                                <option value="1">Standard (9% Monthly)</option>
                                                <option value="2">Super (15%vMonthly)</option>
                                            </select>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-xl-3 col-md-4">Investment Term</label>
                                            <select className="custom-select col-md-7" required="">
                                                <option value="">--Select--</option>
                                                <option value="1">3 Months</option>
                                                <option value="2">6 Months</option>
                                            </select>
                                        </div>
                                      
                                    </div>
                                </div>
                                <div className="btn-popup pull-right">
                                    
                                    <button type="button" className="btn btn-primary">Make Investment</button>
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

