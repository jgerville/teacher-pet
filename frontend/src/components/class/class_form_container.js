import { connect } from "react-redux";
import { createClass } from "../../actions/class_actions";
import ClassForm from "./class_form";

const mapStateToProps = ({ errors: { classes } }) => ({
  errors: classes
})

const mapDispatchToProps = (dispatch) => ({
  createClass: (klass) => dispatch(createClass(klass)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ClassForm);