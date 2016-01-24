import React                   from 'react';
import { Route, IndexRoute }   from 'react-router';
import App                     from 'components/index';
import { AboutView }           from 'components/AboutView';
import { ProjectView }         from 'components/ProjectView';
import { AlmanacNewsView }     from 'components/AlmanacNewsView';

export default (
  <Route name="app" component={App} path="/">
    <IndexRoute component={ProjectView}/>
    <Route path="about" component={AboutView} />
    <Route path="almanac" component={AlmanacNewsView} />
    <Route path="bookplate" component={AlmanacNewsView} />
  </Route>
);
