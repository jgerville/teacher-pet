import React, { useState } from "react";
import PropTypes from "prop-types";
import TextareaAutosize from "react-textarea-autosize";

const EditReport = ({ report, body, handleChange }) => {

  return (
    <div className="report-input">
      <TextareaAutosize
        cacheMeasurements
        onChange={handleChange}
        placeholder="You can press ctrl-z or cmd-z to get the text back!"
        value={body}
      />
      <button className="btn">Save</button>
    </div>
  );
};

EditReport.propTypes = {
  report: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EditReport;