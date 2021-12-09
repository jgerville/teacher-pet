import React from "react";

class ReportForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        evaluation form placeholder
        <form className="" action="">
          <div>Pronouns
            <input type="radio" name="" id="" value="1"/>He/Him/His
            <input type="radio" name="" id="" value="2"/>She/Her/Hers
            <input type="radio" name="" id="" value="3"/>They/Them/Theirs
          </div>
          <div>Overall Performance
            <input type="radio" name="" id="" value="1"/>Poor
            <input type="radio" name="" id="" value="2"/>Below Expectations
            <input type="radio" name="" id="" value="3"/>Fair
            <input type="radio" name="" id="" value="4"/>Good
            <input type="radio" name="" id="" value="5"/>Excellent
          </div>
          <div>listens attentively
            <input type="radio" name="" id="" value="true"/>True
            <input type="radio" name="" id="" value="false"/>False
          </div>
          <div>Helps others
            <input type="radio" name="" id="" value="true"/>True
            <input type="radio" name="" id="" value="false"/>False
          </div>
          <div>Participates often
            <input type="radio" name="" id="" value="true"/>True
            <input type="radio" name="" id="" value="false"/>False
          </div>
          <div>Asks questions
            <input type="radio" name="" id="" value="true"/>True
            <input type="radio" name="" id="" value="false"/>False
          </div>
          <div>Good attendance
            <input type="radio" name="" id="" value="true"/>True
            <input type="radio" name="" id="" value="false"/>False
          </div>
          <div>On time
            <input type="radio" name="" id="" value="true"/>True
            <input type="radio" name="" id="" value="false"/>False
          </div>
          <div>Polite
            <input type="radio" name="" id="" value="true"/>True
            <input type="radio" name="" id="" value="false"/>False
          </div>
          <div>Not disruptive
            <input type="radio" name="" id="" value="true"/>True
            <input type="radio" name="" id="" value="false"/>False
          </div>
          <div>Homework completion
            <input type="radio" name="" id="" value="true"/>True
            <input type="radio" name="" id="" value="false"/>False
          </div>
          <div>Additional categories
            <div>Category One
              <input type="text" name="" id="" />
              <div>Score
                <input type="radio" name="" id="" value="1"/>Poor
                <input type="radio" name="" id="" value="2"/>Below Expectations
                <input type="radio" name="" id="" value="3"/>Fair
                <input type="radio" name="" id="" value="4"/>Good
                <input type="radio" name="" id="" value="5"/>Excellent
              </div>
            </div>
            <div>Category Two
              <input type="text" name="" id="" />
              <div>Score
                <input type="radio" name="" id="" value="1"/>Poor
                <input type="radio" name="" id="" value="2"/>Below Expectations
                <input type="radio" name="" id="" value="3"/>Fair
                <input type="radio" name="" id="" value="4"/>Good
                <input type="radio" name="" id="" value="5"/>Excellent
              </div>
            </div>
            <div>Category Three
              <input type="text" name="" id="" />
              <div>Score
                <input type="radio" name="" id="" value="1"/>Poor
                <input type="radio" name="" id="" value="2"/>Below Expectations
                <input type="radio" name="" id="" value="3"/>Fair
                <input type="radio" name="" id="" value="4"/>Good
                <input type="radio" name="" id="" value="5"/>Excellent
              </div>
            </div>
            <div>Category Four
              <input type="text" name="" id="" />
              <div>Score
                <input type="radio" name="" id="" value="1"/>Poor
                <input type="radio" name="" id="" value="2"/>Below Expectations
                <input type="radio" name="" id="" value="3"/>Fair
                <input type="radio" name="" id="" value="4"/>Good
                <input type="radio" name="" id="" value="5"/>Excellent
              </div>
            </div>
            <div>Category Five
              <input type="text" name="" id="" />
              <div>Score
                <input type="radio" name="" id="" value="1"/>Poor
                <input type="radio" name="" id="" value="2"/>Below Expectations
                <input type="radio" name="" id="" value="3"/>Fair
                <input type="radio" name="" id="" value="4"/>Good
                <input type="radio" name="" id="" value="5"/>Excellent
              </div>
            </div>
            <div>Category Six
              <input type="text" name="" id="" />
              <div>Score
                <input type="radio" name="" id="" value="1"/>Poor
                <input type="radio" name="" id="" value="2"/>Below Expectations
                <input type="radio" name="" id="" value="3"/>Fair
                <input type="radio" name="" id="" value="4"/>Good
                <input type="radio" name="" id="" value="5"/>Excellent
              </div>
            </div>
          </div>

        </form>
      </div>
    )
  }
}

export default ReportForm