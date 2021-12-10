import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { deleteClass } from '../../../actions/class_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteStudent } from '../../../actions/student_actions';

const DotButtons = ({ entity, deleteClass, deleteStudent, history, kind }) => {
  const [showPanel, setShowPanel] = useState(false);
  const togglePanel = () => setShowPanel(prev => !prev);

  const handleDeleteClass = async () => {
    await deleteClass(entity._id);
    history.push("/classes")
  }

  const handleDeleteStudent = async () => {
    await deleteStudent(entity._id);
  }

  const handleDelete = () => {
    if (kind === "class") {
      return handleDeleteClass;
    } else if (kind === "student") {
      return handleDeleteStudent;
    }
  }
  
  return (
    <div className="dots" onClick={togglePanel}>
      <i className="fas fa-ellipsis-h"/>
      {showPanel && (
        <div className="panel">
          {/* <button className="btn">Edit</button> */}
          <button className="btn" onClick={handleDeleteClass}>Delete</button>
        </div>
      )}
    </div>
  )
}

DotButtons.propTypes = {
  entity: PropTypes.object.isRequired,
  deleteClass: PropTypes.func.isRequired,
  deleteStudent: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  kind: PropTypes.string.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  deleteClass: (classId) => dispatch(deleteClass(classId)),
  deleteStudent: (studentId) => dispatch(deleteStudent(studentId)),
})

export default withRouter(connect(null, mapDispatchToProps)(DotButtons));
