import React, { useState } from "react";
import PropTypes from "prop-types";
import StudentFormHeader from "./student_form_header";

const StudentForm = (props) => {
  const [currentTab, setCurrentTab] = useState("addMany");

  return (
    <div className="student-form-container">
      <StudentFormHeader
        addMany={() => setCurrentTab("addMany")}
        addOne={() => setCurrentTab("addOne")}
      />
    </div>
  );
};

StudentForm.propTypes = {};

export default StudentForm;
