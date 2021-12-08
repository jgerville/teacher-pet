import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";
import { sortAlphabetically } from "../../../util/array_util";
import StudentIndexItem from "./student_index_item";

const StudentIndex = ({ students, getStudents, enableLinks }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setIsLoading(true);
        setError("");
        await getStudents();
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError("There was an error finding your students.");
      }
    };
    fetchStudents();
    return () => {
      setError("");
      setIsLoading(false);
    };
  }, [getStudents]);

  const notEmpty = (array) => array.length > 0;

  return (
    <div className="student-index">
      {error && <p>{error}</p>}
      {isLoading && (
        <ReactLoading
          type={"spinningBubbles"}
          color={"#808080"}
          height={50}
          width={50}
        />
      )}
      {notEmpty(students) ? (
        <ul className="student-list">
          {sortAlphabetically(students, "name").map((student) => (
            <li key={student._id}>
              <StudentIndexItem student={student} enableLinks={enableLinks} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Looks like you don't have any students added yet.</p>
      )}
    </div>
  );
};

StudentIndex.propTypes = {
  getStudents: PropTypes.func.isRequired,
  students: PropTypes.array,
  enableLinks: PropTypes.bool,
};

export default StudentIndex;
