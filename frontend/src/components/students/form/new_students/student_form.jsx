import React, { useState } from "react";
import PropTypes from "prop-types";
import StudentFormHeader from "./student_form_header";
import AddManyFormContainer from "./add_many_form_container";
import StudentIndexContainer from "../../index/student_index_container";

const StudentForm = (props) => {
  const [currentTab, setCurrentTab] = useState("addMany");

  const switchToMany = () => {
    if (currentTab !== "addMany") {
      setCurrentTab("addMany");
    }
  };

  // const switchToOne = () => {
  //   if (currentTab !== "addOne") {
  //     setCurrentTab("addOne");
  //   }
  // };

  const switchToStudents = () => {
    if (currentTab !== "students") {
      setCurrentTab("students");
    }
  };

  return (
    <div className="student-form-container">
      <StudentFormHeader
        addMany={switchToMany}
        // addOne={switchToOne}
        viewStudents={switchToStudents}
      />
      {currentTab === "addMany" && <AddManyFormContainer />}
      {currentTab === "students" && <StudentIndexContainer />}
    </div>
  );
};

StudentForm.propTypes = {};

export default StudentForm;
