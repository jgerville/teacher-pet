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

const ClassShowPage = ({ klass, classId, getClass }) => {
  const [isAddingStudent, setIsAddingStudent] = useState(false);
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

  const openStudentForm = () => setIsAddingStudent(true);
  const closeStudentForm = () => setIsAddingStudent(false);

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
          <AddItemButton open={openStudentForm} itemName="student" />
          {isAddingStudent && <AddStudentsForm klass={klass} /> }
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
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ClassShowPage)
);
