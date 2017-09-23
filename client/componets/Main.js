import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Form from './Form';
import DisplaySchema from './DisplaySchema';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Form}/>
      <Route path='/schema' component={DisplaySchema}/>
    </Switch>
  </main>
)

export default Main;
