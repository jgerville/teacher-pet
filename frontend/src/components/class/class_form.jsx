import React from 'react'
import PropTypes from 'prop-types'

const ClassForm = ({ createClass }) => {
  
  return (
    <div className="outer-modal">
      <form className="class-form">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder="Title" />
      </form>
    </div>
  )
}

ClassForm.propTypes = {
  createClass: PropTypes.func.isRequired,
}

export default ClassForm
