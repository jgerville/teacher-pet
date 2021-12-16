import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const InfoPage = ({ user }) => {
  return (
    <div>
      <p>Step 1: Click on "Add a new student." Write their name(s) in the form, then click on the submit button.</p>
      <p>Step 2: Click on "Add a new class." Write the name of a class and its subject, then click on the submit button.</p>
      <p>Step 3: </p>
    </div>
  )
}

InfoPage.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapStateToProps = ({ session: { user } }) => ({
  user,
})

export default connect(mapStateToProps, null)(InfoPage);