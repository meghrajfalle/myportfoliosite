import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landingpage from './landingpage';
import About from './aboutme';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Landingpage}></Route>
      <Route exact path='/aboutme' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/projects' component={Projects}></Route>
      <Route exact path='/resume' component={Resume}></Route>
    </Switch>
  );
};

export default Main;
