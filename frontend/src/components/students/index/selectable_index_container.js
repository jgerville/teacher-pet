import { connect } from "react-redux";
import { getStudentsByUser } from "../../../actions/student_actions";
import SelectableStudentIndex from "./selectable_student_index";

const mapStateToProps = ({ entities: { students } }) => ({
  students: Object.values(students),
});

const mapDispatchToProps = (dispatch) => ({
  getStudents: () => dispatch(getStudentsByUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectableStudentIndex);