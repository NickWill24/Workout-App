import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Workout from './pages/Workout'
import Balance from './pages/Balance'
import Endurance from './pages/Endurance'
import Strength from './pages/Strength'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state={
      enduranceArr: [],
      strengthArr:[],
      balanceArr:[]
    } 
  }

getBalanceExecrise= async () =>{
  try{
    const response = await axios.get('http://localhost:3001/api/getBalance')
    console.log(response)
  } catch(error){
    console.log('error')
  }
}

getEnduranceExecrise= async () =>{
  try{
    const response = await axios.get('http://localhost:3001/api/getEndurance')
    console.log(response)
  } catch(error){
    console.log('error')
  }
}

getStrengthExecrise= async () =>{
  try{
    const response = await axios.get('http://localhost:3001/api/getStrength')
    console.log(response)
  } catch(error){
    console.log('error')
  }
}

  render(){
    return (
      <div className="App">
        <main>
          <Switch>
            
            <Route exact path="/" component={Home}/>
            <Route path="/workout" component={Workout}/>
            <Route path="/balance" component={(props)=>
              <Balance props={this.state.balanceArr}/>}/>
            <Route path="/endurance" component={Endurance}/>
            <Route path="/Strength" component={Strength}/>
          </Switch>
        </main>
      </div>
    );
  }
  }

export default App;
