import { connect } from "react-redux";
import ReportDataForm from "./report_data_form";
import { withRouter } from "react-router-dom";
import { createReportData } from "../../actions/report_data_actions";
import { openModal } from "../../actions/modal_actions";


const mapStateToProps = (state, ownProps) => ({
  userId: state.session.user.id,
  studentId: ownProps.match.params.studentId,
  modal: state.ui.modal
})

const mapDispatchToProps = dispatch => ({
  createReportData: (reportData) => dispatch(createReportData(reportData)),
  openModal: () => dispatch(openModal('instructions'))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReportDataForm));
