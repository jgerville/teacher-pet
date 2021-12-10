import React from "react";
import '../../styles/report-data.css'

class ReportForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      studentId: this.props.studentId,
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
      categories: []
    }
    this.cats = {
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
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setCategories = this.setCategories.bind(this);
  }

  setCategories() {
    let keys = [this.cats.cat1, this.cats.cat2, this.cats.cat3, this.cats.cat4, this.cats.cat5, this.cats.cat6];
    let vals = [this.cats.cat1Val, this.cats.cat2Val, this.cats.cat3Val, this.cats.cat4Val, this.cats.cat5Val, this.cats.cat6Val]
    for (let i = 0; i < 6; i++) {
      if (keys[i] && vals[i]) {
        this.state.categories.push({ [keys[i]]: vals[i] });
      }
    }
  }

  update(field) {
    return e => (
      this.setState({[field]: e.target.value})
    )
  }

  updateCategory(field) {
    return e => (
      this.cats[field] = e.target.value
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    console.log(this.props);
    this.setCategories();
    let reportDataArray = Object.keys(this.state)
    let reportData = {}
    reportDataArray.forEach( key => {
      if ((this.state[key] !== null) && (this.state[key] !== [])) {
        reportData[key] = this.state[key]
      }
    })
    console.log(reportData)
    this.props.createReportData(reportData).then((res) => 
      console.log(res)
      )
  }

  render() {
    return (
      <div className="report-form-container">
        <div className="report-form-title">
          <div id="report-student-name">
            Student Name
          </div>
        </div>
        <form className="report-form" onSubmit={this.handleSubmit}>
          {/* <div className="report-form-memo">
            Select from the options below to fill out a new report. To help us draft your report, only gender pronouns and overall performance are required - the rest may be selected only as applicable. For ratings covering a specific subject or assignment, enter up to six items in the custom category fields below.
          </div> */}
          <div className="report-form-top">
            <div className="multi-radio-container">
              <div> <h5>Pronouns</h5>
                <label class="report-radio">
                  <input type="radio" name="pronoun" value="1" onChange={this.update("genderPronouns")} />&nbsp;He/Him/His
                </label>
                <label class="report-radio">
                  <input type="radio" name="pronoun" value="2" onChange={this.update("genderPronouns")} />&nbsp;She/Her/Hers
                </label>
                <label class="report-radio">
                  <input type="radio" name="pronoun" value="3" onChange={this.update("genderPronouns")} />&nbsp;They/Them/Theirs
                </label>
              </div>
              <div> <h5>Overall Performance</h5>
                <label class="report-radio">
                  <input type="radio" name="overall-score" value="5" onChange={this.update("overallScore")} />&nbsp;Excellent
                </label>
                <label class="report-radio">
                  <input type="radio" name="overall-score" value="4" onChange={this.update("overallScore")} />&nbsp;Good
                </label>
                <label class="report-radio">
                  <input type="radio" name="overall-score" value="3" onChange={this.update("overallScore")} />&nbsp;Fair
                </label>
                <label class="report-radio">
                  <input type="radio" name="overall-score" value="2" onChange={this.update("overallScore")} />&nbsp;Below Expectations
                </label>
                <label class="report-radio">
                  <input type="radio" name="overall-score" value="1" onChange={this.update("overallScore")} />&nbsp;Poor
                </label>
              </div>
            </div>
            <div className="boolean-radio-container">
              <div className="boolean-labels">
                <h5>Highlights</h5>
                <div className="boolean-category">Listens attentively</div>
                <div className="boolean-category">Helps others</div>
                <div className="boolean-category">Participates often</div>
                <div className="boolean-category">Asks questions</div>
                <div className="boolean-category">Good attendance</div>
                <div className="boolean-category">On time</div>
                <div className="boolean-category">Polite</div>
                <div className="boolean-category">Well behaved</div>
                <div className="boolean-category">Completes homework</div>
              </div>
              <div className="boolean-values">
                <div className="true-container">
                  <h6>True</h6>
                  <input type="radio" name="listen-score" value="true" className="boolean-radio" onChange={this.update("listensAttentively")} />
                  <input type="radio" name="help-score" value="true" className="boolean-radio" onChange={this.update("helpsOthers")} />
                  <input type="radio" name="participate-score" value="true" className="boolean-radio" onChange={this.update("participatesOften")} />
                  <input type="radio" name="question-score" value="true" className="boolean-radio" onChange={this.update("asksQuestions")} />
                  <input type="radio" name="attendance-score" value="true" className="boolean-radio" onChange={this.update("goodAttendance")} />
                  <input type="radio" name="time-score" value="true" className="boolean-radio" onChange={this.update("onTime")} />
                  <input type="radio" name="polite-score" value="true" className="boolean-radio" onChange={this.update("polite")} />
                  <input type="radio" name="disruptive-score" value="true" className="boolean-radio" onChange={this.update("notDisruptive")} />
                  <input type="radio" name="homework-score" value="true" className="boolean-radio" onChange={this.update("homeworkCompletion")} />
                </div>
                <div className="false-container">
                  <h6>False</h6>
                  <input type="radio" name="listen-score" value="false" className="boolean-radio" onChange={this.update("listensAttentively")} />
                  <input type="radio" name="help-score" value="false" className="boolean-radio" onChange={this.update("helpsOthers")} />
                  <input type="radio" name="participate-score" value="false" className="boolean-radio" onChange={this.update("participatesOften")} />
                  <input type="radio" name="question-score" value="false" className="boolean-radio" onChange={this.update("asksQuestions")} />
                  <input type="radio" name="attendance-score" value="false" className="boolean-radio" onChange={this.update("goodAttendance")} />
                  <input type="radio" name="time-score" value="false" className="boolean-radio" onChange={this.update("onTime")} />
                  <input type="radio" name="polite-score" value="false" className="boolean-radio" onChange={this.update("polite")} />
                  <input type="radio" name="disruptive-score" value="false" className="boolean-radio" onChange={this.update("notDisruptive")} />
                  <input type="radio" name="homework-score" value="false" className="boolean-radio" onChange={this.update("homeworkCompletion")} />
                </div>
              </div>
            </div>
          </div>
          <div className="report-form-bottom">
            <h5>Custom Categories</h5>
            <div id="all-cat-container">
              <div className="double-cat-container">
                <div id="category-1" className="cat-container">
                  <input type="text" placeholder="Subject #1" className="cat-text" onChange={this.updateCategory("cat1")} />
                  <label className="report-radio">
                    <input type="radio" name="cat-1" value="5" onChange={this.updateCategory("cat1Val")} />&nbsp;Excellent
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-1" value="4" onChange={this.updateCategory("cat1Val")} />&nbsp;Good
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-1" value="3" onChange={this.updateCategory("cat1Val")} />&nbsp;Fair
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-1" value="2" onChange={this.updateCategory("cat1Val")} />&nbsp;Below Expectations
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-1" value="1" onChange={this.updateCategory("cat1Val")} />&nbsp;Poor
                  </label>
                </div>
                <div id="category-2" className="cat-container">
                  <input type="text" placeholder="Subject #2" className="cat-text" onChange={this.updateCategory("cat2")} />
                  <label className="report-radio">
                    <input type="radio" name="cat-2" value="5" onChange={this.updateCategory("cat2Val")} />&nbsp;Excellent
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-2" value="4" onChange={this.updateCategory("cat2Val")} />&nbsp;Good
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-2" value="3" onChange={this.updateCategory("cat2Val")} />&nbsp;Fair
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-2" value="2" onChange={this.updateCategory("cat2Val")} />&nbsp;Below Expectations
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-2" value="1" onChange={this.updateCategory("cat2Val")} />&nbsp;Poor
                  </label>
                </div>
              </div>
              <div className="double-cat-container">
                <div id="category-3" className="cat-container">
                  <input type="text" placeholder="Subject #3" className="cat-text" onChange={this.updateCategory("cat3")} />
                  <label className="report-radio">
                    <input type="radio" name="cat-3" value="5" onChange={this.updateCategory("cat3Val")} />&nbsp;Excellent
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-3" value="4" onChange={this.updateCategory("cat3Val")} />&nbsp;Good
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-3" value="3" onChange={this.updateCategory("cat3Val")} />&nbsp;Fair
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-3" value="2" onChange={this.updateCategory("cat3Val")} />&nbsp;Below Expectations
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-3" value="1" onChange={this.updateCategory("cat3Val")} />&nbsp;Poor
                  </label>
                </div>
                <div id="category-4" className="cat-container">
                  <input type="text" placeholder="Subject #4" className="cat-text" onChange={this.updateCategory("cat4")} />
                  <label className="report-radio">
                    <input type="radio" name="cat-4" value="5" onChange={this.updateCategory("cat4Val")} />&nbsp;Excellent
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-4" value="4" onChange={this.updateCategory("cat4Val")} />&nbsp;Good
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-4" value="3" onChange={this.updateCategory("cat4Val")} />&nbsp;Fair
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-4" value="2" onChange={this.updateCategory("cat4Val")} />&nbsp;Below Expectations
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-4" value="1" onChange={this.updateCategory("cat4Val")} />&nbsp;Poor
                  </label>
                </div>
              </div>
              <div className="double-cat-container">
                <div id="category-5" className="cat-container">
                  <input type="text" placeholder="Subject #5" className="cat-text" onChange={this.updateCategory("cat5")} />
                  <label className="report-radio">
                    <input type="radio" name="cat-5" value="5" onChange={this.updateCategory("cat5Val")} />&nbsp;Excellent
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-5" value="4" onChange={this.updateCategory("cat5Val")} />&nbsp;Good
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-5" value="3" onChange={this.updateCategory("cat5Val")} />&nbsp;Fair
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-5" value="2" onChange={this.updateCategory("cat5Val")} />&nbsp;Below Expectations
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-5" value="1" onChange={this.updateCategory("cat5Val")} />&nbsp;Poor
                  </label>
                </div>
                <div id="category-6" className="cat-container">
                  <input type="text" placeholder="Subject #6" className="cat-text" onChange={this.updateCategory("cat6")} />
                  <label className="report-radio">
                    <input type="radio" name="cat-6" value="5" onChange={this.updateCategory("cat6Val")} />&nbsp;Excellent
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-6" value="4" onChange={this.updateCategory("cat6Val")} />&nbsp;Good
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-6" value="3" onChange={this.updateCategory("cat6Val")} />&nbsp;Fair
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-6" value="2" onChange={this.updateCategory("cat6Val")} />&nbsp;Below Expectations
                  </label>
                  <label className="report-radio">
                    <input type="radio" name="cat-6" value="1" onChange={this.updateCategory("cat6Val")} />&nbsp;Poor
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div id="report-submit-container">
            <input type="submit" id="report-data-submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default ReportForm