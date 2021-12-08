import React from "react";
import PropTypes from "prop-types";

const StudentShowHeader = ({ student: { firstName, lastName, note } }) => {
  return (
    <div className="student-show-header">
      <h1>
        {firstName} {lastName}
      </h1>
      {note && <p>{note}</p>}
    </div>
  );
};

StudentShowHeader.propTypes = {
  student: PropTypes.object.isRequired,
};

export default StudentShowHeader;