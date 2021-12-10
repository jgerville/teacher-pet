import React from 'react'
import PropTypes from 'prop-types'
import DotButtons from '../classes/show/dot_buttons';

const ReportIndexItem = ({ report }) => {

  const formatTime = (dateTime) => {
    const date = new Date(dateTime);
    const local = date.toString();
    const splitUp = local.split(" ").slice(0, 4);
    const prettyTime = `${splitUp[0]}, ${splitUp[1]} ${splitUp[2]}, ${splitUp[3]}`
    return prettyTime;
  }
  
  return (
    <div className="report-index-item">
      <div className="report-index-header">
        <h2>{formatTime(report.date)}</h2>
        <DotButtons entity={report} kind="report" />
      </div>
      <p>{report.body}</p>
    </div>
  )
}

ReportIndexItem.propTypes = {
  report: PropTypes.object,
}

export default ReportIndexItem
