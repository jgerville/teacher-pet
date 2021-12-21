import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ClassForm = ({ errors, createClass, close }) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [note, setNote] = useState("");
  const [disabled, setDisabled] = useState("disabled");

  useEffect(() => {
    if (name && subject) {
      setDisabled("");
    } else {
      setDisabled("disabled");
    }
  }, [name, subject])

  const doNothing = (e) => {
    e.stopPropagation();
  }

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
      return;
    }
  };

  return (
    <>
      <div className="modal-background"/>
      <div className="class-form-centerer" onClick={close}>
        <div className="modal-child" onClick={doNothing}>
          <form className="class-form">
            <i className="fas fa-times" onClick={close} />
            {/* map errors if we have any */}
            <input
              autoFocus
              required
              type="text"
              id="name"
              placeholder="Class name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              required
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
            {errors ? errors.map((error, idx) => <p key={idx}>{error}</p>) : null}
            <button className={`btn ${disabled}`} onClick={handleSubmit}>Add Class</button>
          </form>
        </div>
      </div>
    </>
  );
};

ClassForm.propTypes = {
  createClass: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default ClassForm;
