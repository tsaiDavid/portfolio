import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  projects: state.projects,
  routing: state.routing
})

class Home extends React.Component {
  render() {
    console.log(this.props.routing)
    return (
      <div className="main-body">
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
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home)
