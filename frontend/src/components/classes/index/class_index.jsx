import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ClassIndexItem from "./class_index_item";

const ClassIndex = ({ classes, getClasses }) => {
  useEffect(() => {
    getClasses();
  }, [getClasses]);

  return (
    <div className="class-index">
      {classes ? (
        <ul className="class-list">
          {classes.map((klass) => (
            <li key={klass._id}>
              <ClassIndexItem klass={klass} />
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
