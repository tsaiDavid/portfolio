import React from 'react';
import AlmanacSlider from './AlmanacSlider';

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
          <div className="twelve columns project-name">Almanac News</div>
          <div className="project-slider twelve columns"><AlmanacSlider /></div>
        </div>
        <hr />
        <div className="project-row row">
          <div className="twelve columns project-name">Team Availability</div>
          <img className="twelve columns" src="http://i.imgur.com/TRGdpEe.png" />
        </div>
        <hr />
        <div className="project-row row">
          <div className="twelve columns project-name">What A Nice Guy</div>
          <img className="twelve columns" src="http://i.imgur.com/kWzklte.png" />
        </div>
        <hr />
        <div className="project-row row">
        <div className="twelve columns project-name">Bookplate<hr/></div>
          <img className="twelve columns" src="http://i.imgur.com/NCulsAp.png" />
        </div>
      </div>
    );
  }
}
