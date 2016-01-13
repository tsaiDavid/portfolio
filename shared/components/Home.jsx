import React, { Component , PropTypes }   from 'react';
// import TodosView              from './TodosView';
// import TodosForm              from './TodosForm';
// import { bindActionCreators } from 'redux';
// import * as TodoActions       from 'actions/TodoActions';
import { connect }            from 'react-redux';

class Home extends Component {
  static propTypes = {
    projects: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const { projects } = this.props;

    return (
      <div id="project-list">
        {projects}
      </div>
    );
  }
}

export default connect(state => ({ projects: state.projects }))(Home)
