import { connect } from "react-redux";
import SelectableStudentIndex from "./selectable_student_index";

const mapStateToProps = ({ entities: { students } }) => ({
  students,
});

const mapDispatchToProps = (dispatch) => ({
  getStudents: () => dispatch(getStudentsByUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectableStudentIndex);