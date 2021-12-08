import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";
import { sortAlphabetically } from "../../../util/array_util";
import StudentIndexItem from "./student_index_item";

const StudentIndex = ({ students, getStudents }) => {
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
      {students ? (
        <ul className="student-list">
          {sortAlphabetically(students, "name").map((student) => (
            <li key={student._id}>
              <StudentIndexItem student={student} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

StudentIndex.propTypes = {
  students: PropTypes.object,
  getStudents: PropTypes.func.isRequired,
};

export default StudentIndex;
