import React from "react";
import PropTypes from "prop-types";

const ClassShowHeader = ({ klass }) => (
  <header>
    <h1>{klass.name}</h1>
    <p>Subject: {klass.subject}</p>
    <p className="notes">{klass.notes}</p>
  </header>
);

ClassShowHeader.propTypes = {
  klass: PropTypes.object.isRequired,
};

export default ClassShowHeader;