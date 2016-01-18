import React, { PropTypes } from 'react';
import { Header } from './Header';

if (typeof window !== 'undefined') {
  require('../styles/styles.scss');
}

export default class MainView extends React.Component {
  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    return (
      <div id="main-view container">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
