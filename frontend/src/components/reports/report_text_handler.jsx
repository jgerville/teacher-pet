import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import DisplayReport from './display_report';
import EditReport from './edit_report';
import "../../styles/report-text.css"
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createReport, updateReport } from '../../actions/report_actions';
import { showReportData } from '../../actions/report_data_actions';

const ReportTextHandler = ({ reportData, reportDataId, createReport, history }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  // const [pronouns, setPronouns] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => setBody(e.target.value)

  const startEditing = () => setIsEditing(true);
  const stopEditing = () => setIsEditing(false);

  let pronouns = "";

  const convertToText = (dataObject) => {
    let nextObject = Object.assign({}, dataObject);
    pronouns = (nextObject["genderPronouns"]);
    delete nextObject["genderPronouns"];
    delete nextObject["reportDataId"];
    delete nextObject["studentId"];
    let textArray = Object.values(nextObject);
    return textArray.join(" ");
    // insert util function that replaces placeholders here
    // e.g. replacePlaceholders(textArray.join(" "))
  }
  
  const [body, setBody] = useState(convertToText(reportData[reportDataId]));

  const handleSubmit = async (e) => {
    e.preventDefault();
    // let editedReport = Object.assign({}, report);
    let editedReport = {}
    let studentId = reportData[reportDataId]["studentId"];
    editedReport.body = body;
    editedReport.reportdataId = reportDataId
    try {
      setError("");
      await createReport(studentId, editedReport);
      history.push(`/students/${studentId}`);
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
  reportData: PropTypes.object.isRequired,
  reportDataId: PropTypes.string.isRequired,
  createReport: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}

const mapStateToProps = ({ entities: { reportData }, entities, }, ownProps) => ({
  reportDataId: ownProps.match.params.reportDataId,
  reportData,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // getReport: () => dispatch(showReportData(ownProps.match.params.reportDataId)),
  createReport: (studentId, report) => dispatch(createReport(studentId, report)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReportTextHandler));
