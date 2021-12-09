import React from "react";

class ReportForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null, //need to update
      student: this.props.student.id,
      genderPronouns: null,
      overallScore: null,
      listensAttentively: null,
      helpsOthers: null,
      participatesOften: null,
      asksQuestions: null,
      goodAttendance: null,
      onTime: null,
      polite: null,
      notDisruptive: null,
      homeworkCompletion: null,
      cat1: null,
      cat2: null,
      cat3: null,
      cat4: null,
      cat5: null,
      cat6: null,
      cat1Val: null,
      cat2Val: null,
      cat3Val: null,
      cat4Val: null,
      cat5Val: null,
      cat6Val: null,
      categories: [{ cat1: cat1Val }, { cat2: cat2Val }, { cat3: cat3Val }, { cat4: cat4Val }, { cat5: cat5Val }, { cat6: cat6Val }]
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReportData(this.state)
  }

  render() {
    return (
      <div>
        evaluation form placeholder
        <form className="" action="">
          <div>Pronouns
            <input type="radio" name="pronoun" value="1" onChange={this.update("genderPronouns")}/>He/Him/His
            <input type="radio" name="pronoun" value="2" onChange={this.update("genderPronouns")}/>She/Her/Hers
            <input type="radio" name="pronoun" value="3" onChange={this.update("genderPronouns")}/>They/Them/Theirs
          </div>
          <div>Overall Performance
            <input type="radio" name="overall-score" value="1" onChange={this.update("overallScore")}/>Poor
            <input type="radio" name="overall-score" value="2" onChange={this.update("overallScore")}/>Below Expectations
            <input type="radio" name="overall-score" value="3" onChange={this.update("overallScore")}/>Fair
            <input type="radio" name="overall-score" value="4" onChange={this.update("overallScore")}/>Good
            <input type="radio" name="overall-score" value="5" onChange={this.update("overallScore")}/>Excellent
          </div>
          <div>listens attentively
            <input type="radio" name="listen-score" value="true" onChange={this.update("listensAttentively")}/>True
            <input type="radio" name="listen-score" value="false" onChange={this.update("listensAttentively")}/>False
          </div>
          <div>Helps others
            <input type="radio" name="help-score" value="true" onChange={this.update("helpsOthers")}/>True
            <input type="radio" name="help-score" value="false" onChange={this.update("helpsOthers")}/>False
          </div>
          <div>Participates often
            <input type="radio" name="participate-score" value="true" onChange={this.update("participatesOften")}/>True
            <input type="radio" name="participate-score" value="false" onChange={this.update("participatesOften")}/>False
          </div>
          <div>Asks questions
            <input type="radio" name="question-score" value="true" onChange={this.update("asksQuestions")}/>True
            <input type="radio" name="question-score" value="false" onChange={this.update("asksQuestions")}/>False
          </div>
          <div>Good attendance
            <input type="radio" name="attendance-score" value="true" onChange={this.update("goodAttendance")}/>True
            <input type="radio" name="attendance-score" value="false" onChange={this.update("goodAttendance")}/>False
          </div>
          <div>On time
            <input type="radio" name="time-score" value="true" onChange={this.update("onTime")}/>True
            <input type="radio" name="time-score" value="false" onChange={this.update("onTime")}/>False
          </div>
          <div>Polite
            <input type="radio" name="polite-score" value="true" onChange={this.update("polite")}/>True
            <input type="radio" name="polite-score" value="false" onChange={this.update("polite")}/>False
          </div>
          <div>Not disruptive
            <input type="radio" name="disruptive-score" value="true" onChange={this.update("notDisruptive")}/>True
            <input type="radio" name="disruptive-score" value="false" onChange={this.update("notDisruptive")}/>False
          </div>
          <div>Homework completion
            <input type="radio" name="homework-score" value="true" onChange={this.update("homeworkCompletion")}/>True
            <input type="radio" name="homework-score" value="false" onChange={this.update("homeworkCompletion")}/>False
          </div>
          <div>Additional categories
            <div>Category One
              <input type="text" onChange={this.update("cat1")} />
              <div>Score
                <input type="radio" name="cat-1" value="1" onChange={this.update("cat1Val")}/>Poor
                <input type="radio" name="cat-1" value="2" onChange={this.update("cat1Val")}/>Below Expectations
                <input type="radio" name="cat-1" value="3" onChange={this.update("cat1Val")}/>Fair
                <input type="radio" name="cat-1" value="4" onChange={this.update("cat1Val")}/>Good
                <input type="radio" name="cat-1" value="5" onChange={this.update("cat1Val")}/>Excellent
              </div>
            </div>
            <div>Category Two
              <input type="text" onChange={this.update("cat2")} />
              <div>Score
                <input type="radio" name="cat-2" value="1" onChange={this.update("cat2Val")}/>Poor
                <input type="radio" name="cat-2" value="2" onChange={this.update("cat2Val")}/>Below Expectations
                <input type="radio" name="cat-2" value="3" onChange={this.update("cat2Val")}/>Fair
                <input type="radio" name="cat-2" value="4" onChange={this.update("cat2Val")}/>Good
                <input type="radio" name="cat-2" value="5" onChange={this.update("cat2Val")}/>Excellent
              </div>
            </div>
            <div>Category Three
              <input type="text" onChange={this.update("cat3")} />
              <div>Score
                <input type="radio" name="cat-3" value="1" onChange={this.update("cat3Val")}/>Poor
                <input type="radio" name="cat-3" value="2" onChange={this.update("cat3Val")}/>Below Expectations
                <input type="radio" name="cat-3" value="3" onChange={this.update("cat3Val")}/>Fair
                <input type="radio" name="cat-3" value="4" onChange={this.update("cat3Val")}/>Good
                <input type="radio" name="cat-3" value="5" onChange={this.update("cat3Val")}/>Excellent
              </div>
            </div>
            <div>Category Four
              <input type="text" onChange={this.update("cat4")} />
              <div>Score
                <input type="radio" name="cat-4" value="1" onChange={this.update("cat4Val")} />Poor
                <input type="radio" name="cat-4" value="2" onChange={this.update("cat4Val")}/>Below Expectations
                <input type="radio" name="cat-4" value="3" onChange={this.update("cat4Val")}/>Fair
                <input type="radio" name="cat-4" value="4" onChange={this.update("cat4Val")}/>Good
                <input type="radio" name="cat-4" value="5" onChange={this.update("cat4Val")}/>Excellent
              </div>
            </div>
            <div>Category Five
              <input type="text" onChange={this.update("cat5")} />
              <div>Score
                <input type="radio" name="cat-5" value="1" onChange={this.update("cat5Val")}/>Poor
                <input type="radio" name="cat-5" value="2" onChange={this.update("cat5Val")}/>Below Expectations
                <input type="radio" name="cat-5" value="3" onChange={this.update("cat5Val")}/>Fair
                <input type="radio" name="cat-5" value="4" onChange={this.update("cat5Val")}/>Good
                <input type="radio" name="cat-5" value="5" onChange={this.update("cat5Val")}/>Excellent
              </div>
            </div>
            <div>Category Six
              <input type="text" onChange={this.update("cat6")} />
              <div>Score
                <input type="radio" name="cat-6" value="1" onChange={this.update("cat6Val")}/>Poor
                <input type="radio" name="cat-6" value="2" onChange={this.update("cat6Val")}/>Below Expectations
                <input type="radio" name="cat-6" value="3" onChange={this.update("cat6Val")}/>Fair
                <input type="radio" name="cat-6" value="4" onChange={this.update("cat6Val")}/>Good
                <input type="radio" name="cat-6" value="5" onChange={this.update("cat6Val")}/>Excellent
              </div>
            </div>
          </div>

        </form>
      </div>
    )
  }
}

export default ReportForm