import React from 'react'
import PropTypes from 'prop-types'
import StudentIndexContainer from '../../index/student_index_container'

const AddStudentsForm = (props) => {

  
  return (
    <div className="student-form-container">
      <h2>Select the students you want to add</h2>
      <StudentIndexContainer />
    </div>
  )
}

AddStudentsForm.propTypes = {

}

export default AddStudentsForm
