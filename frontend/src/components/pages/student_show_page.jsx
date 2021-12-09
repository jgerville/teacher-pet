import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import StudentShowHeader from "../students/show/student_show_header";
import { Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getStudent } from '../../actions/student_actions';
import "../../styles/student-show-page.css"

const StudentShowPage = ({ student, getStudent, studentId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        setIsLoading(true);
        setError("");
        await getStudent();
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError("There was an error finding this student.");
      }
    };
    fetchStudent();
    return () => {
      setError("");
      setIsLoading(false);
    };
  }, [getStudent, studentId])
  
  return (
    <main className="student-show-page">
      {error && <p className="error-text">{error}</p>}
      {isLoading && (
        <ReactLoading
          type={"spinningBubbles"}
          color={"#808080"}
          height={50}
          width={50}
        />
      )}
      {student && (
        <>
          <StudentShowHeader student={student} />
          <Link className="btn" to="/">Create a new report</Link>
        </>
      )}
    </main>
  )
}

StudentShowPage.propTypes = {
  student: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    note: PropTypes.string,
    classes: PropTypes.array,
    reports: PropTypes.array,
  }),
  getStudent: PropTypes.func.isRequired,
}

const mapStateToProps = ({ entities: { students }}, ownProps) => ({
  student: students[ownProps.match.params.studentId],
  studentId: ownProps.match.params.studentId,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getStudent: () => dispatch(getStudent(ownProps.match.params.studentId)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentShowPage));
