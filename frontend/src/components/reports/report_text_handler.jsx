import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DisplayReport from './display_report';
import EditReport from './edit_report';
import "../../styles/report-text.css"
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createReport } from '../../actions/report_actions';
import { verbReplacement } from '../../util/report_string_util';

const ReportTextHandler = ({
  reportData,
  reportDataId,
  createReport,
  history,
  students,
  klass,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState("Copy to clipboard");
  const [disabled, setDisabled] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => setBody(e.target.value);

  const startEditing = () => setIsEditing(true);
  const stopEditing = () => setIsEditing(false);

  let pronouns = "";

  const convertToText = (dataObject) => {
    let nextObject = Object.assign({}, dataObject);
    pronouns = nextObject["genderPronouns"];
    delete nextObject["genderPronouns"];
    delete nextObject["reportDataId"];
    delete nextObject["studentId"];

    let notCategories = [
      "genderPronouns",
      "overallScore",
      "listensAttentively",
      "helpsOthers",
      "participatesOften",
      "asksQuestions",
      "goodAttendance",
      "onTime",
      "polite",
      "notDisruptive",
      "homeworkCompletion",
    ];
    let studentId = reportData[reportDataId]["studentId"];
    let fName = students[studentId].firstName;
    // let lName = students[studentId].lastName;
    let className = klass.name;
    let classSubject = klass.subject;

    let textArray = Object.values(nextObject);
    let objectKeys = Object.keys(nextObject);
    let bodyString = "";
    let currString;
    for (let i = 0; i < objectKeys.length; i++) {
      if (!notCategories.includes(objectKeys[i])) {
        currString = textArray[i].replaceAll("%category%", objectKeys[i]);
        bodyString += currString + " ";
      } else {
        bodyString += textArray[i] + " ";
      }
    }

    let replacedBody = verbReplacement(
      pronouns,
      fName,
      className,
      classSubject,
      bodyString
    );
    return replacedBody;
  };

  const [body, setBody] = useState(convertToText(reportData[reportDataId]));

  const copyToClipboard = async (e) => {
    setDisabled("disabled");
    await navigator.clipboard.writeText(body);
    setCopyButtonText("Copied!");
    setTimeout(() => {
      setCopyButtonText("Copy to clipboard");
      setDisabled("");
    }, 1500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let editedReport = {};
    let studentId = reportData[reportDataId]["studentId"];
    editedReport.body = body;
    editedReport.reportdataId = reportDataId;
    try {
      setError("");
      await createReport(studentId, editedReport);
      history.push(`/students/${studentId}`);
    } catch (error) {
      console.log(error);
      setError("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="report-text-page">
      {isEditing ? (
        <EditReport
          body={body}
          close={stopEditing}
          handleChange={handleChange}
        />
      ) : (
        <>
          <DisplayReport body={body} />
          {error && <p>{error}</p>}
          <div className="button-holder">
            <button className={`btn ${disabled}`} onClick={copyToClipboard}>
              {copyButtonText}
            </button>
            <button className="btn" onClick={startEditing}>
              Edit
            </button>
            <button className="btn" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
};

ReportTextHandler.propTypes = {
  reportData: PropTypes.object.isRequired,
  reportDataId: PropTypes.string.isRequired,
  createReport: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  klass: PropTypes.object.isRequired,
  students: PropTypes.object.isRequired,
}

const mapStateToProps = ({ entities: { reportData, students, classes }, entities, }, ownProps) => ({
  reportDataId: ownProps.match.params.reportDataId,
  reportData,
  students,
  klass: Object.values(classes)[0],
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // getReport: () => dispatch(showReportData(ownProps.match.params.reportDataId)),
  createReport: (studentId, report) => dispatch(createReport(studentId, report)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReportTextHandler));
