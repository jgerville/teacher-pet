import React from 'react';
import '../../styles/main-page.css'

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.loginDemoUser = this.loginDemoUser.bind(this)
  }
  
  loginDemoUser() {
    const demoUser = { email: "chris@chris.com", password: "password123" }
    this.props.login(demoUser).then(() => {
      this.props.history.push("/classes")
    })
  }

  render() {
    return (
      <div className="splash">
        <header className="header">
          <div className="overlay">
            <div className="container-fluid" id="splash-welcome">Welcome to Teacher's Pet</div>
            <div className="container-fluid" id="splash-desc">A digital aide for composing student evaluations.</div>
            <div className="container-fluid" id="splash-buttons">
              <button className="nav-button" id="splash-signup" onClick={() => this.props.openModal('signup')}>Create Account</button>
              <button className="nav-button" id="splash-demo" onClick={() => this.loginDemoUser()}>Demo Login</button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default MainPage;