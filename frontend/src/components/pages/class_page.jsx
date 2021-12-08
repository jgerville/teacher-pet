import React, { useState } from "react";
// import PropTypes from 'prop-types'
import AddItemButton from "../reusable/add_item_button";
import ClassFormContainer from "../classes/form/class_form_container";
import ClassIndexContainer from "../classes/index/class_index_container";
import StudentForm from "../students/form/new_students/student_form";

const ClassPage = (props) => {
  const [isCreatingClass, setIsCreatingClass] = useState(false);
  const [isCreatingStudent, setIsCreatingStudent] = useState(false);

  const openClassCreator = () => setIsCreatingClass(true);
  const closeClassCreator = () => setIsCreatingClass(false);
  const openStudentForm = () => setIsCreatingStudent(true);
  const closeStudentForm = () => setIsCreatingStudent(false);

  return (
    <main className="class-page">
      <AddItemButton open={openClassCreator} itemName="class" />
      <ClassIndexContainer />
      <AddItemButton open={openStudentForm} itemName="student" />
      {isCreatingClass && <ClassFormContainer close={closeClassCreator} />}
      {isCreatingStudent && <StudentForm />}
    </main>
  );
};

// ClassPage.propTypes = {

// }

export default ClassPage;
