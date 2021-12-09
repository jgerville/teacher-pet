import { connect } from "react-redux";
import ReportForm from "./report_form";

const mapStateToProps = (state, ownProps) => ({
  student: state.entities.students[ownProps.match.params.studentId]
})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportForm)