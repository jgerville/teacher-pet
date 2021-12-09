import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { deleteClass } from '../../../actions/class_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const DotButtons = ({ klass, deleteClass, history }) => {
  const [showPanel, setShowPanel] = useState(false);
  const togglePanel = () => setShowPanel(prev => !prev);

  const handleDelete = async () => {
    await deleteClass(klass._id);
    history.push("/classes")
  }
  
  return (
    <div className="dots" onClick={togglePanel}>
      <i className="fas fa-ellipsis-h"/>
      {showPanel && (
        <div className="panel">
          <button>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  )
}

DotButtons.propTypes = {
  klass: PropTypes.object.isRequired,
  deleteClass: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  deleteClass: (classId) => dispatch(deleteClass(classId)),
})

export default withRouter(connect(null, mapDispatchToProps)(DotButtons));
