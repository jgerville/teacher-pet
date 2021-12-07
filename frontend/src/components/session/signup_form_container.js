import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({errors, session}) => ({
  signedIn: session.isSignedIn,
  errors: errors.session,
  formType: 'signup'
});

const mapDispatchToProps = (dispatch) => ({
  signup: user => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);