import React from "react";
import PropTypes from "prop-types";
import { createClass } from "../../actions/class_actions";

const AddClassButton = ({ open }) => {
  return (
    <div className="add-class-button-holder">
      <button onClick={open}>Add a new class</button>
    </div>
  );
};

AddClassButton.propTypes = {
  open: PropTypes.func.isRequired,
};

export default AddClassButton;