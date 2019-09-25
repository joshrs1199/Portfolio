import React from 'react';
import './App.css';
import NavBar from './NavBar'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Route, Switch } from 'react-router-dom'

const App = () => {
    return(
      <div>
        <NavBar/>
        <Switch>
          <Route path='/resume' component={Resume}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' component={Contact}/>
          <Route exact path='/' component={AboutMe}/>
        </Switch>
      </div>
    )
}

export default App;
