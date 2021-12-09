import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import DisplayReport from './display_report';
import EditReport from './edit_report';
import "../../styles/report-text.css"
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { showReport, updateReport } from '../../actions/report_actions';

const ReportTextHandler = ({ report, reportId, edit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [body, setBody] = useState(report);
  const [error, setError] = useState("");

  const handleChange = (e) => setBody(e.target.value)

  const startEditing = () => setIsEditing(true);
  const stopEditing = () => setIsEditing(false);

  // useEffect(() => {

  // }, [reportId])

  const handleSubmit = async (e) => {
    e.preventDefault();
    let editedReport = Object.assign({}, report);
    editedReport.body = body;
    try {
      setError("");
      await edit(editedReport);
    } catch (error) {
      setError("Something went wrong. Please try again!")
    }
  }
  
  return (
    <div className="report-text-page">
      {isEditing ? (
        <EditReport body={body} close={stopEditing} handleChange={handleChange} />
      ) : (
        <>
          <DisplayReport body={body} />
          <div className="button-holder">
            <button className="btn" onClick={startEditing}>Edit</button>
            <button className="btn" onClick={handleSubmit}>Save</button>
          </div>
        </>
      )}
    </div>
  )
}

ReportTextHandler.propTypes = {
  report: PropTypes.object.isRequired,
  reportId: PropTypes.string.isRequired,
  edit: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  reportId: ownProps.match.params.reportId,
  report: "Oh hey here's a sample",
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  edit: (report) => dispatch(updateReport(report)),
  getReport: () => dispatch(showReport(ownProps.match.params.reportId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReportTextHandler));
