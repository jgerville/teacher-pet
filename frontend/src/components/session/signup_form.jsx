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
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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

    this.props.signup(user, this.props.history).then(() => {
      this.closeModal();
      this.props.history.push("/classes")
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
            />
            <br />
            <input type="text"
              value={this.state.lastName}
              onChange={this.update('lastName')}
              placeholder="Last Name"
            />
            <br />
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
            <input type="password"
              value={this.state.password2}
              onChange={this.update('password2')}
              placeholder="Confirm Password"
            />
            {this.renderErrors()}
            <br />
            <input className="session-submit" type="submit" value="Submit" />

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