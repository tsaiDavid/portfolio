import React from 'react';
import AlmanacSlider from './AlmanacSlider';
import TeamAvailSlider from './TeamAvailSlider';

export default class Projects extends React.Component  {
  render() {
    return (
      <div className="projects-container">
        <div className="project-title row">
          <div className="twelve columns">
            <p>
            Here are some of my most recent projects I've worked on. Many of them,
            if not all, feature a different intended audience - and were specifically
            developed with that in mind. They demonstrate my track record in designing
            and implementing both small and large-scale applications that leverage either
            legacy or cutting-edge technologies to get the job done properly.
            </p>
            <p>
            This very portfolio itself was created in order to explore the utility of
            creating a server-side rendered React/Redux application.
            </p>
          </div>
        </div>
        <hr />
        <div className="project-row row">
          <div className="twelve columns project-name">
            <h5>Almanac News</h5>
            <em>Responsive, realtime news application providing financial data visualizations.</em>
          </div>
          <div className="project-slider twelve columns"><AlmanacSlider /></div>
        </div>
        <hr />
        <div className="project-row row">
          <div className="twelve columns project-name">
            <h5>Team Availability @ Rafter, Inc.</h5>
            <em>Internal scheduling app that allows the global engineering team to visualize staff availability.</em>
          </div>
          <div className="project-slider twelve columns"><TeamAvailSlider /></div>
        </div>
        <hr />
        <div className="project-row row">
          <div className="twelve columns project-name">
            <h5>What A Nice Guy</h5>
            <em>Portfolio for showcasing my artistic works, primarily black and white film photography.</em>
          </div>
          <img className="twelve columns" src="http://i.imgur.com/kWzklte.png" />
        </div>
        <hr />
        <div className="project-row row">
          <div className="twelve columns project-name">
            <h5>Bookplate</h5>
            <em>Book-management web application designed to complement reading experience.</em>
          </div>
          <img className="twelve columns" src="http://i.imgur.com/NCulsAp.png" />
        </div>
      </div>
    );
  }
}
