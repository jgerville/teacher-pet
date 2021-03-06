import { getClassesForOneTeacher } from "../../../actions/class_actions"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ClassIndex from "./class_index";

const mapStateToProps = ({ entities: { classes } }, ownProps) => ({
  classes: Object.values(classes),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getClasses: () => dispatch(getClassesForOneTeacher()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClassIndex));