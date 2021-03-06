import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactLoading from "react-loading";
import StudentIndexItem from './student_index_item';

const SelectableStudentIndex = ({ students, getStudents, toggle }) => {
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

  const handleClick = (e, studentId) => {
    toggle(studentId);
    e.currentTarget.classList.toggle("selected")
  }

  const notEmpty = (array) => array.length > 0;

  return (
    <div className="student-index">
      {error && <p className="error-text">{error}</p>}
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
          {students.map((student) => (
            <li key={student._id} onClick={(e) => handleClick(e, student._id)}>
              <StudentIndexItem student={student} />
            </li>
          ))}
        </ul>
      ) : (
        <p>In order to add students to a class, first add them to your account by going to the previous page.</p>
      )}
    </div>
  );
}

SelectableStudentIndex.propTypes = {
  getStudents: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  students: PropTypes.array,
}

export default SelectableStudentIndex