import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactLoading from "react-loading";
import SelectableStudentIndexContainer from '../../index/selectable_index_container';
import { addStudentsToClass } from '../../../../actions/class_actions';
import { connect } from 'react-redux';

const AddStudentsForm = ({ klass, allStudents, addStudents }) => {
  const [studentIds, setStudentIds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError("");
      await addStudents(klass._id, Object.values(studentIds));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("There was an error updating your class. Please try again.");
    }
  }
  
  return (
    <div className="student-form-container">
      <h2>Select the students you want to add</h2>
      <SelectableStudentIndexContainer toggle={addOrRemoveStudent} />
      {error && <p className="error-text">{error}</p>}
      {isLoading ? (
        <ReactLoading
          type={"spinningBubbles"}
          color={"#808080"}
          height={50}
          width={50}
        />
      ) : <button onClick={handleSubmit}>Add to {klass.name}</button>}
      
    </div>
  )
}

AddStudentsForm.propTypes = {
  klass: PropTypes.object.isRequired,
  allStudents: PropTypes.array.isRequired,
  addStudents: PropTypes.func.isRequired,
}

const mapStateToProps = ({ entities: students }) => ({
  allStudents: Object.values(students),
})

const mapDispatchToProps = (dispatch) => ({
  addStudents: (classId, studentIds) => dispatch(addStudentsToClass(classId, studentIds)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddStudentsForm);
