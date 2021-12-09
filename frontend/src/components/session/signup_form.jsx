import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      disabled: "disabled",
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.closeModal = this.props.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({ errors: nextProps.errors })
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value}, () => {
        if (this.state.firstName && this.state.lastName && this.state.email && this.state.password && this.state.password2) {
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentDidMount() {
    this.props.removeSessionErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history).then((res) => {
      if (res.type !== "RECEIVE_SESSION_ERRORS") {
        this.props.history.push("/classes")
        this.closeModal();
      }
    })
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
            <h2>Create an account</h2>
            <br />
            <input type="text"
              value={this.state.firstName}
              onChange={this.update('firstName')}
              placeholder="First Name"
              required
            />
            <br />
            <input type="text"
              value={this.state.lastName}
              onChange={this.update('lastName')}
              placeholder="Last Name"
              required
            />
            <br />
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
              required
            />
            <br />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
              required
            />
            <br />
            <input type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
              required
            />
            {this.renderErrors()}
            <br />
            <input className={`session-submit btn ${this.state.disabled}`} type="submit" value="Submit" />

          </div>
          <div className="modal-switch-container">
            <p>Already have an account?{this.props.otherForm}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);