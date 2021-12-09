import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/logo_blue.png'
import '../../styles/navbar.css'
import {SocialIcon } from "react-social-icons"

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <button className="nav-button" onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="nav-button-container">
          {/* <button class="nav-button" onClick={() => this.props.openModal('signup')}>Sign up</button> */}
          {/* <SocialIcon className='favicon' url="https://github.com/cjc473" bgColor="#D8D9DB" /> */}
          <button className="nav-button" onClick={() => this.props.openModal('login')}>Sign in</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar navbar-expand-lg fixed-top">
        <h2 className="nav-header">
          <Link to="/">
            <img id="nav-logo" src={logo} />
          </Link>
            <span id="nav-title">Teacher's Pet</span>
        </h2>
        
        <div >{this.getLinks()}</div>
      </div>
    );
  }
}

export default NavBar;