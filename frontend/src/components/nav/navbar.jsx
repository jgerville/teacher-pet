import React from 'react';
import { Link } from 'react-router-dom'
import {ReactComponent as NavLogo} from "../../images/logo.svg" 
import '../../styles/navbar.css'
import {
  BsPersonCircle,
  BsArrowUpRightCircle,
  // BsBoxArrowRight,
  BsDoorOpen,
} from "react-icons/bs";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.state = {isNavCollapsed: true,};
    this.handleNavCollapse = this.handleNavCollapse.bind(this)
  }

  handleNavCollapse() {
    this.setState(({isNavCollapsed}) => ({isNavCollapsed: !isNavCollapsed}));
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <button className="nav-button nav-link" onClick={this.logoutUser}><a className="trans1" href="#"><BsDoorOpen className="trans2" id="logout-icon"/> Logout</a></button>
          </li>
          <li className="nav-item">
            <button className="nav-button nav-link"><Link className='meet-team-link trans1' to="/about"><BsArrowUpRightCircle className='team-icon trans2'/> Meet the Team</Link></button>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <button className="nav-button nav-link" onClick={() => this.props.openModal('login')}><a className="trans1" href="#"><BsPersonCircle className="trans2" id="sign-in-icon"/> Sign in</a></button>
          </li>
          <li className="nav-item">
            <button className="nav-button nav-link"><Link className='meet-team-link trans1' to="/about" >< BsArrowUpRightCircle className='team-icon trans2'/> Meet the Team</Link></button>
          </li>
        </ul>
      );
    }
  }

  // render() {
  //   return (
  //     <div className="navbar navbar-expand-lg fixed-top">
  //       <h2 className="nav-header">
  //         <Link to="/">
  //           <img id="nav-logo" alt="nav-logo" src={logo} />
  //         </Link>
  //           <span id="nav-title">Teacher's Pet</span>
  //       </h2>
        
  //       <div>
  //         <div className="nav-toggler">
  //           <i className="fas fa-bars" />
  //         </div>
  //         {this.getLinks()}
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link to="/">
              <NavLogo />
              Teacher's Pet
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!this.state.isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={this.handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${this.state.isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            {/* <ul className="navbar-nav ms-auto">              
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul> */}
            {this.getLinks()}
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;