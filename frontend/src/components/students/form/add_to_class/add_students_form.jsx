import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StudentIndexContainer from '../../index/student_index_container'
import SelectableStudentIndexContainer from '../../index/selectable_index_container';

const AddStudentsForm = (klass) => {
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

  // const handleSubmit
  
  return (
    <div className="student-form-container">
      <h2>Select the students you want to add</h2>
      <SelectableStudentIndexContainer toggle={addOrRemoveStudent} />
      <button>Add to {}</button>
    </div>
  )
}

AddStudentsForm.propTypes = {
  klass: PropTypes.object.isRequired,
}

const mapStateToProps = ({ entities: students }) => ({
  allStudents: Object.values(students),
})

const mapDispatchToProps = (dispatch) => ({
  editStudents: () => dispatch()
})

export default AddStudentsForm
