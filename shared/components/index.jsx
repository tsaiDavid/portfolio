import React, { PropTypes } from 'react'
import { NameDescription } from './NameDescription'

if (typeof window !== 'undefined') {
  require('../styles/main.scss')
}

export default class MainView extends React.Component {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    return (
      <div id="main-view">
        <div className="main-header row">
          <div id="title-name" className="ten columns">david tsai</div>
          <NameDescription className="two columns"/>
        </div>
        {this.props.children}
      </div>
    )
  }
}
