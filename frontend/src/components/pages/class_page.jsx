import React, { useState } from "react";
import PropTypes from 'prop-types'
import AddItemButton from "../reusable/add_item_button";
import ClassFormContainer from "../classes/form/class_form_container";
import ClassIndexContainer from "../classes/index/class_index_container";
import StudentForm from "../students/form/new_students/student_form";
import "../../styles/class-page.css"
import { closeModal, openModal } from "../../actions/modal_actions";
import { connect } from "react-redux";

const ClassPage = ({ openClass, openStudent, modal, closeModal }) => {
  // const [isCreatingClass, setIsCreatingClass] = useState(false);
  // const [isCreatingStudent, setIsCreatingStudent] = useState(false);

  // const openClassCreator = () => setIsCreatingClass(true);
  // const closeClassCreator = () => setIsCreatingClass(false);
  // const openStudentForm = () => setIsCreatingStudent(true);
  // const closeStudentForm = () => setIsCreatingStudent(false);

  return (
    <main className="class-page">
      <AddItemButton open={openClass} itemName="class" />
      <AddItemButton open={openStudent} itemName="student" />
      <div className="separator" />
      <h1>Your Classes</h1>
      <ClassIndexContainer />
      {modal === "createClass" && <ClassFormContainer />}
      {modal === "createStudent" && <StudentForm close={closeModal} />}
    </main>
  );
};

const mapStateToProps = ({ ui: { modal } }) => ({
  modal,
})

const mapDispatchToProps = (dispatch) => ({
  openClass: () => dispatch(openModal("createClass")),
  openStudent: () => dispatch(openModal("createStudent")),
  closeModal: () => dispatch(closeModal()),
})

ClassPage.propTypes = {
  openClass: PropTypes.func.isRequired,
  openStudent: PropTypes.func.isRequired,
  modal: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassPage);
