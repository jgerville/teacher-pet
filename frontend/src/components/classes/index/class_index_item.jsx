import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ClassIndexItem = ({ klass }) => {
  return (
    <>
      <Link to={`/classes/${klass._id}`}>
        <span>{klass.name}</span>
        <i className="fas fa-chevron-right" />
      </Link>
    </>
  )
}

ClassIndexItem.propTypes = {
  klass: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default ClassIndexItem
