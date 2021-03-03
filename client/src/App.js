import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Workout from './pages/Workout'
import Balance from './pages/Balance'
import Endurance from './pages/Endurance'
import Strength from './pages/Strength'

class App extends Component {
  render(){
    return (
      <div className="App">
        <main>
          <Switch>
            
            <Route exact path="/" component={Home}/>
            <Route path="/workout" component={Workout}/>
            <Route path="/balance" component={Balance}/>
            <Route path="/endurance" component={Endurance}/>
            <Route path="/Strength" component={Strength}/>
          </Switch>
        </main>
      </div>
    );
  }
  }

export default App;
