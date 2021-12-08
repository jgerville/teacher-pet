import { connect } from "react-redux"
import { getStudentsByUser } from "../../../actions/student_actions";
import StudentIndex from "./student_index"

const mapStateToProps = ({ entities: { students }}) => ({
  students: Object.keys(students).map(id => students[id]),
})

const mapDispatchToProps = dispatch => ({
  getStudents: () => dispatch(getStudentsByUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentIndex);