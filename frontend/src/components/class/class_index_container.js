import { getClassesForOneTeacher } from "../../actions/class_actions"
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = ({ entities: { users, classes } }, ownProps) => ({
  classes: Object.keys(classes).map(id => classes[id]),
})

// line 9: maybe the param will be named differently
const mapDispatchToProps = (dispatch, ownProps) => ({
  getClasses: () => dispatch(getClassesForOneTeacher(ownProps.match.params.userId)),
})

// still need to import withRouter and connect once we have installed them
export default withRouter(connect(mapStateToProps, mapDispatchToProps)());