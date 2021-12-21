import React, { useState } from "react";
import PropTypes from "prop-types";
import StudentFormHeader from "./student_form_header";
import AddManyFormContainer from "./add_many_form_container";
import StudentIndexContainer from "../../index/student_index_container";

const StudentForm = ({ close }) => {
  const [currentTab, setCurrentTab] = useState("addMany");
  const [centerer, setCenterer] = useState("add-students-centerer")

  const switchToMany = () => {
    if (currentTab !== "addMany") {
      setCurrentTab("addMany");
      setCenterer("add-students-centerer")
    }
  };

  const switchToStudents = () => {
    if (currentTab !== "students") {
      setCurrentTab("students");
      setCenterer("view-students-centerer")
    }
  };

  const doNothing = (e) => {
    e.stopPropagation();
  }

  return (
    <>
      <div className="modal-background" onClick={close}/>
      <div className={centerer} onClick={close}>
        <div className="modal-child" onClick={doNothing}>
          <div className="student-form-container">
            <i className="fas fa-times" onClick={close} />
            <StudentFormHeader
              addMany={switchToMany}
              viewStudents={switchToStudents}
            />
            {currentTab === "addMany" && <AddManyFormContainer />}
            {currentTab === "students" && <StudentIndexContainer showDelete={true} />}
          </div>
        </div>
      </div>
    </>
  );
};

StudentForm.propTypes = {
  close: PropTypes.func.isRequired,
};

export default StudentForm;
