import React from 'react'
import "../../styles/meet-the-team.css";

const MeetTheTeam = () => (
  <div className="meet-the-team">
    <div className="team-list-container">
      <div className='team-members'>
        <div className='team-col'>
          <div className='teammate-card'>
            <img src="https://avatars.githubusercontent.com/u/79581995?v=4" alt="julian" />
            <p className='teammate-name'>Julian Erville</p>
            <div className='teammate-socials'>
              <a href="https://www.linkedin.com/in/julian-erville/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/jgerville/">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className='teammate-card'>
            <img src="https://avatars.githubusercontent.com/u/89127270?v=4" alt="emily" />
            <p className='teammate-name'>Emily Bell</p>
            <div className='teammate-socials'>
              <a href="https://www.linkedin.com/in/emily-bell-062991/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/ecbell">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className='team-col'>
          <div className='teammate-card'>
            <img src="https://avatars.githubusercontent.com/u/75001991?v=4" alt="chris" />
            <p className='teammate-name'>Chris Cheasty</p>
            <div className='teammate-socials'>
              <a href="https://www.linkedin.com/in/chris-cheasty/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/cjc473">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className='teammate-card'>
            <img src="https://avatars.githubusercontent.com/u/63416154?v=4" alt="matt" />
            <p className='teammate-name'>Matthew Lese</p>
            <div className='teammate-socials'>
              <a href="https://www.linkedin.com/in/matthewlese/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/matthewlese">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="project-desc">Teacher’s Pet is a collaboration inspired by the experiences of former English teacher Julian Erville. To see additional projects by our team members, please visit our LinkedIn and GitHub Pages</div>
  </div>
)

export default MeetTheTeam;