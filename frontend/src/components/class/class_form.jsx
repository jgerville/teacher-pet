import React, { useState } from "react";
import PropTypes from "prop-types";

const ClassForm = ({ createClass }) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  // const [students, setStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className="outer-modal">
      <form className="class-form">
        <i className="fas fa-times" />
        <input
          type="text"
          id="name"
          placeholder="Class name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          id="subject"
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />
        <button onClick={handleSubmit}>Add Class</button>
      </form>
    </div>
  );
};

ClassForm.propTypes = {
  createClass: PropTypes.func.isRequired,
};

export default ClassForm;
