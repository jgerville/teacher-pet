import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StudentIndexContainer from '../../index/student_index_container'

const AddStudentsForm = (props) => {
  const [studentIds, setStudentIds] = useState({});
  const addOrRemoveStudent = (studentId) => {
    setStudentIds(oldIds => {
      const nextObject = Object.assign({}, oldIds);
      if (Object.keys(oldIds).includes(studentId)) {
        delete nextObject[studentId];
        return nextObject;
      } else {
        nextObject[studentId] = studentId;
        return nextObject;
      }
    })
  }
  
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
