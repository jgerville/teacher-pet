import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';



const mapStateToProps = ({errors}) => ({
  errors: errors.session,
  formType: 'login'
})

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user)),
  otherForm: (
    <button className="modal-switch" onClick={() => dispatch(openModal('signup'))}>
      Create an account.
    </button>
  ),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);