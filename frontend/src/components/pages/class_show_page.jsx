import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ClassShowHeader from "../classes/show/class_show_header";
import ReactLoading from "react-loading";
import "../../styles/class-show-page.css";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getClass } from "../../actions/class_actions";
import AddItemButton from "../reusable/add_item_button";
import FilteredStudentIndexContainer from "../students/index/filtered_student_index_container";
import AddStudentsForm from "../students/form/add_to_class/add_students_form";
import { closeModal, openModal } from "../../actions/modal_actions";

const ClassShowPage = ({ klass, classId, getClass, modal, openModal, closeModal }) => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchClass = async () => {
      try {
        setIsLoading(true);
        setError("");
        await getClass(classId);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError("There was an error finding this class.");
      }
    };
    fetchClass();
    return () => {
      setError("");
    };
  }, [classId, getClass]);

  return (
    <main className="class-show-page">
      {error && <p className="error-text">{error}</p>}
      {isLoading && (
        <ReactLoading
          type={"spinningBubbles"}
          color={"#808080"}
          height={50}
          width={50}
        />
      )}
      {klass ? (
        <>
          <ClassShowHeader klass={klass} />
          <AddItemButton open={openModal} itemName="student" />
          {modal === "addStudents" && <AddStudentsForm klass={klass} close={closeModal} /> }
          <FilteredStudentIndexContainer />
        </>
      ) : null}
    </main>
  );
};

ClassShowPage.propTypes = {
  klass: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    note: PropTypes.string,
  }),
  getClass: PropTypes.func.isRequired,
  classId: PropTypes.string.isRequired,
  modal: PropTypes.string,
};

const mapStateToProps = ({ entities: { classes }, ui: { modal } }, ownProps) => ({
  klass: classes[ownProps.match.params.classId],
  classId: ownProps.match.params.classId,
  modal,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getClass: () => dispatch(getClass(ownProps.match.params.classId)),
  openModal: () => dispatch(openModal("addStudents")),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ClassShowPage)
);
