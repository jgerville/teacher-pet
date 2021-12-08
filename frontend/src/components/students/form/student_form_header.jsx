import React from "react";
import PropTypes from "prop-types";

const StudentFormHeader = ({ addMany, addOne }) => {
  return (
    <div className="student-form-header">
      <div className="add-many-tab" onClick={addMany}>
        <span>Add many</span>
      </div>
      <div className="add-one-tab" onClick={addOne}>
        <span>Add one</span>
      </div>
    </div>
  );
};

StudentFormHeader.propTypes = {
  addMany: PropTypes.func.isRequired,
  addOne: PropTypes.func.isRequired,
};

export default StudentFormHeader;