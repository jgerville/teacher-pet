import { connect } from "react-redux";
import { createClass } from "../../actions/class_actions";
import ClassForm from "./class_form";

const mapDispatchToProps = (dispatch) => ({
  createClass: (klass) => dispatch(createClass(klass)),
})

export default connect(null, mapDispatchToProps)(ClassForm)