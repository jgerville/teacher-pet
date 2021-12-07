import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ClassIndex = ({ classes, getClasses }) => {
  useEffect(() => {
    getClasses();
  }, []);

  return (
    <div className="class-index">
      {classes.length > 0 ? (
        <ul className="class-list">
          {classes.map((classObject) => (
            <li key={classObject.id}>
              <Link to="">
                <span>{classObject.title}</span>
                <i class="fas fa-chevron-right" />
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

ClassIndex.propTypes = {
  classes: PropTypes.array.isRequired,
  getClasses: PropTypes.func.isRequired,
};

export default ClassIndex;
