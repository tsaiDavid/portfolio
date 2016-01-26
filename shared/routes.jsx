import React                   from 'react';
import { Route, IndexRoute }   from 'react-router';
import App                     from 'components/index';
import { AboutView }           from 'components/AboutView';
import { ProjectView }         from 'components/ProjectView';
import AlmanacNewsView         from 'components/ProjectViews/AlmanacNewsView';
import TeamAvailView           from 'components/ProjectViews/TeamAvailView';
import GithubSwipeView           from 'components/ProjectViews/GithubSwipeView';

export default (
  <Route name="app" component={App} path="/">
    <IndexRoute component={ProjectView}/>
    <Route path="/about" component={AboutView} />
    <Route path="/almanac" component={AlmanacNewsView} />
    <Route path="/team-avail" component={TeamAvailView} />
    <Route path="/github-swipe" component={GithubSwipeView} />
  </Route>
);
