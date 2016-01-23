import React from 'react';
import AlmanacCard from './AlmanacCard';
import TeamAvailabilityCard from './TeamAvailabilityCard';

export default class Projects extends React.Component  {
  render() {
    return (
      <div className="projects-container">
        <div id="recent-projects">Recent Projects</div>
        <AlmanacCard />
        <TeamAvailabilityCard />
      </div>
    );
  }
}
