import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StudentIndexItem = ({ student, enableLinks }) => {
  return (
    <div className="student-index-item">
      {enableLinks ? (
        <Link to={`/students/${student._id}`}>
          <span>{student.firstName} </span>
          <span>{student.lastName}</span>
        </Link>
      ) : (
        <>
          <span>{student.firstName} </span>
          <span>{student.lastName}</span>
        </>
      )}
    </div>
  );
};

StudentIndexItem.propTypes = {
  student: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  enableLinks: PropTypes.bool,
};

export default StudentIndexItem;
