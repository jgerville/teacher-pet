import { connect } from "react-redux"
import { createStudents } from "../../../../actions/student_actions"
import AddManyForm from "./add_many_form"
import { closeModal } from "../../../../actions/modal_actions"

const mapStateToProps = ({ entities: { students }}) => ({
  students,
})

const mapDispatchToProps = (dispatch) => ({
  createStudents: () => dispatch(createStudents()),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddManyForm)