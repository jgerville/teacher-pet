import { connect } from "react-redux";
import ReportForm from "./report_form";
import { createReportData } from "../../actions/report_data_actions";

const mapStateToProps = (state, ownProps) => ({
  student: state.entities.students[ownProps.match.params.studentId]
})

const mapDispatchToProps = dispatch => ({
  createReportData: (reportData) => dispatch(createReportData(reportData))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportForm)