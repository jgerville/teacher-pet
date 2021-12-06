import React, { useEffect } from "react";
import PropTypes from "prop-types";

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
              <h2>
                <Link to="">{classObject.title}</Link>
              </h2>
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
