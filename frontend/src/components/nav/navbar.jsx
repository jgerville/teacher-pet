import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/navbar.css'

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
          <button class="nav-button" onClick={() => this.props.openModal('signup')}>Sign up</button>
          <button class="nav-button" onClick={() => this.props.openModal('login')}>Login</button>
          {/* <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link> */}
        </div>
      );
    }
  }

  render() {
    return (
      <div class="navbar navbar-expand-lg fixed-top">
        <h2 class="nav-header">Teacher's Pet</h2>
        <div >{this.getLinks()}</div>
      </div>
    );
  }
}

export default NavBar;