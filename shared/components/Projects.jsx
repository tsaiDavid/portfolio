import React from 'react';
import { TeamAvailability } from './TeamAvailability';

export default class Projects extends React.Component  {
  render() {
    return (
      <div className="projects-container">
        <div className="project-title row">
          <div className="twelve columns">
            <h3>Recent Projects</h3>
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
          <img className="nine columns" src="http://i.imgur.com/sCzjkp7.png" />
          <div className="three columns">Almanac News</div>
        </div>
        <hr />
        <div className="project-row row">
          <img className="nine columns" src="http://i.imgur.com/kWzklte.png" />
          <div className="three columns">What A Nice Guy</div>
        </div>
        <hr />
        <div className="project-row row">
          <img className="nine columns" src="http://i.imgur.com/NCulsAp.png" />
          <div className="three columns">Bookplate</div>
        </div>
      </div>
    );
  }
}
