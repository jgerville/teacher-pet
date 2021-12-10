import React from 'react'
import PropTypes from 'prop-types'

const ReportIndexItem = ({ report }) => {
  return (
    <div className="report-index-item">
      <h2>{report.date}</h2>
      <p>{report.body}</p>
    </div>
  )
}

ReportIndexItem.propTypes = {
  report: PropTypes.object,
}

export default ReportIndexItem
