import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import DisplayReport from './display_report';
import EditReport from './edit_report';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const ReportTextHandler = ({ report, reportId, edit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => setBody(e.target.value)

  const startEditing = () => setIsEditing(true);
  const stopEditing = () => setIsEditing(false);

  useEffect(() => {

  }, )

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
    <div>
      {isEditing ? (
        <EditReport body={body} handleChange={handleChange} />
      ) : (
        <>
          <DisplayReport body={body} />
          <div className="button-holder">
            <button onClick={startEditing}>Edit</button>
            <button onClick={handleSubmit}>Save</button>
          </div>
        </>
      )}
    </div>
  )
}

ReportTextHandler.propTypes = {
  report: PropTypes.string.isRequired,
  reportId: PropTypes.string.isRequired,
  edit: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  reportId: ownProps.match.params.reportId,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  edit: (report) => dispatch(updateReport(report)),
})

export default withRouter(connect(null, mapDispatchToProps)(ReportTextHandler));
