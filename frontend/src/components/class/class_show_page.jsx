import React from 'react'
import PropTypes from 'prop-types'
import ClassShowHeader from './class_show_header';

const ClassShowPage = ({ klass }) => {
  const [isCreatingStudent, setIsCreatingStudent] = useState(false);

  const openStudentForm = () => setIsCreatingStudent(true);
  const closeStudentForm = () => setIsCreatingStudent(false);

  return (
    <main>
      <ClassShowHeader klass={klass} />

    </main>
  )
}

ClassShowPage.propTypes = {
  klass: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    notes: PropTypes.string,
  }).isRequired,
}

export default ClassShowPage;