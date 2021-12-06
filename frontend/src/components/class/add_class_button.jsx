import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { createClass } from '../../actions/class_actions'

const AddClassButton = ({ createClass }) => {
  const [isCreatingClass, setIsCreatingClass] = useState(false);
  
  const openClassCreator = () => setIsCreatingClass(true);
  const closeClassCreator = () => setIsCreatingClass(false);

  return (
    <div className="add-class-button-holder">
      <button onClick={openClassCreator}>Add a new class</button>
      
    </div>
  )
}

AddClassButton.propTypes = {

}

const mapDispatchToProps = (dispatch) => ({
  createClass: (klass) => dispatch(createClass(klass)),
})

export default connect(null, mapDispatchToProps)(AddClassButton);
