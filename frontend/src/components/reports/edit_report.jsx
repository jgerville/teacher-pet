import React from "react";
import PropTypes from "prop-types";
import TextareaAutosize from "react-textarea-autosize";

const EditReport = ({ body, handleChange, close }) => {

  return (
    <>
      <h1>Editing Your Report</h1>
      <div className="report-input">
        <TextareaAutosize
          autoFocus
          cacheMeasurements
          onChange={handleChange}
          placeholder="If this used to have text in it, you can press ctrl-z or cmd-z to get the text back!"
          value={body}
        />
        <button onClick={close} className="btn">Done Editing</button>
      </div>
    </>
  );
};

EditReport.propTypes = {
  body: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default EditReport;