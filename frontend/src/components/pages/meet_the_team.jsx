import React from 'react'
import "../../styles/meet-the-team.css";

const MeetTheTeam = () => (
  <div className="meet-the-team">
    <h1>Meet the Team</h1>
    <div className="team-list-container">
      <ul className='team-members'>
        <li>
          <p>Julian Erville</p>
          <img src="https://avatars.githubusercontent.com/u/79581995?v=4" alt="julian" />
          <a href="">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/jgerville/">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <p>Emily Bell</p>
          <img src="https://avatars.githubusercontent.com/u/89127270?v=4" alt="emily" />
          <a href="">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/ecbell">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <p>Chris Cheasty</p>
          <img src="https://avatars.githubusercontent.com/u/75001991?v=4" alt="chris" />
          <a href="">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/cjc473">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <p>Matthew Lese</p>
          <img src="https://avatars.githubusercontent.com/u/63416154?v=4" alt="matt" />
          <a href="">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/matthewlese">
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default MeetTheTeam;