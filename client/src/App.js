import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Workout from './pages/Workout'

class App extends Component {
  render(){
    return (
      <div className="App">
        <main>
          <Switch>
            
            <Route exact path="/" component={Home}/>
            <Route path="/workout" component={Workout}/>
          </Switch>
        </main>
      </div>
    );
  }
  }

export default App;
