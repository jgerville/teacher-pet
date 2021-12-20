import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const InfoPage = ({ user }) => {
  return (
    <div className="new-info">
      <p>Step 1: Click on "Add a new student." Write their name(s) in the form, then click on the submit button.</p>
      <br />
      <p>Step 2: Click on "Add a new class." Write the name of a class and its subject, then click on the submit button.</p>
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