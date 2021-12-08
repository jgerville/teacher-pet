import React from "react";
import PropTypes from "prop-types";

const AddItemButton = ({ open, itemName }) => {
  
  return (
    <div className="add-something-button-holder">
      <button onClick={open}>Add a new {itemName}</button>
    </div>
  );
};

AddItemButton.propTypes = {
  open: PropTypes.func.isRequired,
  itemName: PropTypes.string.isRequired,
};

export default AddItemButton;