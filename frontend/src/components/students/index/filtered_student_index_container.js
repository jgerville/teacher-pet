import { connect } from "react-redux"
import { withRouter } from "react-router";
import { getStudentsByUser } from "../../../actions/student_actions";
import StudentIndex from "./student_index"

const mapStateToProps = ({ entities: { students }}, ownProps) => ({
  students: Object.values(students).filter(student => (
    student.classes.some(klass => klass._id === ownProps.match.params.classId)
  )),
  enableLinks: true,
})

const mapDispatchToProps = dispatch => ({
  getStudents: () => dispatch(getStudentsByUser()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentIndex));