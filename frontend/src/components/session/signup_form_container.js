import { connect } from 'react-redux';
import { signup, removeSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({errors, session}) => ({
  signedIn: session.isSignedIn,
  errors: errors.session,
  formType: 'signup'
});

const mapDispatchToProps = (dispatch) => ({
  signup: user => dispatch(signup(user)),
  removeSessionErrors: () => dispatch(removeSessionErrors()),
  otherForm: (
    <button className="modal-switch" onClick={() => dispatch(openModal('login'))}>
      Sign in.
    </button>
  ),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);