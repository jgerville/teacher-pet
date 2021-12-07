const mapStateToProps = ({ entities: { classes }}, ownProps) => ({
  klass: classes[ownProps.match.params.classId],
})
// the param name above might not be "classId". depends on how route is set up.

// const mapDispatchToProps = (dispatch) => ({
  
// })