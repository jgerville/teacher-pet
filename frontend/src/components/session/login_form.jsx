import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: "disabled",
      errors: {},
      incompleteMessage: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.closeModal = this.props.closeModal.bind(this);
    this.showMessageIfDisabled = this.showMessageIfDisabled.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/classes'); //need to update to class list
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value}, () => {
        if (this.state.email && this.state.password) {
          this.setState({
            disabled: "",
          })
        } else {
          this.setState({
            disabled: "disabled",
          })
        }
      })
    }
  }

  componentDidMount() {
    this.props.removeSessionErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ incompleteMessage: "" });
    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user).then((res) => {
      if (this.props.isAuthenticated) {
        this.closeModal();
        this.props.history.push("/classes")
      }
    })
  }

  loginDemoUser(e) {
    e.preventDefault();
    const demoUser = { email: "chris@chris.com", password: "password123" }
    this.props.login(demoUser).then(() => {
      this.closeModal();
      this.props.history.push("/classes")
    })
  }

  showMessageIfDisabled(e) {
    if (this.state.disabled) {
      this.setState({
        incompleteMessage: "Please fill out each field to sign up."
      })
    }
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form">
        <form onSubmit={this.handleSubmit}>
          <div>
            <h2>Please sign in</h2>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <br />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <br />
            <br />
            {this.renderErrors()}
            {this.state.incompleteMessage && <span>{this.state.incompleteMessage}</span>}
            <div className="submit-container" onClick={this.showMessageIfDisabled}>
              <input className={`session-submit btn ${this.state.disabled}`} type="submit" value="Submit" />
            </div>

          </div>
        </form>

        <form onSubmit={this.loginDemoUser}>
          <div className="session-form">
            <input className="session-submit" type="submit" value="Demo Login" />
          </div>
        </form>
        <div className="modal-switch-container">
          <p>New to Teacher's Pet?{this.props.otherForm}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);