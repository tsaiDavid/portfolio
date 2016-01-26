import React from 'react';
import { Link } from 'react-router';

export default class TeamAvailabilityCard extends React.Component {
  render() {
    return (
      <div className="project-card" id="almanac">
        <div className="project-title">
        Team Availability for Rafter Inc.
        </div>
        <Link to={'team-avail'}>
          <div className="img-wrapper">
            <img src="https://davidtsai.imgix.net/portfolio/media/teamavail/team-avail-home.png?auto=format" />
          </div>
        </Link>
      </div>
    );
  }
}
