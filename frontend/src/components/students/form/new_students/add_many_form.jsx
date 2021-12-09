import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const AddManyForm = ({ createStudents, closeModal, students }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState("disabled");
  const errorMessage = "Something went wrong. Please check the list and try again."
  const emptyMessage = "Remember to put students' names in the form!"

  useEffect(() => {
    if (formatStudents(inputValue).length > 0) {
      setDisabled("");
    } else {
      setDisabled("disabled");
    }
  }, [inputValue])

  const handleChange = (e) => {
    if (error) {
      setError("");
    }
    setInputValue(e.target.value);
  }

  const formatStudents = (text) => {
    const splitText = text.split(",");
    const trimmed = splitText.map(name => name.trim());
    return trimmed.filter(name => name.split(" ").length === 2);
    // rejects anything other than 2 words
  }

  const newStudentCount = () => formatStudents(inputValue).length;
  const buttonText = newStudentCount() === 1 ? `Save ${newStudentCount()} new student` : `Save ${newStudentCount()} new students`

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue) {
      setError(emptyMessage);
      return;
    }
    try {
      const names = formatStudents(inputValue);
      await createStudents(names);
      closeModal();
    } catch (error) {
      setError(errorMessage);
    }
  }

  return (
    <div className="add-many">
      <header>
        <p>
          Enter each student's first and last name, with commas in between each
          student.
        </p>
      </header>
      <form>
        <textarea placeholder="Chris Cheasty, Emily Bell, Matt Lese, Julian Erville, …" onChange={handleChange} value={inputValue} />
        <button className={`btn ${disabled}`} onClick={handleSubmit}>{buttonText}</button>
        {error && <p className="error-text">{error}</p>}
      </form>
    </div>
  );
};

AddManyForm.propTypes = {
  students: PropTypes.object.isRequired,
  createStudents: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default AddManyForm;
