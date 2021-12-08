import React from 'react'
import PropTypes from 'prop-types'
import StudentShowHeader from "../students/show/student_show_header";
import AddItemButton from '../reusable/add_item_button';

const StudentShowPage = ({ student }) => {
  return (
    <main className="student-show-page">
      <StudentShowHeader student={student} />
      <AddItemButton open={"???"} itemName="report" />
    </main>
  )
}

StudentShowPage.propTypes = {
  student: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    note: PropTypes.string,
    classes: PropTypes.array,
    reports: PropTypes.array,
  }).isRequired,
}

export default StudentShowPage
