import React from 'react'
import PropTypes from 'prop-types'

const StudentFormHeader = ({ addMany, addOne }) => {
  return (
    <div className="student-form-header">
      <div className="add-many-tab">
        <span>Add many</span>
      </div>
      <div className="add-one-tab">
        <span>Add one</span>
      </div>
    </div>
  )
}

StudentFormHeader.propTypes = {

}

export default StudentFormHeader
