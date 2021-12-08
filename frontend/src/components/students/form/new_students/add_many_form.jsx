import React, { useState } from "react";
import PropTypes from "prop-types";

const AddManyForm = ({ createStudents, closeModal, students }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const errorMessage = "Something went wrong. Please check the list and try again."
  const emptyMessage = "Remember to put students' names in the form!"

  const handleChange = (e) => {
    if (error) {
      setError("");
    }
    setInputValue(e.target.value);
  }

  const formatStudents = (text) => {
    // currently, this returns an array of full names.
    // for each full name, they'll need to split(" ") and extract fname/lname
    const splitText = text.split(",");
    const trimmed = splitText.map(name => name.trim());
    return trimmed.filter(name => name.split(" ").length === 2);
    // rejects anything other than 2 words
  }
  
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
      console.log(`Error in addManyForm:`, error);
      setError(errorMessage);
    }
  }

  return (
    <div className="add-many-tab">
      <header>
        <p>
          Enter each student's first and last name, with commas in between each
          student.
        </p>
      </header>
      <form>
        <textarea placeholder="" onChange={handleChange} value={inputValue} />
        <button onClick={handleSubmit}>Save</button>
        {error && <p>{error}</p>}
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
