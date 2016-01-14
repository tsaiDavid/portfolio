import React                  from 'react'
import ReactDOM               from 'react-dom'
import { Router }             from 'react-router'
import { syncReduxAndRouter } from 'redux-simple-router'
import createBrowserHistory   from 'history/lib/createBrowserHistory'
import { Provider }           from 'react-redux'
import * as reducers          from 'reducers'
import routes                 from 'routes'
import promiseMiddleware      from 'lib/promiseMiddleware'
import immutifyState          from 'lib/immutifyState'
import { createStore,
         combineReducers,
         applyMiddleware }    from 'redux'

const target = document.getElementById('react-view')
const initialState = immutifyState(window.__INITIAL_STATE__)
const history = createBrowserHistory()
const reducer = combineReducers(reducers)
const store   = applyMiddleware(promiseMiddleware)(createStore)(reducer, initialState)

syncReduxAndRouter(history, store)

const node = (
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>
)

ReactDOM.render(node, target)
