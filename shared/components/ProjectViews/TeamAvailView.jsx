import React from 'react';
import TeamAvailSlider from '../ProjectSlider/TeamAvailSlider';

export default class TeamAvailView extends React.Component {

  render() {
    const tools = [
      'React',
      'Fluxxor',
      'Node',
      'Ruby on Rails',
      'MySQL',
      'Webpack',
      'Babel',
      'SASS',
      'Foundation',
      'Git',
    ];

    return (
      <div className="project-view view-container container">
        <div className="project-view-title">
        Team Availability - Rafter Inc.
        </div>
        <div className="project-view-summary">
        Internal web application built with a React view layer - complete with custom built interactions and UI components tied together with the help of Foundation's CSS framework. Designed for scalability, this data driven app leveraged Flux architecture for performant asynchronous retrieval and rendering of user data from a MySQL database.        </div>
        <div className="project-view-tech-label">Tech</div>
        <div className="project-view-tech">
          {tools.map((tool) => {
            return <div className="project-view-tools" key={tool}>{tool}</div>;
          })}
        </div>
        <TeamAvailSlider />
      </div>
    );
  }
}
