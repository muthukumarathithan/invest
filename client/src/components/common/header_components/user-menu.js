import React, { Component,Fragment } from 'react'
import {Link} from 'react-router-dom'
import { logoutUser } from "../../../actions/authActions";
import { clearCurrentProfile } from "../../../actions/profileActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//images import
import man from '../../../assets/images/dashboard/man.png'
export class User_menu extends Component {
    onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
    render() {
          const { isAuthenticated, user } = this.props.auth;
        return (
            <Fragment>
                    <li className="onhover-dropdown">
                        <div className="media align-items-center">
                            <img className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" src={man} alt="header-user" />
                            <div className="dotted-animation"><span className="animate-circle"></span><span className="main-circle"></span></div>
                        </div>
                        <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                            <li><Link to={`${process.env.PUBLIC_URL}/profile`}  ><i data-feather="user"></i>Edit Profile</Link></li>
                            <li><a href="javascript:void(0)"><i data-feather="mail"></i>Inbox</a></li>
                            <li><a href="javascript:void(0)"><i data-feather="lock"></i>Lock Screen</a></li>
                            <li><a href="javascript:void(0)"><i data-feather="settings"></i>Settings</a></li>
                            <li> <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a Gravatar connecte to your email to display an image"
            />{" "}
            Logout
          </a></li>
                        </ul>
                    </li>
            </Fragment>
        )
    }
}


User_menu.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  User_menu
);

