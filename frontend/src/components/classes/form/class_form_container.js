import { connect } from "react-redux";
import { createClass } from "../../../actions/class_actions";
import { closeModal } from "../../../actions/modal_actions";
import ClassForm from "./class_form";

const mapStateToProps = ({ errors: { classes } }) => ({
  errors: classes,
})

const mapDispatchToProps = (dispatch) => ({
  createClass: (klass) => dispatch(createClass(klass)),
  close: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassForm);