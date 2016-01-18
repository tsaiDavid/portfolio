import React, { PropTypes } from 'react';
import { HeaderBw } from './HeaderBw';
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
      <div id="main-view">
        <HeaderBw />
        <Header />
        {this.props.children}
      </div>
    );
  }
}
