import React from 'react';
import '../../styles/main-page.css'

class MainPage extends React.Component {

  render() {
    return (
      <div className="splash">
        <header className="header">
          <div className="overlay">
            <div id="splash-welcome">Welcome to Teacher's Pet</div>
            <div id="splash-desc">A digital aide for composing student evaluations.</div>
            <div>
              <button className="nav-button" id="splash-signup" onClick={() => this.props.openModal('signup')}>Create Account</button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default MainPage;