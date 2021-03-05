import React, { Component } from 'react'
import StrengthCard from '../components/StrengthCard'
import StrengthForm from "../components/StrengthForm"

export default class Strength extends Component {
    render(){
        if(this.props){
        return(
            <div>
                <h1>Strength</h1>
                <StrengthForm addStrength={this.props.addStrength}/>
                {this.props.strengths.map((strength, index)=>(
                    <StrengthCard 
                        key={index} 
                        image={strength.image}
                        name={strength.name}
                        numOfRep={strength.numOfRep}
                        time={strength.time}
                        description={strength.description}
                        id={strength._id}
                    
                    
                    />
                ))}
            </div>
            )}
            return <h1>Loading</h1>
        }
    }