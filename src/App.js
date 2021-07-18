import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';
import professional from './components/professional';
import profile from './components/profile';


const App = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={professional}/>
          <Route name="profile" path="/:slug" component={profile}/>
          {/* <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/Signup" component={Signup}/>
          <Route path="*" component={NotFound}/> */}
      </Switch>
  </BrowserRouter>
);

export default App;