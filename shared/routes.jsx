import React                   from 'react'
import { Route, IndexRoute }   from 'react-router'
import App                     from 'components/index'
import Home                    from 'components/Home'
import { AboutView }           from 'components/AboutView'
import { ProjectView }         from 'components/ProjectView'

export default (
  <Route name="app" component={App} path="/">
    <IndexRoute component={Home}/>
    <Route path="about" component={AboutView} />
    <Route path="projects" component={ProjectView} />
  </Route>
);
