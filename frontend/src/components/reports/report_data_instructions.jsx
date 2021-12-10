import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import '../../styles/modal.css'

const ReportDataInstructions = ({close}) => {
  return (
    <div className="modal-background" onClick={close} >
      <div className="modal-child">
        <i className="fas fa-times" onClick={close} />
        <div className="instructions-container">
          <h4 className="instructions-header">Getting Started</h4>
          <p className="instructions-body">Select from the options below to draft a new report. To help us compose your review, only pronouns and overall performance are required. Fill out other fields as applicable. For ratings covering a specific subject or assignment, enter up to six items in the custom category fields below.</p>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(closeModal())
})

export default connect(null, mapDispatchToProps)(ReportDataInstructions)