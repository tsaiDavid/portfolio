import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    return (
      <div id="project-list">
        <div className="video-wrapper row">
          <img
            className="gfyitem"
            data-id="LankyConventionalBuck"
            data-controls="false"
            data-autoplay="true"
            data-expand="true"
          />
        </div>
      </div>
    );
  }
}

export default connect(state => ({ projects: state.projects }))(Home)
