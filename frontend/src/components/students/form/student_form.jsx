import React, { useState } from "react";
import PropTypes from "prop-types";
import StudentFormHeader from "./student_form_header";
import AddManyForm from "./add_many_form";

const StudentForm = (props) => {
  const [currentTab, setCurrentTab] = useState("addMany");
  const switchToMany = () => {
    if (currentTab === "addOne") {
      setCurrentTab("addMany");
    }
  };
  const switchToOne = () => {
    if (currentTab === "addMany") {
      setCurrentTab("addOne");
    }
  };

  return (
    <div className="student-form-container">
      <StudentFormHeader addMany={switchToMany} addOne={switchToOne} />
      {currentTab === "addMany" ? (
        <AddManyForm />
      ) : (

      )}
    </div>
  );
};

StudentForm.propTypes = {};

export default StudentForm;
