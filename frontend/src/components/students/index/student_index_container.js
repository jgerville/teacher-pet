import { connect } from "react-redux"
import { getStudentsByUser } from "../../../actions/student_actions";
import { sortAlphabetically } from "../../../util/array_util";
import StudentIndex from "./student_index"

const mapStateToProps = ({ entities: { students }}) => ({
  students: sortAlphabetically(Object.values(students), "lastName"),
})

const mapDispatchToProps = dispatch => ({
  getStudents: () => dispatch(getStudentsByUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentIndex);