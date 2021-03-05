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


getBalanceExercise= async () =>{
  try{
    const response = await axios.get('http://localhost:3001/api/getBalance')
    console.log(response)
    this.setState({balanceArr: response.data.balances })
  } catch(error){
    console.log('error')
  }
}

addBalance= (data) =>{
  console.log("add balance firing")
  this.setState({balanceArr:[...this.state.balanceArr, data]})
}

deleteBalance= async (id) =>{
  console.log(id)
  try{
    const response = await axios.delete(`http://localhost:3001/api/deleteBalance/${id}`)
    this.setState({balanceArr: response.data.balances})
  } catch(error){
    console.log('error')
  }
}

getEnduranceExercise= async () =>{
  try{
    const response = await axios.get('http://localhost:3001/api/getEndurance')
    console.log(response)
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
    console.log(response)
    this.setState({strengthArr: response.data.strengths })
  } catch(error){
    console.log('error')
  }
}


addStrength= (data) =>{
  this.setState({strengthArr:[...this.state.strengthArr, data]})
}




  render(){
    console.log(this.state)
    return (
      <div className="App">
        <main>
          <Switch>
            
            <Route exact path="/" component={Home}/>
            <Route path="/balance" component={(props)=>
              <Balance balances={this.state.balanceArr} addBalance={this.addBalance} deleteBalance={this.deleteBalance}/>}/>
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
