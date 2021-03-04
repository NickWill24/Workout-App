import React, { Component } from 'react'
import StrengthCard from '../components/StrengthCard'

export default class Strength extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        console.log(this.props.strengths)
        if(this.props){
        return(
            <div>
                <h1>Strength</h1>
                {this.props.strengths.map((strength, index)=>(
                    <StrengthCard 
                        key={index} 
                        image={strength.image}
                        name={strength.name}
                        numOfRep={strength.numOfRep}
                        time={strength.time}
                        description={strength.description}
                    
                    
                    />
                ))}
            </div>
            )}
            return <h1>Loading</h1>
        }
    }