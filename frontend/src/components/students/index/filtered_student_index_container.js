import { connect } from "react-redux"
import { withRouter } from "react-router";
import { getStudentsByUser } from "../../../actions/student_actions";
import StudentIndex from "./student_index"

const mapStateToProps = ({ entities: { students, classes }}, ownProps) => ({
  students: Object.values(students).filter(student => (
    student.classes.some(classId => classId === ownProps.match.params.classId)
  )),
  classes,
  enableLinks: true,
})

const mapDispatchToProps = dispatch => ({
  getStudents: () => dispatch(getStudentsByUser()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentIndex));