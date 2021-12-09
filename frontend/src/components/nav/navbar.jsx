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
          <button class="nav-button" onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div class="nav-button-container">
          {/* <button class="nav-button" onClick={() => this.props.openModal('signup')}>Sign up</button> */}
          {/* <SocialIcon className='favicon' url="https://github.com/cjc473" bgColor="#D8D9DB" /> */}
          <button class="nav-button" onClick={() => this.props.openModal('login')}>Sign in</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div class="navbar navbar-expand-lg fixed-top">
          {/* <Link to="/"> */}
        <h2 class="nav-header">
            <img id="nav-logo" src={logo} />
            <h3 id="nav-title">Teacher's Pet</h3>
        </h2>
          {/* </Link> */}
        
        <div >{this.getLinks()}</div>
      </div>
    );
  }
}

export default NavBar;