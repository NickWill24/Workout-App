import React, { Component } from 'react'
import BalanceCard from '../components/BalanceCard'

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
                {this.props.balances.map((balance, index)=>(
                    <BalanceCard 
                        key={index} 
                        image={balance.image}
                        name={balance.name}
                        numOfRep={balance.numOfRep}
                        time={balance.time}
                        description={balance.description}
                    
                    
                    />
                ))}
            </div>
            )}
            return <h1>Loading</h1>
        }
    }