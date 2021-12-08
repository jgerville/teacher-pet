import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactLoading from 'react-loading';
import ClassIndexItem from "./class_index_item";
import { sortAlphabetically } from "../../../util/array_util";

const ClassIndex = ({ classes, getClasses }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        setIsLoading(true);
        setError("");
        await getClasses();
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError("There was an error finding your classes.")
      }
    }
    fetchClasses();
    return () => {
      setError("");
      setIsLoading(false);
    }
  }, [getClasses]);

  return (
    <div className="class-index">
      {error && <p>{error}</p>}
      {isLoading && <ReactLoading type={"spinningBubbles"} color={"#808080"} height={50} width={50} />}
      {classes ? (
        <ul className="class-list">
          {sortAlphabetically(classes, "name").map((klass) => (
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
