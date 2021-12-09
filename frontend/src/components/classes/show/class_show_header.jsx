import React from "react";
import PropTypes from "prop-types";

const ClassShowHeader = ({ klass }) => (
  <header>
    <h1>{klass.name}</h1>
    {klass.subject && <p>Subject: {klass.subject}</p>}
    {klass.note && <p className="note">Note: {klass.note}</p>}
  </header>
);

ClassShowHeader.propTypes = {
  klass: PropTypes.object.isRequired,
};

export default ClassShowHeader;