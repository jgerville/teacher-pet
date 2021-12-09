import React from "react";
import PropTypes from "prop-types";
import DotButtons from "./dot_buttons";

const ClassShowHeader = ({ klass }) => (
  <header>
    <div className="top-line">
      <h1>{klass.name}</h1>
      <DotButtons klass={klass} />
    </div>
    {klass.subject && <p>Subject: {klass.subject}</p>}
    {klass.note && <p className="note">Note: {klass.note}</p>}
  </header>
);

ClassShowHeader.propTypes = {
  klass: PropTypes.object.isRequired,
};

export default ClassShowHeader;