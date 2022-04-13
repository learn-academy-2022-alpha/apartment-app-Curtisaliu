import React, { Component } from "react"
import Home from './pages/Home'
import Header from './Header'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header {...this.props} />
          {/* <Navigation /> */}
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
