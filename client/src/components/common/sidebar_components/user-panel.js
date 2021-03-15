import React, { Component } from 'react'
import man from '../../../assets/images/dashboard/man.png'
import { logoutUser } from "../../../actions/authActions";
import { clearCurrentProfile } from "../../../actions/profileActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class User_panel extends Component {
    render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
                  <div className="sidebar-user text-center">
                    <div><img className="img-60 rounded-circle lazyloaded blur-up" src={man} alt="#" />
                    </div>
                    <h6 className="mt-3 f-14">{user.name}</h6>
                    <p>general manager.</p>
                </div>
                
        );
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
      </ul>
    );
        return (
            <div>
            {isAuthenticated ? authLinks : guestLinks}
            </div>
        )
    }
}

User_panel.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  User_panel
);

