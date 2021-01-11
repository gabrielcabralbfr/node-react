import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { SignIn } from './signIn/SignIn';
import bg from "./assets/img_bg.svg"

function App() {
  return (
    <Router>
      <div style={{ backgroundImage: `url(${bg}) 0% 0% no-repeat padding-box` }} className="container">
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/">
            <div>Hello World</div>
          </Route>
          <Route path="/home">
            <div>Home</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
