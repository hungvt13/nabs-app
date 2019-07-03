import React from 'react';

import { Route , Switch} from 'react-router-dom';

import App from './App';
import Details from './details';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/:mid' component={Details}/>
    </Switch>
  </main>
)

export default Main;
