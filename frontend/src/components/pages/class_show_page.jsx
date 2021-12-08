import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ClassShowHeader from '../classes/show/class_show_header';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getClass } from '../../actions/class_actions';
import AddItemButton from '../reusable/add_item_button';

const ClassShowPage = ({ klass, classId, getClass }) => {
  const [isCreatingStudent, setIsCreatingStudent] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    const fetchClass = async () => {
      try {
        setIsLoading(true);
        setError("");
        await getClass(classId);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError("There was an error finding this class.");
      }
    }
    fetchClass();
    return () => {
      setError("");
    }
  }, [classId, getClass])

  const openStudentForm = () => setIsCreatingStudent(true);
  const closeStudentForm = () => setIsCreatingStudent(false);

  return (
    <main>
      {error && <p>{error}</p>}
      {isLoading && <ReactLoading type={"spinningBubbles"} color={"#808080"} height={50} width={50} />}
      {klass ? (
        <>
          <ClassShowHeader klass={klass} />
          <AddItemButton open={openStudentForm} itemName="student" />
        </>
      ) : null}
      
    </main>
  )
}

ClassShowPage.propTypes = {
  klass: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    note: PropTypes.string,
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