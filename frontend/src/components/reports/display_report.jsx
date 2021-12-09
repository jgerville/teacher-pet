import React from 'react'
import PropTypes from 'prop-types'

const DisplayReport = ({ body }) => {
  return (
    <>
      <h1>Your Report</h1>
      <div className="report-display">
        <p>{body}</p>
      </div>
    </>
  )
}

DisplayReport.propTypes = {
  body: PropTypes.string.isRequired,
}

export default DisplayReport;