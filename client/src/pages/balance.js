import React, { Component } from 'react'
import BalanceCard from '../components/BalanceCard'
import BalanceForm from '../components/BalanceForm'

export default class Balance extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        console.log(this.props.balances)
        if(this.props){
        
        return(
            <div>
                
                <h1>Balance</h1>
                <BalanceForm addBalance={this.props.addBalance} />
                {this.props.balances.map((balance, index)=>(
                    <BalanceCard deleteBalance={this.props.deleteBalance}
                        key={index} 
                        image={balance.image}
                        name={balance.name}
                        numOfRep={balance.numOfRep}
                        time={balance.time}
                        description={balance.description}
                        id={balance._id}
                    
                    
                    />
                ))}
            </div>
            )}
            return <h1>Loading</h1>
        }
    }