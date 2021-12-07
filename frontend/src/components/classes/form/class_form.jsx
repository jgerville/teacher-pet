import React, { useState } from "react";
import PropTypes from "prop-types";

const ClassForm = ({ errors, createClass, close }) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const klass = {
      name,
      subject,
      note,
    };
    try {
      await createClass(klass);
      close();
    } catch (error) {
      console.log(`class form error: ${error}`);
      return;
    }
  };

  return (
    <div className="outer-modal">
      <form className="class-form">
        <i className="fas fa-times" />
        {/* map errors if we have any */}
        {errors ? errors.map((error, idx) => <p key={idx}>{error}</p>) : null}
        <input
          autoFocus
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
        <input
          type="text"
          id="note"
          placeholder="note"
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />
        <button onClick={handleSubmit}>Add Class</button>
      </form>
    </div>
  );
};

ClassForm.propTypes = {
  createClass: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default ClassForm;
