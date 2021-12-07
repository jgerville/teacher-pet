import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({errors, session}) => ({
  signedIn: session.isSignedIn,
  errors: errors.session,
  formType: 'signup'
});

const mapDispatchToProps = (dispatch) => ({
  signup: user => dispatch(signup(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('login'))}>
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);