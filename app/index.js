import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {initSession} from './actions'

import App from './components/App'
import appReducer from './reducers/app'

const store = createStore(appReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

store.dispatch(initSession())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App}/>
    </Router>
  </Provider>, document.getElementById('root'))
