import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StudentIndexItem = ({ student }) => {
  return (
    <>
      <Link to={`/????_student_show_page??????`}>
        <span>{student.firstName}</span>
        <span>{student.lastName}</span>
      </Link>
    </>
  );
};

StudentIndexItem.propTypes = {
  student: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
};

export default StudentIndexItem;