import React from "react";

class ReportForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  componentDidMount() {
    this.props.showReport(this.props.reportForm.id) // _id?
  }

  // may need to edit this.props.reportForm

  render() {
    if (!this.props.reportForm) return null;
    <div>
      <form action="">
        <textarea id="report-form-textbox" cols="30" rows="10">
          {this.props.reportForm}
        </textarea>
      </form>
    </div>
  }
}

export default ReportForm