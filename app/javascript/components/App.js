import React, { Component } from "react"
import Home from './pages/Home'
import Header from './components/Header'
import Apartment from './pages/Apartment'


import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Header {...this.props} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Apartment} />
        </Switch>
      </Router>
    )
  }
}

export default App
