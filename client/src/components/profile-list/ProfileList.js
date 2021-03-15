import React, { Component,Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb';
import { connect } from "react-redux";
import { withRouter,Link} from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup.js";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup.js";
import InputGroup from "../common/InputGroup.js";
import SelectListGroup from "../common/SelectListGroup.js";
import {getCurrentProfile,deleteAccount} from "../../actions/profileActions.js";
import Spinner from "../common/Spinner.js";
import ProfileActions from "./ProfileActions.js";

class ProfileList extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { profile, loading } = this.props.profile;
    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <ProfileActions />
           <div style={{ marginBottom: "60px",width:"10px"}} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-secondary"
            >
              Delete My Account 
            </button>
          </div>
        );
      } else {
        dashboardContent = (
          <div>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-sm btn-info">
              Create Profile
            </Link>
          </div>
        );
      }
    }
    return (
       <Fragment>
                <Breadcrumb title="Create Profile" parent="Profile" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-header">
                                     {dashboardContent}
                                </div>
                                <div className="card-body">
                                  <div className="crate-profile">
                                     <div className="dashboard">
                                    <div className="container">
                                    <div className="row">
                                      <div className="col-md-12">  
                                      </div>
                                    </div>
                                  </div>
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


  ProfileList.propTypes = {
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount })(
  withRouter(ProfileList)
);
