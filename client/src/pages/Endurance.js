import React, { Component } from 'react'
import EnduranceCard from '../components/EnduranceCard'
import EnduranceForm from '../components/EnduranceForm'


export default class Endurance extends Component {
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
                <h1>Endurance</h1>
                <EnduranceForm/>
                {this.props.endurances.map((endurance, index)=>(
                    <EnduranceCard 
                        key={index} 
                        image={endurance.image}
                        name={endurance.name}
                        numOfRep={endurance.numOfRep}
                        time={endurance.time}
                        description={endurance.description}
                    
                    
                    />
                ))}
            </div>
            )}
            return <h1>Loading</h1>
        }
    }