import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
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

componentDidMount(){
  this.getBalanceExercise()
  this.getEnduranceExercise()
  this.getStrengthExercise()
}


getBalanceExercise = async () =>{
  try{
    const response = await axios.get('http://localhost:3001/api/getBalance')
    this.setState({balanceArr: response.data.balances })
  } catch(error){
    console.log('error')
  }
}

addBalance= (data) =>{
  this.setState({balanceArr:[...this.state.balanceArr, data]})
}



getEnduranceExercise= async () =>{
  try{
    const response = await axios.get('http://localhost:3001/api/getEndurance')
    this.setState({enduranceArr: response.data.endurances })
  } catch(error){
    console.log('error')
  }
}

addEndurance= (data) =>{
  this.setState({enduranceArr:[...this.state.enduranceArr, data]})
}

getStrengthExercise= async () =>{
  try{
    const response = await axios.get('http://localhost:3001/api/getStrength')
    this.setState({strengthArr: response.data.strengths })
  } catch(error){
    console.log('error')
  }
}


addStrength= (data) =>{
  this.setState({strengthArr:[...this.state.strengthArr, data]})
}




  render(){
    return (
      <div className="App">
        <main>
          <Switch>
            
            <Route exact path="/" component={Home}/>
            <Route path="/balance" component={(props)=>
              <Balance balances={this.state.balanceArr} addBalance={this.addBalance}/>}></Route>
            <Route path="/endurance" component={(props)=>
              <Endurance endurances={this.state.enduranceArr} addEndurance={this.addEndurance} />}/>
            <Route path="/Strength" component={(props)=>
              <Strength strengths={this.state.strengthArr} addStrength={this.addStrength} />}/>
          </Switch>
        </main>
      </div>
    );
  }
  }

export default App;
