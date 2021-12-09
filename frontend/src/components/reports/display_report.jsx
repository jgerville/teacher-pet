import React from 'react'
import PropTypes from 'prop-types'

const DisplayReport = ({ body }) => {
  return (
    <div>
      <p>{body}</p>
    </div>
  )
}

DisplayReport.propTypes = {
  body: PropTypes.string.isRequired,
}

export default DisplayReport;