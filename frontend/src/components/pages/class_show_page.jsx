import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ClassShowHeader from '../classes/show/class_show_header';
import { connect } from 'react-redux';

const ClassShowPage = ({ klass }) => {
  const [isCreatingStudent, setIsCreatingStudent] = useState(false);

  const openStudentForm = () => setIsCreatingStudent(true);
  const closeStudentForm = () => setIsCreatingStudent(false);

  return (
    <main>
      <ClassShowHeader klass={klass} />

    </main>
  )
}

ClassShowPage.propTypes = {
  klass: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    notes: PropTypes.string,
  }).isRequired,
}

const mapStateToProps = ({ entities: { classes }}, ownProps) => ({
  klass: classes[ownProps.match.params.classId],
})
// the param name above might not be "classId". depends on how route is set up.

// const mapDispatchToProps = (dispatch) => ({
  
// })

export default connect(mapStateToProps, null)(ClassShowPage);