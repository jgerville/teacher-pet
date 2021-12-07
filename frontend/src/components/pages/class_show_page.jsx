import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ClassShowHeader from '../classes/show/class_show_header';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getClass } from '../../actions/class_actions';

const ClassShowPage = ({ klass, classId, getClass }) => {
  const [isCreatingStudent, setIsCreatingStudent] = useState(false);

  useEffect(() => {
    getClass(classId);
  }, [classId, getClass])

  const openStudentForm = () => setIsCreatingStudent(true);
  const closeStudentForm = () => setIsCreatingStudent(false);
  console.log("shown: ", klass)

  return (
    <main>
      {klass ? (
        <ClassShowHeader klass={klass} />
      ) : null}
      
    </main>
  )
}

ClassShowPage.propTypes = {
  klass: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    notes: PropTypes.string,
  }),
  getClass: PropTypes.func.isRequired,
  classId: PropTypes.string.isRequired,
}

const mapStateToProps = ({ entities: { classes }}, ownProps) => ({
  klass: classes[ownProps.match.params.classId],
  classId: ownProps.match.params.classId,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getClass: () => dispatch(getClass(ownProps.match.params.classId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClassShowPage));