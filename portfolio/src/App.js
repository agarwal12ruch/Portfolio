import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/NavBar";
import Banner from './components/Banner';
import Project from './components/Project';
import Resume from "./components/Resume";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Banner} />
          <Route path="/projects" component={Project} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
