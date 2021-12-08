import { connect } from "react-redux"
import { createStudents } from "../../../../actions/student_actions"
import AddManyForm from "./add_many_form"

const mapStateToProps = ({ entities: { students }}) => ({
  students,
})

const mapDispatchToProps = (dispatch) => ({
  createStudents: () => dispatch(createStudents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddManyForm)